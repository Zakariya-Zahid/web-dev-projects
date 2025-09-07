import React from "react";
import { motion } from "framer-motion";

const DotLoader = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-10">
      <motion.span
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
      />
      <motion.span
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
      />
      <motion.span
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
      />
    </div>
  );
};

export default DotLoader;
