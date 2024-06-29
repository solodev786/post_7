"use client";
import Image from "next/image";
import { Orbitron, Bebas_Neue } from "next/font/google";
import one from "../assets/5.png";
import two from "../assets/4.png";
import three from "../assets/1.png";
import { delay, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaShoppingCart } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

const orbitron = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  setInterval(() => {
    scrollNext();
  }, 2000);

  return (
    <>
      <div className=" w-full h-screen overflow-hidden  bg-gradient-radial from-gray-500 to-black embla">
        <div className=" w-full flex justify-center -10">
          <div
            className={`${orbitron.className} w-full flex flex-col gap-3 items-center relative`}
          >
            <div className=" pt-10 w-full justify-between flex px-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3.8 }}
              >
                <h1 className=" text-5xl">HexaCloths</h1>
              </motion.div>
              <div className=" flex items-center gap-10 text-xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 4 }}
                >
                  <h1>Home</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 4.2 }}
                >
                  <h1>About</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 4.4 }}
                >
                  <h1>Products</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 4.6 }}
                >
                  <h1>Services</h1>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 4.8 }}
              >
                <FaShoppingCart className=" text-3xl" />
              </motion.div>
            </div>
            <div className=" flex items-center gap-2 absolute top-[500px] ">
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  H
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  e
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  x
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  a
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  c
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  l
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  o
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  t
                </h1>
              </motion.div>
              <motion.div
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 2.1 }}
              >
                <h1
                  className={`${orbitron.className} uppercase text-[250px] font-black`}
                >
                  h
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full h-[600px]  relative  flex items-center ">
          <div className="  relative w-full h-full flex justify-center">
            <motion.div
              initial={{ x: -3000 }}
              animate={{ x: 0, rotate: 20 }}
              transition={{ delay: 3 }}
              className=" w-[2000px] bottom-52 absolute h-16 rotate-[14deg] bg-gray-950 flex gap-10 items-center"
            >
              <Marquee loop={0} autoFill className=" ">
                <div className="flex gap-10  items-center ">
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase pr-10">hexashop</h1>
                </div>
              </Marquee>
            </motion.div>
            <motion.div
              initial={{ x: 0, y: 1000 }}
              animate={{ x: 0, y: 0 }}
              transition={{ delay: 2.3, duration: 0.5 }}
              className=" w-full flex items-center justify-center embla__viewport"
              ref={emblaRef}
            >
              <div className=" flex flex-col h-screen items-center w-full mt-48 overflow-y-scroll embla__container">
                <Image className=" embla__slide  z-20" src={one} width={600} />
                <Image className=" embla__slide  z-20" src={three} width={600} />
                <Image
                  className=" embla__slide  z-20"
                  src={three}
                  width={600}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 3000, opacity: 0 }}
              animate={{ x: 0, rotate: -20, opacity: 1 }}
              transition={{ delay: 4 }}
              className=" w-[2000px] bottom-52 absolute h-16 rotate-[14deg] bg-gray-950 flex gap-10 items-center z-50"
            >
              <Marquee loop={0} autoFill className=" ">
                <div className="flex gap-10  items-center ">
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase">hexashop</h1>
                  <h1 className=" uppercase pr-10">hexashop</h1>
                </div>
              </Marquee>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
