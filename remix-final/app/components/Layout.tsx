import type { ReactNode} from 'react';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useShoppingCart } from 'use-shopping-cart';
import CartOverview from './CartOverview';

// const usePrevious = (value) => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };

function Layout({
  children,
}: {
  children: ReactNode;
}) {
  // const { handleCloseCart } = useShoppingCart();
  // const prevLocation = usePrevious(location.pathname)

  // useEffect(() => {
  //   if (currentLocation !== prevLocation) {
  //     handleCloseCart();
  //   }
  // }, [currentLocation, handleCloseCart, prevLocation]);

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          mass: 0.35,
          stiffness: 75,
          duration: 0.5,
        }}
      >
        {children}
      </motion.main>
      <CartOverview />
    </>
  );
}

export default Layout;
