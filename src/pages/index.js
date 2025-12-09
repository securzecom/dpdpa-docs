import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import React, { useRef, useEffect } from "react";
import CountdownTimer from "../components/CountdownTimer";
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Smooth animated gradient positions
  const targetPos = useRef({ x: 50, y: 50 });     // where the mouse "wants" the gradient
  const currentPos = useRef({ x: 50, y: 50 });    // where the gradient actually is
  const raf = useRef(null);
  const headerRef = useRef(null);

  const handleMove = (e) => {
    const rect = headerRef.current.getBoundingClientRect();
    targetPos.current.x = ((e.clientX - rect.left) / rect.width) * 100;
    targetPos.current.y = ((e.clientY - rect.top) / rect.height) * 100;
  };

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      // ease factor - controls smoothness
      const ease = 0.06;

      // move current position slowly toward target
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      // update CSS variables
      if (headerRef.current) {
        headerRef.current.style.setProperty("--pos-x", `${currentPos.current.x}%`);
        headerRef.current.style.setProperty("--pos-y", `${currentPos.current.y}%`);
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <header
      ref={headerRef}
      className={clsx("hero hero--primary", styles.heroBanner)}
      onMouseMove={handleMove}
    >
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <CountdownTimer />

        <img src="img/dpdpa-logo-white.png" width="175" height="100" />

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Overview/Background and Purpose of DPDPA">
            DPDPA Implementation Guide
          </Link>
        </div>

        <br />

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Checklists/DPDPA%20Checklists">
            Download Free Checklists
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="DPDPA Guide 2025 | Digital Personal Data Protection Act Explained"
      description="Understand India’s Digital Personal Data Protection Act (DPDPA). Clear explanations, compliance tips, and practical guidance for businesses and professionals.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
