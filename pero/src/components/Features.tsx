'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    // Image Animation
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "+=30%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: process.env.NODE_ENV === "development", // Only show markers in development
      },
    });

    clipAnimation.fromTo(
      imageRef.current,
      {
        scale: 1,
        opacity: 1,
        y: 0,
        x: 0, // Starting position (centered)
        borderRadius: "0%", // No border radius initially
        width: "100%", // Full width initially
        height: "100%", // Full height initially
      },
      {
        scale: 0.6, // Keep scaling the image
        opacity: 1,
        y: "-30%",
        x: "-30%", 
        borderRadius: "5%", // Add a rounded effect
        width: "80%", // Decrease width
        height: "100%", // Increase height
        duration: 2,
        ease: "ease-in",
      }
    );

    // Text Animation
    gsap.fromTo(
      textRefs.current,
      {
        x: 200, // Start off-screen to the right
        y: -50,
        opacity: 0,
      },
      {
        x: -200, 
        y: -150,
  
        opacity: 1,
        duration: 1,
        stagger: 0.2, // Animate each text one after another
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=30%",
          scrub: true,
          markers: process.env.NODE_ENV === "development", // Only show markers in development
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="features"
      className="relative max-h-screen p-10 w-full overflow-hidden bg-black"
    >
      <div
        ref={containerRef}
        className="relative h-screen w-full flex items-center justify-center"
      >
        <img
          ref={imageRef}
          src="feature.png"
          alt="Feature showcase"
          className="w-full h-full object-contain"
        />
        <div
          ref={(el) => (textRefs.current[0] = el!)}
          className="absolute h-40 w-60 right-0 top-[0%] text-white text-xl bg-gray-800 p-4 rounded"
        >
          Text 1
        </div>
        <div
          ref={(el) => (textRefs.current[1] = el!)}
          className="absolute  h-40 w-60 right-0 top-[30%] text-white text-xl bg-gray-800 p-4 rounded"
        >
          Text 2
        </div>
        <div
          ref={(el) => (textRefs.current[2] = el!)}
          className="absolute  h-40 w-60 right-0 top-[60%] text-white text-xl bg-gray-800 p-4 rounded"
        >
          Text 3
        </div>
      </div>
    </section>
  );
};

export default Features;
