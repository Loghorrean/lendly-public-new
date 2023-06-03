"use client";

import HeroSection from "@/src/widgets/landing/HeroSection";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import WhatIsSection from "@/src/widgets/landing/WhatIsSection";
import InvestIntoSection from "@/src/widgets/landing/InvestIntoSection";
import styles from "./styles.module.scss";
import FinancingSection from "@/src/widgets/landing/FinancingSection";

export default function Home() {
    return (
      <>
        <HeroSection />
        <div className={styles.parallax_block}>
            <CommonBlock first>
                <WhatIsSection />
                <InvestIntoSection />
                <FinancingSection />
            </CommonBlock>
        </div>
      </>
  );
}
