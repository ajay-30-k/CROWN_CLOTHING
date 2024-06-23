// src/utils/animatedText.js

import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.span
      className="animated-text-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
