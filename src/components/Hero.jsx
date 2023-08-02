import styles from "../style";
import { discount, robot, shield } from "../assets";
import GetStarted from "./GetStarted";
// issue of using small letter discount
// is still a mystery for myself

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      {/* Left */}
      <div
        className="flex-col sm:px-16 px-5 w-1/2"
      >
        <div className="flex flex-col">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Give For Good
            <span className="text-gradient">
              <br /> Transparent 
            </span>{" "}
            <span className="text-gradient">
              <br />Crowdfunding Platform
            </span>{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 font-poppins`}>
          Designed to be the most secure and most credible informantion system,
          better than the Tanzania interbanking banking system, as it should
          be...
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >

        <img
          src={shield}
          alt="robot"
          className="w-[400px] h-[400px] mt-2 relative z-[5]"
        />

        {/* Gradients */}

        {/* <div className="absolute z-[0] h-[35%] w-[40%] top-0 pink__gradient" /> */}
        {/* <div className="absolute z-[1] h-[85%] w-[80%] bottom-40 rounded-full white__gradient" /> */}
        <div className="absolute z-[0] h-[50%] w-[50%] right-20 bottom-20 blue__gradient" />
        <div className="absolute z-[0] h-[50%] w-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-5`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;