import React from 'react';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { DebugCart, useShoppingCart } from 'use-shopping-cart';
import { CartEntry } from 'use-shopping-cart/core';

interface CartItem {
  name: string;
  description?: string;
  formattedPrice: string;
  formattedValue: string;
  id: string;
  image?: string;
  price: number;
  quantity: number;
  value: number;
  price_data?: Record<string, any>;
  product_data?: Record<string, any>;
}
const CartItem = ({ cartItem }: { cartItem: CartEntry }) => {
  const { decrementItem, incrementItem } = useShoppingCart();
  return (
    <li className="py-2 border-b-2 flex gap-4 items-center justify-between">
      <img src={cartItem?.image} alt={cartItem?.name} width={100} />
      <div className="justify-self-start">
        <h6>{cartItem?.name}</h6>
        <p className="mb-0">
          {cartItem?.quantity} @ {cartItem?.formattedPrice}
        </p>
        <div className="flex gap-2 items-center">
          <button onClick={() => decrementItem(cartItem?.id)} type="button">
            <HiOutlineMinusSm />
          </button>
          <span>{cartItem?.quantity}</span>
          <button onClick={() => incrementItem(cartItem?.id)} type="button">
            <HiOutlinePlusSm />
          </button>
        </div>
      </div>
      <h6 className="m-0 flex-auto text-right">{cartItem?.formattedValue}</h6>
    </li>
  );
};

export default function CartOverview() {
  const cart = useShoppingCart();
  const {
    cartDetails,
    shouldDisplayCart,
    handleCloseCart,
    redirectToCheckout,
    formattedTotalPrice,
  } = cart;


  const cartItems = Object.values(cartDetails);

  console.log(cartItems);

  // async function to handle checkout click
  const handleCheckoutClick = () => {
    // basic fetch to get api sessionId
    fetch('/api/session', {
      method: 'POST',
      body: JSON.stringify(Object.values(cartDetails)),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((resBody) => {
        console.log(resBody);
        // redirectToCheckout(body);
      });
  };

  if (!shouldDisplayCart) return null;
  return (
    <div className="h-screen  fixed top-0 right-0 bg-cream-100 p-8 z-40 shadow-lg flex flex-col">
      <header className="mb-8 flex justify-between items-center gap-4">
        <h4 className="m-0">My Cart</h4>
        <button
          className="flex items-center gap-2 m-0 bg-red-400 px-2 rounded-sm text-white"
          type="button"
          onClick={() => handleCloseCart()}
        >
          <AiOutlineClose /> Close Cart
        </button>
      </header>
      <ul className="max-w-sm flex-auto">
        {Object.values(cartDetails).length > 0 ? (
          Object.values(cartDetails).map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem?.id} />
          ))
        ) : (
          <li>No items in cart...</li>
        )}
      </ul>
      <footer className="">
        <button
          onClick={handleCheckoutClick}
          type="button"
          className="bg-teal-500 text-white w-full py-2 text-md font-serif   shadow-md hover:shadow-lg transition-all duration-200 link-focus"
        >
          Checkout {formattedTotalPrice}
        </button>
      </footer>
    </div>
  );
}
