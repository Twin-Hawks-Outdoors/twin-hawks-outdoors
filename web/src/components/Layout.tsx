import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        mass: 0.35,
        stiffness: 75,
        duration: 0.3,
      }}
    >
      {children}
    </motion.main>
  );
}

export default Layout;
