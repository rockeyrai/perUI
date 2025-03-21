"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { BentoCard, BentoTilt } from "./Card";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <h1 className="absolute top- left-1/2 transform -translate-x-1/2 text-white text-5xl font-semibold">Pro Rating</h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

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
      {/* <div className="absolute inset-0 z-10 grid "> */}
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/event-5.mp4"
            title={card.title}
            description=" Join us for panel discussions, cosplay contests, and exclusive merchandise stalls, all while enjoying a vibrant atmosphere full of your favorite anime and manga characters!"
            isComingSoon
          />
        </BentoTilt>
      {/* </div> */}
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "/img.png",
    title: "Camel rating",
    id: 3,
  },
  {
    url: "/img.png",
    title: "altman rating",
    id: 4,
  },
  {
    url: "/img.png",
    title: "Petroski rating",
    id: 5,
  },
];
