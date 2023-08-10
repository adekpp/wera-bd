"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReward } from "react-rewards";
import { useRouter } from "next/navigation";
import Spinner from "../components/Spinner";

export default function Details() {
  const router = useRouter();
  const input = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const { reward: balloonsReward, isAnimating: isBalloonsAnimating } =
    useReward("balloonsReward", "balloons", {
      zIndex: 90,
      spread: 70,
      elementCount: 10,
      elementSize: 20,
      lifetime: 400,
      startVelocity: 2,
      angle: 140,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.current.value || input.current.value === "") return;
    setIsLoading(true);
    const res = await fetch("/guests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ name: input.current.value }),
    });
    router.refresh();
    balloonsReward();
    if (res.status === 200) {
      setIsLoading(false);
      input.current.value = "";
      toast.success("🎂  Dzięki za info!  🎂 ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-start mx-0 font-sans mt-10"
    >
      <div className="flex flex-col place-items-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-300 to-pink-600 bg-clip-text text-transparent mb-3 text-left w-full">
          Cześć!
        </h1>
        <p className="text-sm  md:text-xl text-left">
          Zapraszam Cię na wspólne świętowanie moich drugich urodzin!
        </p>
        <p className="font-semibold text-sm  md:text-xl mt-2 text-left w-full whitespace-break-spaces">
          Bawialnia Tęczolandia, Police 10.09, {"\n"}godzina 12:30.
        </p>
        <small className="place-self-end">~Werona</small>
        <p className="mt-4">👇 Daj znać czy przyjedziesz 👇</p>
        <form
          onSubmit={handleSubmit}
          className="flex space-x-2 items-center mt-6"
        >
          <label className="text-gray-800 font-light">Imię:</label>
          <input
            ref={input}
            type="text"
            className="border-2 border-pink-400 rounded-md outline-none px-1 py-1 max-w-[150px]"
            placeholder="Andrzej"
          />
          <button
            type="submit"
            className={`relative inline-flex bg-pink-600 py-1 px-4 rounded-md text-white shadow-md active:scale-95 ${
              isLoading
                ? "pointer-events-none opacity-75"
                : "pointer-events-auto"
            }`}
            disabled={isLoading}
          >
            <span
              className={`absolute flex items-center w-full left-0 justify-center ${
                isLoading ? "opacity-1" : "opacity-0"
              }`}
            >
              <Spinner color={"white"} size={"24"} />
            </span>
            <p className={`${isLoading && "opacity-0"}`}>Zapisz</p>
            <span id="balloonsReward" />
          </button>
        </form>

        <button
          type="button"
          onClick={() => router.push("/list")}
          className="p-2 bg-white border-pink-600 border-2 rounded-md shadow-md hover:bg-pink-600 hover:text-white text-gray-900 mt-8 active:scale-90"
        >
          Lista gości
        </button>
              <p className="mt-6 text-left w-full">Mapka: 🗺 </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.044393377216!2d14.545887712234924!3d53.539121560166784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0cb3e270f5a5%3A0xdad122acd0e61a43!2sT%C4%99czolandia.%20Centrum%20Zabaw!5e0!3m2!1spl!2sfr!4v1691690987648!5m2!1spl!2sfr"
            className=" mb-6 border-4 rounded-md border-pink-300 w-full h-[300px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <p className="bg-gradient-to-r from-sky-500 to-pink-500 rounded-md px-2 py-2 w-full text-white font-semibold text-sm text-center">Kontakt: 502 676 380 (mama Weroniki)</p>
   
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </motion.main>
  );
}
