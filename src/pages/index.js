import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import React from "react";
import CountdownTimer from "../components/CountdownTimer";

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    e.currentTarget.style.setProperty("--reveal-x", `${x}%`);
    e.currentTarget.style.setProperty("--reveal-y", `${y}%`);
  };

  return (
    <header
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
          <Link className="button button--secondary button--lg"
            to="/docs/Overview/Background and Purpose of DPDPA">
            DPDPA Implementation Guide
          </Link>
        </div>

        <br />

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg"
            to="/docs/Checklists/DPDPA%20Checklists">
            Download Free Checklists
          </Link>
        </div>
      </div>
    </header>
  );
}




export default function Home() {
  const {siteConfig} = useDocusaurusContext();
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