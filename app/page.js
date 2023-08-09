"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BdCake from "./components/BdCake";
import { useReward } from "react-rewards";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const [animationComplete, setAnimationComplete] = useState(false);
  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } =
    useReward("balloonsReward", "balloons", {
      zIndex: 90,
      spread: 70,
      elementCount: 50,
      elementSize: 30,
      lifetime: 700,
      startVelocity: 5,
      onAnimationComplete: () => setAnimationComplete(true),
    });

  useEffect(() => {
    animationComplete ? router.push("/details") : balloonsReward();
  }, [animationComplete]);
  return (
    <>
      <div className="w-full flex flex-1 items-center place mx-0">
        <BdCake />
      </div>
      <span id="balloonsReward" className="absolute bottom-0" />
    </>
  );
}
