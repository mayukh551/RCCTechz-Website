import React, { useEffect, useState } from "react";
import reg from "./assets/reg.png";
import cheked from "./assets/checked.png";
import trophy from "./assets/trophy.png";
import pen from "./assets/pen.png";
import camera from "./assets/camera.png";
import draw from "./assets/draw.png";
import video from "./assets/video.png";
import rocket from "./assets/rocket.png";
import bulb from "./assets/bulb.png";
import water from "./assets/water.png";
import write from "./assets/write.png";
import banner from "./assets/banner.jpeg"
import new_banner from './assets/new_banner.jpg'
import "react-icons";
import Navbar from "../../Home/Header/Navbar";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Main = () => {

    const [startAnimation, setStartAnimation] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        } else {
            setStartAnimation(false);
        }
    }, [inView]);

    return (
        <div className="w-full overflow-y-hidden">
            <Navbar />
            <div className="min-w-[415px] lg:w-full  bg-black text-white flex items-center justify-center">

                <img src={banner} alt="" className="w-full h-full md:mt-14" />
            </div>
            <div className="bg-[#000A2F] pb-[100px] min-w-[415px] lg:w-full">
                <div className=" flex flex-col gap-[5rem] md:flex-row justify-evenly items-center pt-[100px]"
                    ref={ref}
                >
                    <motion.div
                        className="bg-[#9B8CF8] mr-5 hover:scale-110 duration-100 flex flex-col items-center  justify-center w-[280px] h-[395px] md:w-[315px] md:h-[434px] rounded-3xl"
                        initial={{ opacity: 0, x: "-20%" }}
                        animate={startAnimation && { opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    >
                        <div>
                            <img src={reg} alt="/" className="h-30" />
                        </div>
                        <p className="font-patua font-bold w-[225px] pt-16 flex flex-col items-center space-y-2 text-xl">
                            <p>Imagine</p> <p>Design</p> <p>Develop</p>
                        </p>
                    </motion.div>
                    <motion.div
                        className=" bg-[#E96D6D] mr-5  flex flex-col justify-center items-center w-[280px] h-[395px] md:w-[315px] md:h-[434px] rounded-3xl"
                        initial={{ opacity: 0, y: "+20%" }}
                        animate={startAnimation && { opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    >
                        <div>
                            <img src={cheked} alt="/" className=" h-30" />
                        </div>
                        <p className="font-patua font-bold w-[225px] pt-12 flex flex-col items-center justify-center space-y-2 text-lg text-center">
                            <p>Present your work with confidence</p> <p>contribute and make an impact.</p> <p> <button class="rounded-full px-3 py-1 mt-5 font-semibold hover:scale-110 duration-100  bg-[#ffe4e6]"><a href="https://forms.gle/rzVk3srTgEog3baG8">Register Now</a></button></p>
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-[#7CDD9D] mr-5 hover:scale-110 duration-100 flex flex-col items-center justify-center w-[280px] h-[395px] md:w-[315px] md:h-[434px] rounded-3xl"
                        initial={{ opacity: 0, x: "+20%" }}
                        animate={startAnimation && { opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                    >
                        <div>
                            <img src={trophy} alt="/" className=" h-30" />
                        </div>
                        <p className="font-patua font-bold w-[225px] flex flex-col items-center justify-center text-center pt-16 text-2xl">
                            <p>Rising above the competition.</p>
                        </p>
                    </motion.div>
                </div>

                <div>
                    <img
                        src={bulb}
                        alt="/"
                        className="absolute right-[0] top-[5040px] lg:top-[1800px] h-[300px] lg:h-[608px] opacity-[60%] "
                    />
                </div>

                <div>
                    <img
                        src={rocket}
                        alt=""
                        className="z-[0] absolute top-[2040px] lg:top-[1140px] lg:left-[-80px] h-[300px] lg:h-[608px] opacity-[60%]"
                    />
                </div>
                <div className="flex flex-col gap-[5rem] md:flex-row justify-evenly items-center mt-40 ">
                    <div className="h-[225px] w-[225px] flex z-[10] flex-col mr-5 justify-center items-center rounded-full hover:scale-110 duration-100 bg-[#AEADDC] ">
                        <img src={pen} alt="/" className="z-[10]" />
                    </div>
                    <div className="text-white z-[10] h-[500px] space-y-7 w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#514FA6] text-center font-bold p-[4rem] rounded-3xl font-patua md:space-y-5">
                        <p className=" text-4xl">Graphics & poster</p>
                        <p className=" text-lg">Artfully communicating ideas and capturing attention through visually engaging designs.</p>
                        <p className=" text-lg"> <button class="rounded-full px-3 py-1 mt-2 bg-[#AEADDC] font-semibold hover:scale-110 duration-100 text-black"><a href="https://forms.gle/Dnxi6Csr6USTwtvP6">Submit Now</a></button></p>
                    </div>
                </div>

                <div className="flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
                    <div className=" text-white z-[10] h-[500px] space-y-7 w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#BE4A4A] text-center text-lg font-bold p-[2rem] md:p-[4rem] rounded-3xl font-patua md:space-y-5">
                        <p className=" text-4xl">Photography</p>
                        <p className=" text-lg">Capturing moments and stories through the lens, preserving memories and evoking emotions.</p>
                        <p className=" text-lg"> <button class="rounded-full px-3 py-1 mt-2 bg-[#E48C8C] font-semibold hover:scale-110 duration-100 text-black"><a href="https://forms.gle/5Urvx9vg7jJQnSCF7">Submit Now</a></button></p>
                    </div>
                    <div className="h-[225px] z-[10] w-[225px] flex flex-col mr-5 justify-center items-center rounded-full hover:scale-110 duration-100 bg-[#E48C8C]">
                        <img src={camera} alt="/" className="" />
                    </div>
                </div>

                <div className="flex flex-col gap-[5rem] md:flex-row justify-evenly  items-center mt-40">
                    <div className="h-[225px] w-[225px] flex flex-col mr-5 justify-center items-center rounded-full hover:scale-110 duration-100 bg-[#7CDD9D]">
                        <img src={draw} alt="" />
                    </div>
                    <div className=" text-white z-[10] h-[500px] space-y-7 w-[300px] mr-5 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col hover:scale-110 duration-100 justify-center bg-[#2BA555] text-center text-lg font-bold p-[4rem] rounded-3xl font-patua md:space-y-5">
                        <p className=" text-4xl">Illustration</p>
                        <p className=" text-lg">Bringing imagination to life through visual storytelling and creative expression.</p>
                        <p className=" text-lg"> <button class="rounded-full px-3 py-1 mt-2 bg-[#7CDD9D] font-semibold hover:scale-110 duration-100 text-black"><a href=" https://forms.gle/CXfftX1WU1T1YjC1A">Submit Now</a></button></p>
                    </div>
                </div>

                <div className=" mx-3 flex flex-col-reverse gap-[5rem] md:flex-row justify-evenly  items-center mt-40 ">
                    <div className="text-white z-[10] w-[300px] mr-5 h-[500px] space-y-7 lg:w-[750px] md:h-[225px] md:w-[830px] flex flex-col justify-center hover:scale-110 duration-100 bg-[#862197] text-center text-lg font-bold p-[4rem] rounded-3xl font-patua md:space-y-5">
                        <p className=" text-4xl">Video and Animation</p>
                        <p className=" text-lg">Crafting compelling narratives through the art of moving images, sound, and editing.</p>
                        <p className=" text-lg"> <button class="rounded-full px-3 py-1 mt-2 bg-[#DDA6E5] font-semibold hover:scale-110 duration-100 text-black"><a href=" https://forms.gle/UHPdQ5RCbkbju3eM6">Submit Now</a></button></p>
                    </div>
                    <div className="h-[225px] w-[225px] mr-5 flex flex-col justify-center hover:scale-110 duration-100 items-center rounded-full bg-[#DDA6E5]">
                        <img src={video} alt="/" className="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
//absolute left-[450px] top-[143px] font-normal text-[200px] font-patua leading-[243.8px] text-center tracking-[10%]
