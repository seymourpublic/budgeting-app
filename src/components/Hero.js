import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
      <motion.div
        className="container mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-6">
          Take Control of Your Finances
        </h1>
        <p className="text-xl mb-8">
          Start budgeting today and achieve your financial goals with ease.
        </p>
        <motion.button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="bg-white text-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Budgeting Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
