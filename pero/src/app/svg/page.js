// import React from 'react'

// const Effect = () => {
//   return (
//       <div className="box b">
//   ⏱️
//     </div>
//   )
// }

// export default Effect

// .box {
//   --border-angle: 0deg;
//   border-radius: 12px;
//   width: 100px;
//   height: 100px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-shadow: 0px 2px 4px hsl(0 0% 0% / 25%);
//   animation: border-angle-rotate 2s infinite linear;
//   border: 0.2rem solid transparent;
//   position: relative;

//   &.b {
//     background: linear-gradient(white, white) padding-box,
//       conic-gradient(
//           from var(--border-angle),
//           var(--bg) 90%,
//         white
//         )
//         border-box;
//   }
// }

// @keyframes border-angle-rotate {
//   from { --border-angle: 0deg; }
//   to { --border-angle: 360deg; }
// }

// /** boilerplate **/
// body {
//   --bg: hsl(150deg 10% 15%);
//   background: var(--bg);
//   font-size: 32px;
//   display: flex;

// }

// @property --border-angle {
//   syntax: "<angle>";
//   initial-value: 0deg;
//   inherits: false;
// }

import React from "react";

const SVg = () => {
  return (
    <div className="">
      <div className="svg-container bg-red-300 scale-y--1">
        <svg
          width="100%"
          height="100%"
          viewBox="50 20 100 150"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M 52 90 a 1 1 0 0 0 71 0 H 206 H 123 A 1 1 0 0 0 52 90"
            stroke="lightgray"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg
          width="100%"
          height="100%"
          viewBox="50 20 100 150"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="gradient-1">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.8" stopColor="white" stopOpacity="1" />
              <stop offset="0.8" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="gradient-mask-1">
              <rect
                className="mask-rect-1"
                x="-100%"
                y="0"
                width="200%"
                height="100%"
                fill="url(#gradient-1)"
              />
            </mask>
          </defs>

          <path
            d="M 52 90 a 1 1 0 0 0 71 0 H 206 H 123 A 1 1 0 0 0 52 90"
            stroke="blue"
            strokeWidth="2"
            fill="none"
            mask="url(#gradient-mask-1)"
          />
        </svg>
        <svg width="100%" height="100%" viewBox="35 20 100 150">
          <path
            d="m 14 90 H 60 C 100 90 75 49 125 49 H 153 M 14 100 H 60 C 111 100 90 80 125 80 H 153 M 14 110 H 60 C 111 111 90 130 125 130 H 153 M 14 120 H 60 C 100 120 75 160 125 160 H 153 M 75 160"
            stroke="lightgray"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg width="100%" height="100%" viewBox="35 20 100 150">
          <defs>
            <linearGradient id="gradient-2">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.2" stopColor="white" stopOpacity="1" />
              <stop offset="0.2" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="gradient-mask-2">
              <rect
                className="mask-rect-2"
                x="-100%"
                y="0"
                width="200%"
                height="150%"
                fill="url(#gradient-2)"
              />
            </mask>
          </defs>

          <path
            d="m 14 90 H 60 C 100 90 75 49 125 49 H 153 M 14 100 H 60 C 111 100 90 80 125 80 H 153 M 14 110 H 60 C 111 111 90 130 125 130 H 153 M 14 120 H 60 C 100 120 75 160 125 160 H 153 M 75 160"
            stroke="blue"
            strokeWidth="2"
            fill="none"
            mask="url(#gradient-mask-2)"
          />
        </svg>
      </div>
    </div>
  );
};

export default SVg;
