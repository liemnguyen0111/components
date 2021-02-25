import React, { useEffect, useRef } from "react";

const Logo = ({ classes, onClick, svg }) => {
  const logo = useRef(null);

  const onSVGClick = () => {
    logo.current.classList.remove("SVGplay");
    setTimeout(() => {
      logo.current.classList.add("SVGplay");
    }, 0.00001);
  };

  return (
    <div className={classes}>
      {/* <svg
        className={`logo SVGplay`}
        ref={logo}
        // id="logo"
        // data-name="home"
        width="52"
        height="58"
        viewBox="0 0 52 58"
        fill="none"
        onClick={(e) => (onSVGClick())}
      >
        <g filter="url(#filter0_d)">
          <path
            d="M6 51.5H20.5C21.0523 51.5 21.5 51.0523 21.5 50.5V12.5C21.5 11.9477 21.0523 11.5 20.5 11.5H7.5C6.94772 11.5 6.5 11.0523 6.5 10.5V7.5C6.5 6.94772 6.94772 6.5 7.5 6.5H24.5H42C42.5523 6.5 43 6.94772 43 7.5V31.5366C43 32.6281 41.5007 32.9302 41.078 31.9239L32.7574 12.1128C32.6014 11.7415 32.238 11.5 31.8354 11.5H31H29.5H27.5C26.9477 11.5 26.5 11.9477 26.5 12.5V50.5C26.5 51.0523 26.9477 51.5 27.5 51.5H28.5C29.0523 51.5 29.5 51.0523 29.5 50.5V15.0963C29.5 14.767 29.767 14.5 30.0963 14.5V14.5C30.3401 14.5 30.5594 14.6484 30.6499 14.8748L40.2486 38.8714C40.4004 39.251 40.7681 39.5 41.177 39.5H45C45.5523 39.5 46 39.0523 46 38.5V31V22.5V14V6"
            stroke="#0596FF"
            stroke-width="2"
          />
        </g>
        <g filter="url(#filter1_d)">
          <path
            d="M37.477 11.5H39C39.5523 11.5 40 11.9477 40 12.5V16.3074C40 17.4085 38.4804 17.7011 38.0715 16.6788L36.5486 12.8714C36.2858 12.2145 36.7696 11.5 37.477 11.5Z"
            stroke="white"
            stroke-width="2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.5"
            y="0.5"
            width="51.5"
            height="57"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="2.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0196078 0 0 0 0 0.588235 0 0 0 0 1 0 0 0 0.8 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="25.4746"
            y="0.5"
            width="25.5249"
            height="27.8098"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg> */}
    </div>
  );
};

export default Logo;
