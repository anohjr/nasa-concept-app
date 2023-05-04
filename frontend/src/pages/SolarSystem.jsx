/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState, useEffect } from "react";
// --> PLANETS CARD IMPORT DEKSTOP
import SunCard from "../components/planets-card/sun-card";
import MercuryCard from "../components/planets-card/mercury-card";
import VenusCard from "../components/planets-card/venus-card";
import EarthCard from "../components/planets-card/earth-card";
import MarsCard from "../components/planets-card/mars-card";
import JupiterCard from "../components/planets-card/jupiter-card";
import SaturnCard from "../components/planets-card/saturn-card";
import UranusCard from "../components/planets-card/uranus-card";
import NeptuneCard from "../components/planets-card/neptune-card";

// --> PLANETS CARD IMPORT SM 
import SunCardSm from "../components/planets-card-sm/sun-card-sm";

function SolarSystem(props) {
  const [path, setPath] = useState(false);
  useEffect(() => {
    window
      .matchMedia("(min-width: 431px)")
      .addEventListener("change", (e) => props.setMatches(e.matches));
  }, []);
  return (
    <div>
      {props.matches && (
        <div id="solar_system_page">
          <div id="header_container" />
          <div
            id="motion-container"
            className={
              props.displayGallery || props.displayImgotd
                ? "display-off"
                : "display-on"
            }
            style={
              props.displayGallery || props.displayImgotd
                ? { transitionDelay: "0ms" }
                : { transitionDelay: "600ms" }
            }
          >
            <div
              id="sun"
              className="planets"
              style={path === "sun-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("sun-on")}
              onMouseLeave={() => setPath(false)}
            />
            <div
              id="motion_mercury"
              className="planets"
              style={path === "mercury-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("mercury-on")}
              onMouseLeave={() => setPath(false)}
            />
            <div
              id="motion_venus"
              className="planets"
              style={path === "venus-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("venus-on")}
              onMouseLeave={() => setPath(false)}
            />
            <div
              id="motion_earth"
              className="planets"
              style={path === "earth-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("earth-on")}
              onMouseLeave={() => setPath(false)}
            />
            <div
              id="motion_mars"
              className="planets"
              style={path === "mars-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("mars-on")}
              onMouseLeave={() => setPath(false)}
            />
            <div
              id="motion_jupiter"
              className="planets"
              style={path === "jupiter-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("jupiter-on")}
              onMouseLeave={() => setPath(false)}
            />
            <svg
              id="motion_saturn"
              className="planets"
              width="50"
              height="31"
              viewBox="0 0 50 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={path === "saturn-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("saturn-on")}
              onMouseLeave={() => setPath(false)}
            >
              <circle
                cx="25.7124"
                cy="15.1183"
                r="15"
                fill="url(#paint0_radial_546_39)"
              />
              <path
                d="M40.7125 14.1183C73.3031 22.6788 -23.4817 21.5374 9.71244 14.1183"
                stroke="url(#paint1_radial_546_39)"
                strokeWidth="4"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_546_39"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(25.7124 15.1183) rotate(90) scale(15)"
                >
                  <stop offset="0.822917" stopColor="#E7BB7A" />
                  <stop offset="1" stopColor="#E7B400" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_546_39"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(25.7125 17.1183) rotate(-90) scale(3 25)"
                >
                  <stop offset="0.755208" stopColor="#FFDEAC" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <div
              id="motion_uranus"
              className="planets"
              style={path === "uranus-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("uranus-on")}
              onMouseLeave={() => setPath(false)}
            />
            <div
              id="motion_neptune"
              className="planets"
              style={path === "neptune-on" ? { transform: "scale(1.3)" } : null}
              onMouseEnter={() => setPath("neptune-on")}
              onMouseLeave={() => setPath(false)}
            />
            <svg
              width="866"
              height="554"
              viewBox="0 0 866 554"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={path === "mercury-on" ? "path_on" : "path_off"}
                d="M504.492 225.845C504.492 228.384 503.31 230.843 501.09 233.124C498.868 235.407 495.629 237.486 491.586 239.242C483.504 242.755 472.303 244.94 459.904 244.94C447.506 244.94 436.305 242.755 428.222 239.242C424.18 237.486 420.94 235.407 418.718 233.124C416.499 230.843 415.317 228.384 415.317 225.845C415.317 223.306 416.499 220.847 418.718 218.567C420.94 216.284 424.18 214.205 428.222 212.448C436.305 208.935 447.506 206.75 459.904 206.75C472.303 206.75 483.504 208.935 491.586 212.448C495.629 214.205 498.868 216.284 501.09 218.567C503.31 220.847 504.492 223.306 504.492 225.845Z"
                stroke="white"
              />
              <path
                className={path === "venus-on" ? "path_on" : "path_off"}
                d="M550.118 227.908C550.118 232.636 547.684 237.193 543.17 241.392C538.654 245.591 532.093 249.396 523.944 252.602C507.649 259.013 485.103 262.989 460.174 262.989C435.246 262.989 412.7 259.013 396.405 252.602C388.255 249.396 381.695 245.591 377.179 241.392C372.665 237.193 370.231 232.636 370.231 227.908C370.231 223.18 372.665 218.624 377.179 214.425C381.695 210.225 388.255 206.42 396.405 203.214C412.7 196.803 435.246 192.827 460.174 192.827C485.103 192.827 507.649 196.803 523.944 203.214C532.093 206.42 538.654 210.225 543.17 214.425C547.684 218.624 550.118 223.18 550.118 227.908Z"
                stroke="white"
                opacity={0.3}
              />
              <path
                className={path === "earth-on" ? "path_on" : "path_off"}
                d="M595.21 230.488C595.21 237.709 591.513 244.64 584.717 250.998C577.921 257.356 568.058 263.106 555.83 267.944C531.376 277.621 497.558 283.617 460.179 283.617C422.8 283.617 388.983 277.621 364.529 267.944C352.3 263.106 342.438 257.356 335.641 250.998C328.845 244.64 325.149 237.709 325.149 230.488C325.149 223.267 328.845 216.336 335.641 209.978C342.438 203.62 352.3 197.87 364.529 193.032C388.983 183.355 422.8 177.359 460.179 177.359C497.558 177.359 531.376 183.355 555.83 193.032C568.058 197.87 577.921 203.62 584.717 209.978C591.513 216.336 595.21 223.267 595.21 230.488Z"
                stroke="white"
                opacity={0.3}
              />
              <path
                className={path === "mars-on" ? "path_on" : "path_off"}
                d="M624.824 235.693C624.824 244.703 620.226 253.339 611.799 261.247C603.372 269.156 591.151 276.301 576.007 282.312C545.723 294.333 503.852 301.78 457.577 301.78C411.301 301.78 369.43 294.333 339.146 282.312C324.002 276.301 311.781 269.156 303.354 261.247C294.927 253.339 290.329 244.703 290.329 235.693C290.329 226.682 294.927 218.047 303.354 210.139C311.781 202.23 324.002 195.085 339.146 189.074C369.43 177.052 411.301 169.606 457.577 169.606C503.852 169.606 545.723 177.052 576.007 189.074C591.151 195.085 603.372 202.23 611.799 210.139C620.226 218.047 624.824 226.682 624.824 235.693Z"
                stroke="white"
                opacity={0.3}
              />
              <path
                className={path === "jupiter-on" ? "path_on" : "path_off"}
                d="M689.49 251.699C689.49 264.058 682.824 275.892 670.639 286.714C658.454 297.536 640.794 307.305 618.929 315.519C575.202 331.945 514.76 342.116 447.973 342.116C381.186 342.116 320.744 331.945 277.017 315.519C255.151 307.305 237.491 297.536 225.307 286.714C213.121 275.892 206.456 264.058 206.456 251.699C206.456 239.34 213.121 227.506 225.307 216.684C237.491 205.862 255.151 196.093 277.017 187.879C320.744 171.453 381.186 161.282 447.973 161.282C514.76 161.282 575.202 171.453 618.929 187.879C640.794 196.093 658.454 205.862 670.639 216.684C682.824 227.506 689.49 239.34 689.49 251.699Z"
                stroke="white"
                opacity={0.3}
              />
              <path
                className={path === "saturn-on" ? "path_on" : "path_off"}
                d="M766.319 262.902C766.319 279.285 757.572 294.951 741.629 309.258C725.686 323.565 702.588 336.472 674.003 347.322C616.836 369.019 537.827 382.45 450.531 382.45C363.236 382.45 284.227 369.019 227.06 347.322C198.475 336.472 175.377 323.565 159.433 309.258C143.49 294.951 134.744 279.285 134.744 262.902C134.744 246.519 143.49 230.853 159.433 216.546C175.377 202.239 198.475 189.332 227.06 178.483C284.227 156.785 363.236 143.354 450.531 143.354C537.827 143.354 616.836 156.785 674.003 178.483C702.588 189.332 725.686 202.239 741.629 216.546C757.572 230.853 766.319 246.519 766.319 262.902Z"
                stroke="white"
                opacity={0.3}
              />
              <path
                className={path === "uranus-on" ? "path_on" : "path_off"}
                d="M825.863 269.625C825.863 289.061 815.636 307.632 797.02 324.581C778.404 341.53 751.438 356.816 718.074 369.664C651.349 395.359 559.136 411.262 457.255 411.262C355.374 411.262 263.16 395.359 196.436 369.664C163.071 356.816 136.106 341.53 117.489 324.581C98.8735 307.632 88.6465 289.061 88.6465 269.625C88.6465 250.189 98.8735 231.617 117.489 214.668C136.106 197.719 163.071 182.433 196.436 169.585C263.16 143.89 355.374 127.987 457.255 127.987C559.136 127.987 651.349 143.89 718.074 169.585C751.438 182.433 778.404 197.719 797.02 214.668C815.636 231.617 825.863 250.189 825.863 269.625Z"
                stroke="white"
                opacity={0.3}
              />
              <path
                className={path === "neptune-on" ? "path_on" : "path_off"}
                d="M48.1648 375.303C41.6334 353.447 46.5772 329.58 61.213 305.101C75.8496 280.621 100.157 255.57 132.26 231.388C196.466 183.027 291.772 138.207 402.961 108.414C514.151 78.6207 620.127 69.5073 701.573 78.8412C742.298 83.5083 776.863 92.7846 802.875 106.373C828.887 119.961 846.304 137.836 852.835 159.692C859.367 181.549 854.423 205.415 839.787 229.895C825.15 254.375 800.843 279.426 768.74 303.607C704.534 351.969 609.228 396.789 498.039 426.582C386.849 456.375 280.873 465.488 199.427 456.154C158.702 451.487 124.137 442.211 98.1247 428.622C72.1133 415.035 54.6961 397.16 48.1648 375.303Z"
                stroke="white"
                opacity={0.3}
              />
            </svg>
          </div>
          <ul
            id="planets-list"
            className={
              props.displayGallery || props.displayImgotd
                ? "display-off"
                : "display-on"
            }
            style={
              props.displayGallery || props.displayImgotd
                ? { transitionDelay: "0ms" }
                : { transitionDelay: "600ms" }
            }
          >
            <li
              className={path === "sun-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("sun-on")}
              onMouseLeave={() => setPath(false)}
            >
              Sun
            </li>
            <li
              className={path === "mercury-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("mercury-on")}
              onMouseLeave={() => setPath(false)}
            >
              Mercury
            </li>
            <li
              className={path === "venus-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("venus-on")}
              onMouseLeave={() => setPath(false)}
            >
              Venus
            </li>
            <li
              className={path === "earth-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("earth-on")}
              onMouseLeave={() => setPath(false)}
            >
              Earth
            </li>
            <li
              className={path === "mars-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("mars-on")}
              onMouseLeave={() => setPath(false)}
            >
              Mars
            </li>
            <li
              className={path === "jupiter-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("jupiter-on")}
              onMouseLeave={() => setPath(false)}
            >
              Jupiter
            </li>
            <li
              className={path === "saturn-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("saturn-on")}
              onMouseLeave={() => setPath(false)}
            >
              Saturn
            </li>
            <li
              className={path === "uranus-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("uranus-on")}
              onMouseLeave={() => setPath(false)}
            >
              Uranus
            </li>
            <li
              className={path === "neptune-on" ? "planet-on" : "planet-off"}
              onMouseEnter={() => setPath("neptune-on")}
              onMouseLeave={() => setPath(false)}
            >
              Neptune
            </li>
          </ul>
          <SunCard selectedPlanet={path} />
          <MercuryCard selectedPlanet={path} />
          <VenusCard selectedPlanet={path} />
          <EarthCard selectedPlanet={path} />
          <MarsCard selectedPlanet={path} />
          <JupiterCard selectedPlanet={path} />
          <SaturnCard selectedPlanet={path} />
          <UranusCard selectedPlanet={path} />
          <NeptuneCard selectedPlanet={path} />
        </div>
      )}
      {!props.matches && (
        <div id="solar_system_page">
          <h1 id="solar_system_title">Solar System</h1>
          <div id="solar-sm-container">
            <div id="sun" className="planets" />
            <div id="motion_mercury" className="planets" />
            <div id="motion_venus" className="planets" />
            <div id="motion_earth" className="planets" />
            <div id="motion_mars" className="planets" />
            <div id="motion_jupiter" className="planets" />
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="motion_saturn"
              className="planets"
            >
              <circle
                cx="8.1645"
                cy="4.01687"
                r="4.0135"
                fill="url(#paint0_radial_132_15)"
              />
              <path
                d="M12.178 3.74931C20.8982 6.03981 -4.99821 5.73443 3.88343 3.74931"
                stroke="url(#paint1_radial_132_15)"
                strokeWidth="4"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_132_15"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.1645 4.01687) rotate(90) scale(4.0135)"
                >
                  <stop offset="0.822917" stopColor="#E7BB7A" />
                  <stop offset="1" stopColor="#E7B400" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_132_15"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.1645 4.55201) rotate(-90) scale(0.8027 6.68916)"
                >
                  <stop offset="0.755208" stopColor="#FFDEAC" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>

            <div id="motion_uranus" className="planets" />
            <div id="motion_neptune" className="planets" />
            <svg
              width="356"
              height="211"
              viewBox="0 0 356 211"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M198.652 89.0705C198.652 89.9709 198.234 90.8689 197.396 91.73C196.556 92.5933 195.316 93.3937 193.744 94.0766C190.603 95.4419 186.228 96.2987 181.369 96.2987C176.511 96.2987 172.136 95.4419 168.995 94.0766C167.423 93.3937 166.183 92.5933 165.343 91.73C164.505 90.8689 164.087 89.9709 164.087 89.0705C164.087 88.1701 164.505 87.272 165.343 86.411C166.183 85.5477 167.423 84.7473 168.995 84.0644C172.136 82.6991 176.511 81.8423 181.369 81.8423C186.228 81.8423 190.603 82.6991 193.744 84.0644C195.316 84.7473 196.556 85.5477 197.396 86.411C198.234 87.272 198.652 88.1701 198.652 89.0705Z"
                stroke="white"
                className="path-sm-off"
              />
              <path
                d="M216.646 89.8841C216.646 91.6366 215.746 93.3591 214.003 94.9802C212.259 96.6018 209.709 98.0853 206.516 99.3415C200.132 101.853 191.28 103.417 181.476 103.417C171.672 103.417 162.82 101.853 156.436 99.3415C153.243 98.0853 150.693 96.6018 148.949 94.9802C147.207 93.3591 146.306 91.6366 146.306 89.8841C146.306 88.1315 147.207 86.409 148.949 84.7879C150.693 83.1663 153.243 81.6828 156.436 80.4266C162.82 77.9154 171.672 76.3512 181.476 76.3512C191.28 76.3512 200.132 77.9154 206.516 80.4266C209.709 81.6828 212.259 83.1663 214.003 84.7879C215.746 86.409 216.646 88.1315 216.646 89.8841Z"
                stroke="white"
                className="path-sm-off"
              />
              <path
                d="M234.431 90.9017C234.431 93.6382 233.031 96.2972 230.388 98.7695C227.745 101.243 223.893 103.493 219.091 105.393C209.49 109.192 196.192 111.553 181.478 111.553C166.764 111.553 153.466 109.192 143.865 105.393C139.063 103.493 135.211 101.243 132.568 98.7695C129.925 96.2972 128.525 93.6382 128.525 90.9017C128.525 88.1652 129.925 85.5062 132.568 83.0339C135.211 80.5609 139.063 78.3107 143.865 76.4106C153.466 72.6115 166.764 70.2507 181.478 70.2507C196.192 70.2507 209.49 72.6115 219.091 76.4106C223.893 78.3107 227.745 80.5609 230.388 83.0339C233.031 85.5062 234.431 88.1652 234.431 90.9017Z"
                stroke="white"
                className="path-sm-off"
              />
              <path
                d="M246.11 92.9544C246.11 96.3971 244.355 99.7285 241.069 102.812C237.783 105.896 233 108.697 227.048 111.059C215.148 115.783 198.674 118.716 180.452 118.716C162.229 118.716 145.755 115.783 133.855 111.059C127.903 108.697 123.12 105.896 119.834 102.812C116.548 99.7285 114.793 96.3971 114.793 92.9544C114.793 89.5117 116.548 86.1803 119.834 83.0968C123.12 80.0125 127.903 77.2119 133.855 74.8494C145.755 70.1256 162.229 67.1929 180.452 67.1929C198.674 67.1929 215.148 70.1256 227.048 74.8494C233 77.2119 237.783 80.0125 241.069 83.0968C244.355 86.1803 246.11 89.5117 246.11 92.9544Z"
                stroke="white"
                className="path-sm-off"
              />
              <path
                d="M271.629 99.2691C271.629 104.026 269.065 108.617 264.296 112.852C259.528 117.087 252.6 120.924 243.997 124.156C226.793 130.619 202.992 134.626 176.679 134.626C150.365 134.626 126.564 130.619 109.361 124.156C100.757 120.924 93.829 117.087 89.061 112.852C84.2924 108.617 81.728 104.026 81.728 99.2691C81.728 94.5122 84.2924 89.9209 89.061 85.6857C93.829 81.4509 100.757 77.6144 109.361 74.3823C126.564 67.9195 150.365 63.912 176.679 63.912C202.992 63.912 226.793 67.9195 243.997 74.3823C252.6 77.6144 259.528 81.4509 264.296 85.6857C269.065 89.9209 271.629 94.5122 271.629 99.2691Z"
                stroke="white"
                className="path-sm-off"
              />
              <path
                d="M301.93 103.687C301.93 110.033 298.544 116.136 292.293 121.745C286.043 127.354 276.97 132.428 265.716 136.699C243.212 145.241 212.09 150.534 177.688 150.534C143.286 150.534 112.163 145.241 89.6589 136.699C78.4051 132.428 69.3324 127.354 63.0821 121.745C56.8315 116.136 53.4453 110.033 53.4453 103.687C53.4453 97.3422 56.8315 91.2392 63.0821 85.6301C69.3324 80.0213 78.4051 74.9472 89.6589 70.6758C112.163 62.1343 143.286 56.8409 177.688 56.8409C212.09 56.8409 243.212 62.1343 265.716 70.6758C276.97 74.9472 286.043 80.0213 292.293 85.6301C298.544 91.2392 301.93 97.3422 301.93 103.687Z"
                stroke="white"
                className="path-sm-off"
              />
              <path
                d="M325.414 106.339C325.414 113.89 321.442 121.139 314.138 127.789C306.833 134.44 296.235 140.452 283.097 145.511C256.823 155.629 220.493 161.897 180.339 161.897C140.185 161.897 103.855 155.629 77.582 145.511C64.4437 140.452 53.8458 134.44 46.5411 127.789C39.2365 121.139 35.2645 113.89 35.2645 106.339C35.2645 98.7878 39.2365 91.5384 46.5411 84.8881C53.8458 78.2376 64.4437 72.2255 77.582 67.1662C103.855 57.0488 140.185 50.7805 180.339 50.7805C220.493 50.7805 256.823 57.0488 283.097 67.1662C296.235 72.2255 306.833 78.2376 314.138 84.8881C321.442 91.5384 325.414 98.7878 325.414 106.339Z"
                stroke="white"
                className="path-sm-off"
              />
              <path
                d="M19.2885 147.94C16.7441 139.425 18.6599 130.098 24.406 120.488C30.1528 110.876 39.7083 101.022 52.352 91.4989C77.6369 72.4536 115.188 54.791 159.013 43.0481C202.838 31.3052 244.595 27.7173 276.67 31.3931C292.708 33.2312 306.3 36.8826 316.513 42.2179C326.725 47.5525 333.518 54.5459 336.062 63.0604C338.606 71.5748 336.691 80.9017 330.945 90.5123C325.198 100.124 315.642 109.978 302.999 119.501C277.714 138.546 240.163 156.209 196.338 167.952C152.513 179.695 110.756 183.283 78.6811 179.607C62.6422 177.769 49.0511 174.117 38.8377 168.782C28.6256 163.448 21.8328 156.454 19.2885 147.94Z"
                stroke="white"
                className="path-sm-off"
              />
            </svg>
          </div>
          <SunCardSm />
          
        </div>
      )}
    </div>
  );
}

export default SolarSystem;
