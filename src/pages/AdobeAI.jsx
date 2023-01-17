import React, { useState } from "react";
import TextBubble from "../Components/TextBubble";
import { useContext } from "react";
import { ThemeContext } from "../context/theme";
import "./AdobeAi.scss";
import { AnimatePresence, motion } from "framer-motion";
const AdobeAl = () => {
  const { lang } = useContext(ThemeContext);
  const description = lang.adobeAi;

  const [anime, setAnime] = useState(false);

  const variants = {
    visiable: anime ? {   pathLength: 1,
      pathOffset: 0 } : { pathLength: 1,
        pathOffset: 1},
    hidden: anime ? { pathLength: 0 } : { pathLength: 1 },
  };

  return (
    <>
      <TextBubble description={description} />
      <div
        onClick={() => setAnime(!anime)}
        className={anime ? "play active" : "play"}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 130 124"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate="visiable"
            initial={{ pathLength: 0, pathOffset: 0 }}
            variants={variants}
            transition={anime ? { duration: 0.4, delay: 0.3 } : { duration: .4, delay: 0}}
            d="M15.25 36.66L28.68 42.43L19.24 51.09L8.23999 61.42L5.36 46.08L2.48999 30.74L15.24 36.66C24.24 15.66 44.18 1.1 67.29 1.51C98.14 2.04 122.49 28.51 122.49 61.51C122.49 94.65 97.36 121.51 66.36 121.51"
            stroke="black"
            strokeWidth="13"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="30"
          height="30"
          viewBox="0 0 54 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate="hidden"
            variants={variants}
            transition={anime ? { duration: 0.4, delay: 0 } : { duration: .4, delay: .3}}
            d="M47.71 21.58C48.8409 22.1019 49.7986 22.9368 50.4699 23.9859C51.1412 25.035 51.498 26.2545 51.498 27.5C51.498 28.7455 51.1412 29.965 50.4699 31.0141C49.7986 32.0632 48.8409 32.8981 47.71 33.42L30.28 42.49L12.86 51.57C7.80999 54.2 1.49999 50.92 1.49999 45.66V9.34C1.49999 4.08 7.80999 0.790003 12.86 3.42L30.28 12.5L47.71 21.58Z"
            stroke="black"
            strokeWidth="6.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
<AnimatePresence initial={false}>

      <svg
        width="300"
        className="Kangaroo"
        height="300"
        viewBox="0 0 1040 691"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <motion.path
          transition={{ duration: 1, delay: .5 }}
          animate="visiable"
          initial={{ pathLength: 0, pathOffset: 0 }}
          variants={variants}
          id="Vector"
          d="M775.43 248.43C729.14 238.08 685.73 222.73 642 204.53C623.76 196.95 605.643 189.047 587.65 180.82C580.88 177.73 572.42 175.16 566.27 170.87C434.7 78.87 324.27 114.96 324.27 114.96C288.13 136.78 186.27 145.69 186.27 145.69C172.97 146.3 160.78 141.69 153.16 130.44C148.43 123.44 145.69 115.36 142.75 107.44C140.69 101.887 138.52 96.38 136.24 90.92C134.24 86.16 131.7 81.86 129.98 77.04C126.36 66.89 122.27 56.72 115.75 48.04C115.49 47.69 115.23 47.35 114.96 47.04C110.61 41.5 105.32 36.78 100.06 32.09C88.59 20.64 75.56 9.95 60.75 3.23C59.53 2.68 58.09 2.17001 56.89 2.77001C56.4118 3.07272 56.0102 3.48221 55.717 3.96632C55.4238 4.45042 55.2468 4.99595 55.2 5.56C54.72 8.36 55.71 11.2 56.82 13.81C59.698 20.281 63.1133 26.4995 67.03 32.4C69.1118 35.6676 71.0146 39.046 72.73 42.52L75.99 49.07C76.6762 50.4468 76.8517 52.0224 76.4855 53.5166C76.1193 55.0107 75.2351 56.3265 73.99 57.23C62.99 65.23 15.3 100.36 6.32001 116.63C-9.55999 145.95 28.25 139.45 44.84 135.95C58.1964 133.124 71.8774 132.145 85.5 133.04C89.26 133.29 93.5 134.04 95.5 137.23C96.2267 138.646 96.6941 140.18 96.88 141.76C99.96 158.44 107.36 174 114.44 189.27C120.27 201.8 126.14 213.58 137.33 221.6C137.33 221.6 188.86 258.49 205.39 257.22C205.39 257.22 208.81 259.92 215.8 270.48C224.46 283.55 238.61 308.67 258.58 355.63C259.451 357.685 261.01 359.373 262.99 360.404C264.97 361.435 267.247 361.745 269.43 361.28C280.24 358.97 299.94 353.9 313.54 345.55C322.15 340.29 328.3 333.7 328.22 325.68C328.22 325.68 315.7 312.68 278.63 337.94C278.63 337.94 271.47 345.35 262.01 323.11C262.01 323.11 250.84 295.49 244.88 272.76C244.76 272.31 244.51 270.98 244.19 269.11C254.06 272.11 308.19 281.65 347.74 272.76C347.6 273.65 347.48 274.53 347.35 275.41C347.28 275.92 347.2 276.41 347.14 276.96C337.58 350.62 369.05 428.28 369.05 428.28C376.67 477.03 360.93 562.84 360.93 562.84C369.56 577.07 266.93 636.98 266.93 636.98C212.16 656.77 227.35 681.14 227.35 681.14C219.18 698.85 279.82 679.14 292.79 674.74C294.36 674.213 295.694 673.151 296.56 671.74C311.73 646.74 294.72 653.94 366.71 612.45C440.71 569.79 415.64 545.96 415.64 545.96C384.35 352.73 460.85 335.16 460.85 335.16C553.69 307.56 567.49 253.61 567.49 253.61C595.09 243.61 665.35 272.43 665.35 272.43C1025.44 357.75 1036.68 200.87 1036.68 200.87C966.15 272.95 866.72 268.83 775.43 248.43Z"
          stroke="black"
          strokeWidth="10"
        />
      </svg>

          </AnimatePresence>
      <AnimatePresence initial={false}>
        <svg
          className="rubiks"
          width="300"
          height="300"
          viewBox="0 0 261 297"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 3">
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector"
              d="M34.36 185.3L8.09001 166.34L4.57001 119.28L30.47 137.16L39.33 152.57L40.55 182.19L34.36 185.3Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_2"
              d="M89.84 225.3L82.03 210.85L81.37 180.21L87.42 176.48L121.57 200.08L122.03 248.58L89.84 225.3Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_3"
              d="M73.37 213.44L50.39 196.86L42.66 182.55L41.42 152.77L46.96 148.55L70.71 164.94L79.23 179.89L79.89 210.38L73.37 213.44Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_4"
              d="M121.06 147.02L121.54 197.49L88.18 174.46L80.94 162.47L80.02 119.39L121.06 147.02Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_5"
              d="M77.9 117.97L78.85 161.9L71.74 163.12L47.73 146.55L40.61 133.27L38.89 91.71L77.9 117.97Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_6"
              d="M36.75 90.26L38.51 132.84L31.41 135.28L4.37001 116.61L0.570007 65.91L36.75 90.26Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_7"
              d="M43.47 202.25L49.52 198.8L72.44 215.34L80.33 230.66L81 261.86L44.72 232.54L43.47 202.25Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_8"
              d="M82.42 230.97L88.72 227.08L122.05 251.13L122.47 295.37L83.12 263.57L82.42 230.97Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 1 }}
              variants={variants}
              id="Vector_9"
              d="M8.28999 169.06L33.46 187.22L41.37 201.94L42.56 230.79L11 205.29L8.28999 169.06Z"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <g id="Group 1">
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_10"
              d="M93.77 20.78L121.48 36.83V45.25L93.87 59.63L77.04 58.15L50.25 41.34L93.77 20.78Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_11"
              d="M214.53 43.52L182.33 60.86L165.74 60.04L141.3 45.89L141.14 37.36L173.28 20.63L214.53 43.52Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_12"
              d="M95.11 61.34L122.76 46.94L139.97 47.53L164.37 61.65L164 70.73L136.78 85.39L118.87 84.41L94.81 69.31L95.11 61.34Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_13"
              d="M117.76 98L135.41 97.25L169.16 118.44V119.13L121.87 145.68L80.69 117.96L117.76 98Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_14"
              d="M171.25 117.96V117.86C171.253 117.683 171.21 117.508 171.124 117.354C171.038 117.199 170.912 117.07 170.76 116.98L136.84 95.67L137.98 87.08L165.31 72.36L181.74 71.68L217.13 92.17L171.25 117.96Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_15"
              d="M76.29 71.14L93.45 70.92L117.45 85.98L116.49 96.32L78.74 116.65L39.55 90.27L76.29 71.14Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_16"
              d="M219.24 91.02L183.08 70.08L183.57 62.55L216.7 44.72L259.46 68.44L219.24 91.02Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_17"
              d="M136.85 0.559998L171.09 19.56L139.85 35.83L122.82 35.33L96.06 19.84L136.85 0.559998Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0.5 }}
              variants={variants}
              id="Vector_18"
              d="M48.01 42.39L75.62 59.72L75.02 69.44L37.59 88.94L1.25 64.48L48.01 42.39Z"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <g id="Group 2">
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_19"
              d="M257.18 170.08L223.6 189.99L218.39 185.08L218.9 155.51H218.91L226.43 141.8L258.6 123.66L257.18 170.08Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_20"
              d="M209.69 198.25L182.55 214.35L176.61 217.87L171.25 214.39V213.33V183.01L177.32 169.5L211.46 150.24L216.82 155.34L216.3 185.24L209.69 198.25Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_21"
              d="M163.36 225.73L161.83 226.64L123.6 249.32L123.13 200.06L163.6 177.23L169.16 183.11V213.33V214.7L163.36 225.73Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_22"
              d="M169.16 163.66L163.02 175.17L123.1 197.68L122.62 147.06L169.16 120.92V163.66Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_23"
              d="M217.16 136.01L210.71 148.27L176.81 167.39L171.25 163.38V119.75L217.9 93.56L217.16 136.01Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_24"
              d="M123.62 251.69L123.81 251.62L162.9 228.43L164.03 227.76L169.17 232.27V266.72L124.04 295.6L123.62 251.69Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_25"
              d="M171.25 232.04L177.38 219.84L183.61 216.14L210.34 200.28L215.95 205.49L215.4 237.13L171.25 265.39V232.04Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_26"
              d="M258.67 121.22L225.74 139.8L219.26 135.02L220.01 92.38L260.24 69.79L258.67 121.22Z"
              stroke="black"
              strokeWidth="3"
            />
            <motion.path
              animate="visiable"
              transition={{ duration: 0.4, delay: 0 }}
              variants={variants}
              id="Vector_27"
              d="M217.5 235.78L218.04 205.19L224.27 192.02L257.1 172.54L255.93 211.19L217.5 235.78Z"
              stroke="black"
              strokeWidth="3"
            />
          </g>
          <defs>
            <rect width="260.77" height="296.51" fill="white" />
          </defs>
        </svg>
      </AnimatePresence>
    </>
  );
};

export default AdobeAl;