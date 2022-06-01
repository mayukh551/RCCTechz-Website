import cpu from "../../SVGs/cpu.svg";
import database from "../../SVGs/database.svg";
import laptop from "../../SVGs/laptop.svg";
import style from "./DefineClub.module.css";
import linux from "../../SVGs/linux.svg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DefineClub = () => {
    const imgPC = useRef(null);
    const contentDefine = useRef(null);
    const headingDefine = useRef(null);
    const btn = useRef(null);
    const scrollTriggerDiv = useRef(null);
    useEffect(() => {

        // Here, describe the timeline of animations...

        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: scrollTriggerDiv.current,
                start: "top 70%",
            },
        });
        t1.from(contentDefine.current, {
            opacity: 0,
            yPercent: -30,
            duration: 0.5,
        })
            .from(imgPC.current, {
                xPercent: -100,
                opacity: 0,
                duration: 0.6,
            })
            .from(btn.current, {
                opacity: 0,
                yPercent: -20,
                duration: 0.5,
            });
    }, []);

    return (
        <div
            className={`relative flex flex-row items-center h-screen text-white`}
            style={{ color: "#f1faee", backgroundColor: "#e63946" }}
            ref={scrollTriggerDiv}
        >
            <img
                ref={imgPC}
                className="w-auto h-full hidden lg:inline-block "
                src="https://images.unsplash.com/photo-1523289619259-44358ba02ba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60"
                alt=""
            />
            <div
                className={`px-4 sm:pl-14 sm:pr-20 text-justify ${style.content}`}
                ref={contentDefine}
            >
                <h1
                    className="defineClub-headingDefine text-2xl sm:text-5xl pl-4 border-l-[10px] text-left"
                    style={{ borderColor: "#a8dadc" }}
                    ref={headingDefine}
                >
                    What are we?
                </h1>
                <p className="mt-8 w-full md:w-[70%] font-medium text-left 2xl:text-2xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nihil voluptates quae nostrum mollitia quod exercitationem
                    obcaecati. Maxime consequuntur quas laboriosam? Impedit
                    delectus corrupti pariatur minima rem tempore dolorum
                    doloribus expedita molestiae repudiandae dolor eius atque
                    officiis quisquam voluptatum, voluptatem voluptates
                    repellendus. Et necessitatibus dolores similique ab
                    doloremque pariatur repellendus labore?
                </p>
                <button
                    ref={btn}
                    className="rounded-lg mt-11 py-2 px-3 bg-slate-700 hover:bg-slate-600 active:bg-slate-500"
                >
                    Know More
                </button>
            </div>

            <div className={`${style.svg}`}>
                <img
                    className="absolute hidden sm:inline-block w-16 left-[37%] md:left-[50%] bottom-[5%] lg:hidden "
                    src={linux}
                    alt=""
                />

                <img
                    className="w-16 absolute bottom-20 right-20"
                    src={cpu}
                    alt="cpu"
                />
                <img
                    className={`hidden xl:block w-16 absolute bottom-14 left-1/2 ${style.database}`}
                    src={database}
                    alt="database"
                />
                <img
                    className="w-16 absolute top-14 right-6 lg:right-[10%] xl:right-[17%]"
                    src={laptop}
                    alt="laptop"
                />
            </div>
        </div>
    );
};

export default DefineClub;
