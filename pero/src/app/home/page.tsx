"use client";
import Features1 from "@/components/Features1";
import HorizontalScrollCarousel from "@/components/horizonal";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import React from "react";
import Prorating from "@/components/Prorating";

const page = () => {
  return (
    <div>
      <div className="relative w-[100%] max-w-screen overflow-x-hidden-hidden h-screen bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover contrast-150 sepia-0 grayscale-0 blur-[1px] brightness-75"
          src="/hero.mp4"
          autoPlay
          loop
          muted
        />
        <label className="switch">
          <span className="sun">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g fill="#ffd43b">
                <circle r="5" cy="12" cx="12"></circle>
                <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
              </g>
            </svg>
          </span>
          <span className="moon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
          </span>
          <input type="checkbox" className="input"/>
          <span className="slider"></span>
        </label>
        <div className="relative z-10 flex justify-between items-center px-10 py-5">
          <div className="flex items-center text-white gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 bg-white rounded-2xl"
            />
            <p className="text-lg font-semibold">Portfolio Nepal</p>
          </div>
          <button className="px-4 py-2 bg-white text-black font-bold rounded-2xl hover:bg-gray-200">
            Sign In
          </button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="w-2/3">
            <h1 className="text-7xl font-bold mb-4">
              Rapid Data Analysis at Your Fingertips
            </h1>
            <p className="text-lg px-40">
              Your go-to AI tool for instant access to company information.
              Gather and analyze data for insightful decision-making in seconds.
            </p>
            <div className="flex justify-center gap-2 items-center py-2">
              <button className="px-4 py-2 bg-white text-black font-bold rounded-xl hover:bg-gray-200">
                Demo
              </button>
              <button className="px-4 py-2 bg-white text-black font-bold rounded-xl hover:bg-gray-200">
                View Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2  w-auto  flex gap-2 p-2 rounded-2xl bg-[#3f3e3f] z-20">
        <div className="flex text-xs text-gray-100 justify-center items-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <div className="flex text-xs text-gray-100 items-center justify-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
          Project
        </div>
        <div className="flex text-xs text-gray-100 items-center justify-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
          Pricing
        </div>
        <div className="flex text-xs text-gray-100 items-center justify-center border border-[#464747] hover:border-[#b5ad72] rounded-2xl px-2">
          Contact
        </div>
      </div>
      {/* <ImageSlider /> */}
      <Features1 />
      <div className="h-screen w-[100%] px-0 flex justify-center items-center bg-black">
        <img
          className="max-h-full w-1/2 object-contain mx-auto"
          src="/feature3.png"
        />
        <p className="text-center text-2xl text-white">
          Automatic portfolio sync with mero share “No need to manually input
          data. No need to manually download and upload portfolio data HASTLE
          FREE SYNC.”
        </p>
      </div>
      <div className="h-screen w-full bg-black">
        <img className="h-full w-full object-contain" src="/feature2.png" />
      </div>
      {/* <HorizontalScrollCarousel /> */}
      {/* <Prorating /> */}
      <Footer />
    </div>
  );
};

export default page;
