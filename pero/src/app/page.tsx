"use client";
import Features from "@/components/Features";
import Example from "@/components/horizonal";
import HorizontalScrollCarousel from "@/components/horizonal";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import { motion, useTransform, useScroll } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const App = () => {
  useEffect(() => {
    gsap.set("#ball", { xPercent: -50, yPercent: -50 });

    let targets = gsap.utils.toArray("#ball");

    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.35,
        x: e.pageX,
        y: e.pageY - window.scrollY, // Subtract scroll position
        ease: "none",
        overwrite: "auto",
        stagger: 0.035,
      });
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  useEffect(() => {
    const cursorFollower = document.querySelector(".cursorFollower");
    const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

    let mouseX = 0,
      mouseY = 0; // Starting position for the mouse
    let xp = 0,
      yp = 0; // Initial position for the cursorFollower
    let xpDot = 0,
      ypDot = 0; // Initial position for the cursorFollowerDot

    // Update mouse position on mousemove
    document.addEventListener("mousemove", (e) => {
      mouseX = e.pageX;
      mouseY = e.pageY - window.scrollY; // Adjust for scroll position
    });

    // GSAP animation for cursorFollower
    gsap.to(
      {},
      {
        duration: 0.00002,
        repeat: -1,
        onRepeat: () => {
          xp += (mouseX - xp) / 10;
          yp += (mouseY - yp) / 10;
          gsap.to(cursorFollower, { x: xp, y: yp, duration: 0.02 });
        },
      }
    );

    // GSAP animation for cursorFollowerDot
    gsap.to(
      {},
      {
        duration: 0.00001,
        repeat: -1,
        onRepeat: () => {
          xpDot += (mouseX - xpDot) / 15;
          ypDot += (mouseY - ypDot) / 15;
          gsap.to(cursorFollowerDot, { x: xpDot, y: ypDot, duration: 0.02 });
        },
      }
    );

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  const Card = ({ card }) => {
    return (
      <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        ></div>
        <div className="absolute inset-0 z-10 grid place-content-center">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {card.title}
          </p>
        </div>
      </div>
    );
  };

  const cards = [
    {
      url: "/img.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/img.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/img.jpg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/img.jpg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/img.jpg",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/img..jpg",
      title: "Title 6",
      id: 6,
    },
    {
      url: "/img.jpg",
      title: "Title 7",
      id: 7,
    },
  ];
  return (
    <div className="w-[100%] overflow-hidden">
      <span id="cursorFollower" className="cursorFollower"></span>
      <span id="cursorFollowerDot" className="cursorFollowerDot"></span>

      <div className="relative w-[100%] max-w-screen overflow-x-hidden-hidden h-screen bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover contrast-150 sepia-0 grayscale-0 blur-[1px] brightness-75"
          src="/hero.mp4"
          autoPlay
          loop
          muted
        />

        {/* Navbar */}
        <div className="relative z-10 flex justify-between items-center px-10 py-5">
          <div className="flex items-center text-white space-x-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 bg-white rounded-2xl"
            />
            <span className="text-lg font-semibold">Salar Lagani</span>
          </div>
          <button className="px-4 py-2 bg-white text-black font-bold rounded-2xl hover:bg-gray-200">
            Sign In
          </button>
        </div>

        {/* Hero Section */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="w-2/3">
            <h1 className="text-7xl font-bold mb-4">
              Rapid Data Analysis at Your Fingertips
            </h1>
            <p className="text-lg px-40">
              Your go-to AI tool for instant access to company information.
              Gather and analyze data for insightful decision-making in seconds.
            </p>
          </div>
        </div>
        <Navbar />
        {/* Image Slider */}
        <div className="absolute bottom-3 w-full z-10">
          <ImageSlider />
        </div>
      </div>

      <Features />

      <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>

      <div className="h-screen w-screen overflow-hidden bg-red-400">
        <img src="footer.png" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default App;
