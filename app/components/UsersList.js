"use client";
import { motion } from "framer-motion";

export default function UsersList({ index, user }) {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.1 + index / 3,
      }}
      key={index}
      className="bg-gradient-to-r from-sky-500 to-pink-500 text-sm p-1 rounded-md w-full text-white drop-shadow-md font-semibold"
    >
      {user.name}
    </motion.li>
  );
}
