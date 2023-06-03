"use client";

import HeroSection from "@/src/widgets/landing/HeroSection";
import CommonBlock from "@/src/shared/ui/blocks/CommonBlock";
import WhatIsSection from "@/src/widgets/landing/WhatIsSection";
import InvestIntoSection from "@/src/widgets/landing/InvestIntoSection";
import styles from "./styles.module.scss";
import FinancingSection from "@/src/widgets/landing/FinancingSection";
import ReturnedLoansSection from "@/src/widgets/landing/ReturnedLoansSection";
import {useEffect, useRef} from "react";

export default function Home() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const parallaxRef = useRef<HTMLDivElement | null>(null);
    const fixed = useRef(true);
    useEffect(() => {
        const callback = () => {
            const topDiff = parallaxRef.current!.getBoundingClientRect().top;
            console.log(topDiff);
            console.log(fixed.current)
            if (topDiff <= 0 && fixed.current) {
                heroRef.current!.classList.add(styles.hero_section_unfixed);
                parallaxRef.current?.classList.add(styles.parallax_block___unfixed);
                fixed.current = false;
                return;
            }
            if (topDiff > 0 && !fixed.current) {
                heroRef.current!.classList.remove(styles.hero_section_unfixed);
                parallaxRef.current?.classList.remove(styles.parallax_block___unfixed);
                fixed.current = true;
            }
        }
        window.addEventListener("scroll", callback);
        return () => {
            window.removeEventListener("scroll", callback);
        }
    }, []);
    return (
      <>
        <HeroSection ref={heroRef} />
        <div className={styles.parallax_block} ref={parallaxRef}>
            <CommonBlock first>
                <WhatIsSection />
                <InvestIntoSection />
                <FinancingSection />
            </CommonBlock>
            <ReturnedLoansSection />
        </div>
      </>
  );
}
