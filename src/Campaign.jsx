import React from "react";
import styles from "./style";

import {
  Navbar,
  Hero,
  CardDeal,
  Business,
  FeatureCard,
  FeedbackCard,
  Clients,
  CTA,
  Stats,
  Footer,
} from "./components";
import ListTable from "./components/ListTable";

const Campaign = () => {
  return (
    <div className="bg-primary w-full overflow-hidden bg-black-gradient">
        <div className="bg-black px-12">
          <Navbar />
        </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CTA/>
          <Clients/>
          <Clients/>
          <Clients/>
          <Clients/>
          <Clients/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Campaign;
