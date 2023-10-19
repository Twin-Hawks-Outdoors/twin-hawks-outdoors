import React, { useEffect } from "react";

import {  useShoppingCart } from "use-shopping-cart";
import type { CartEntry } from "use-shopping-cart/core";
import { Icon } from "./ui/Icon";
import { useFetcher } from "@remix-run/react";

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
      <img
        className="object-cover object-center rounded-sm shadow-md"
        src={cartItem?.image}
        alt={cartItem?.name}
        width={100}
      />
      <div className="justify-self-start">
        <h6>{cartItem?.name}</h6>
        <p className="mb-0">
          {cartItem?.quantity} @ {cartItem?.formattedPrice}
        </p>
        <div className="flex gap-2 items-center">
          <button onClick={() => decrementItem(cartItem?.id)} type="button">
            <Icon name="minus" />
          </button>
          <span>{cartItem?.quantity}</span>
          <button onClick={() => incrementItem(cartItem?.id)} type="button">
            <Icon name="plus" />
          </button>
        </div>
      </div>
      <h6 className="m-0 flex-auto text-right">{cartItem?.formattedValue}</h6>
    </li>
  );
};

export default function CartOverview() {
  const cart = useShoppingCart();

  const sessionFetcher = useFetcher<{sessionId?: string}>();
  const {
    shouldDisplayCart,
    handleCloseCart,
    redirectToCheckout,
    formattedTotalPrice,
  } = cart;


	useEffect(() => {
		if(sessionFetcher.data?.sessionId) {
			redirectToCheckout(sessionFetcher.data.sessionId)
		}

	}, [sessionFetcher, redirectToCheckout])

  if (!shouldDisplayCart) return null;
  return (
    <div className="h-screen  fixed top-0 right-0 bg-cream-100 p-8 z-40 shadow-lg flex flex-col overflow-y-scroll">
      <header className="mb-8 flex justify-between items-center gap-4">
        <h4 className="m-0">My Cart</h4>
        <button
          className="flex items-center gap-2 m-0 bg-red-400 px-2 rounded-sm text-white"
          type="button"
          onClick={() => handleCloseCart()}
        >
          <Icon name="x" /> Close Cart
        </button>
      </header>
      <ul className="max-w-sm  mb-16">
        {Object.values(cart.cartDetails ?? {}).length > 0 ? (
          Object.values(cart.cartDetails ?? {}).map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem?.id} />
          ))
        ) : (
          <li>No items in cart...</li>
        )}
      </ul>
      <footer className="">
        <sessionFetcher.Form action="/resources/session" method="POST">
          <input
            type="hidden"
            name="body"
            value={JSON.stringify(cart.cartDetails)}
          />
          <button
            // onClick={handleCheckoutClick}
            type="submit"
            disabled={sessionFetcher.state === "submitting"}
            className="bg-teal-500 text-white w-full py-2 text-md font-serif   shadow-md hover:shadow-lg transition-all duration-200 link-focus"
          >
            {sessionFetcher.state === "submitting" ? (
              <span className="animate-pulse">Please wait...</span>
            ) : (
              `Checkout ${formattedTotalPrice || ""}`
            )}
          </button>
        </sessionFetcher.Form>
      </footer>
    </div>
  );
}
