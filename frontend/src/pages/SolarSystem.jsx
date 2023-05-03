/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { useState } from "react";
// --> PLANETS CARD IMPORT
import SunCard from "../components/planets-card/sun-card";
import MercuryCard from "../components/planets-card/mercury-card";
import VenusCard from "../components/planets-card/venus-card";
import EarthCard from "../components/planets-card/earth-card";
import MarsCard from "../components/planets-card/mars-card";
import JupiterCard from "../components/planets-card/jupiter-card";
import SaturnCard from "../components/planets-card/saturn-card";
import UranusCard from "../components/planets-card/uranus-card";
import NeptuneCard from "../components/planets-card/neptune-card";

function SolarSystem(props) {
  const [path, setPath] = useState(false);
  console.log(path);
  return (
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
          <defs>
            <radialGradient
              id="paint0_radial_546_27"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(422.604 242.764) rotate(90) scale(30.5903)"
            >
              <stop offset="0.567708" stopColor="#FFF4B9" />
              <stop offset="1" stopColor="#FF9900" stopOpacity="0" />
            </radialGradient>
          </defs>
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
      <MercuryCard selectedPlanet={path}/>
      <VenusCard selectedPlanet={path} />
      <EarthCard selectedPlanet={path} />
      <MarsCard selectedPlanet={path} />
      <JupiterCard selectedPlanet={path} />
      <SaturnCard selectedPlanet={path} />
      <UranusCard selectedPlanet={path} />
      <NeptuneCard selectedPlanet={path} />
    </div>
  );
}

export default SolarSystem;
