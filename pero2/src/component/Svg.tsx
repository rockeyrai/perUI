import React from "react";

const SVg = () => {
  const svgContainerStyle = {
    position: "relative",
    width: "50vw",
    height: "50vh",
  };

  const svgStyle1 = {
    position: "absolute",
    top: "50px",
    left: "50px",
    width: "150px",
    height: "150px",
  };

  const svgStyle2 = {
    position: "absolute",
    top: "5px",
    left: "300px",
    width: "200px",
    height: "200px",
  };

  const maskAnimation1 = {
    animation: "slideMask1 2s ease infinite",
  };

  const maskAnimation2 = {
    animation: "slideMask2 2s ease infinite",
    animationDelay: "2s",
  };

  return (
    <div className="bg-black w-[600px]">
      <div style={svgContainerStyle}>
        <svg
          width="100%"
          height="100%"
          viewBox="50 20 100 150"
          preserveAspectRatio="xMidYMid meet"
          style={svgStyle1}
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
          style={svgStyle1}
        >
          <defs>
            <linearGradient id="gradient-1">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.8" stopColor="white" stopOpacity="1" />
              <stop offset="0.8" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="gradient-mask-1">
              <rect
                x="-100%"
                y="0"
                width="200%"
                height="100%"
                fill="url(#gradient-1)"
                style={maskAnimation1}
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
        <svg
          width="100%"
          height="100%"
          viewBox="35 20 100 150"
          style={svgStyle2}
        >
          <path
            d="m 14 90 H 60 C 100 90 75 49 125 49 H 153 M 14 100 H 60 C 111 100 90 80 125 80 H 153 M 14 110 H 60 C 111 111 90 130 125 130 H 153 M 14 120 H 60 C 100 120 75 160 125 160 H 153 M 75 160"
            stroke="lightgray"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg
          width="100%"
          height="100%"
          viewBox="35 20 100 150"
          style={svgStyle2}
        >
          <defs>
            <linearGradient id="gradient-2">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.2" stopColor="white" stopOpacity="1" />
              <stop offset="0.2" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="gradient-mask-2">
              <rect
                x="-100%"
                y="0"
                width="200%"
                height="150%"
                fill="url(#gradient-2)"
                style={maskAnimation2}
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
        <img className="absolute h-15 w-15 top-23 left-20 rounded-full" src="/mero.png" />
        <img className="absolute h-15 w-15 top-23 left-60 rounded-full" src="/sync.jpg" />
      </div>
      <style>
        {`
          @keyframes slideMask1 {
            from {
              x: -100%;
            }
            to {
              x: 180%;
            }
          }

          @keyframes slideMask2 {
            from {
              x: -100%;
            }
            to {
              x: 180%;
            }
          }
        `}
      </style>

    </div>
  );
};

export default SVg;
