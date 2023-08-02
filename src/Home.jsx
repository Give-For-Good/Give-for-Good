import React from "react";
import styles from "./style";
import { Navbar, Hero, Business, Footer } from "./components";

const Home = () => {
  return (
    <div className="bg-black w-full overflow-hidden bg-black-gradient">
        <div className="bg-black px-12">
          <Navbar />
        </div>

      <div className={`bg-primary mt-0 ${styles.flexStart}`}>
        <div className={`$styles.boxWidth`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
