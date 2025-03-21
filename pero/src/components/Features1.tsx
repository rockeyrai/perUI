"use Client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const min1 = useRef<HTMLImageElement>(null);
  const min2 = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !min1.current || !min2.current) return;

    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "15% center",
        end: "30% center",
        scrub: true,
        markers: process.env.NODE_ENV === "development",
      },
    });
    const clipAnimation1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "40% center",
        end: "53% center",
        scrub: true,
        markers: process.env.NODE_ENV === "development",
      },
    });

    clipAnimation1.fromTo(
      min1.current,
      {
        scale: 0,
        opacity: 0,
        y: 500,
        x: 100,
      },
      {
        scale: 4,
        opacity: 1,
        duration: 3,
        ease: "ease-in",
      }
    );

    clipAnimation.fromTo(
      min2.current,
      {
        scale: 0,
        opacity: 0,
        y: -500,
        x: -150,
      },
      {
        scale: 4,
        opacity: 1,    
        duration: 2,
        ease: "ease-in",
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="p-10 bg-black">
      <div className="border-2 border-gray-600  p-2 rounded-3xl">
        <div
          ref={containerRef}
          className="relative w-full h-[130vh] rounded-2xl"
        >
          {/* Feature Image */}
          <img
            src="feature.png"
            alt="Feature showcase"
            className="w-full h-full rounded-2xl object-cover"
          />
          {/* Overlay Images */}
          <img
            ref={min1}
            src="min1.png"
            alt="Overlay 1"
            className="absolute top-10 left-10 w-20 h-20 object-contain"
          />
          <img
            ref={min2}
            src="min2.png"
            alt="Overlay 2"
            className="absolute bottom-10 right-10 w-20 h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Features1;
