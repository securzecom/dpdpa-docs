import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Aligned with India’s Privacy Law',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Built to explain the Digital Personal Data Protection Act (DPDPA), ensuring individuals and organizations understand their rights and responsibilities clearly.
      </>
    ),
  },
  {
    title: 'Practical Compliance Guidance',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Step-by-step breakdowns, real-world examples, and industry-specific checklists to help businesses implement DPDPA effectively.
      </>
    ),
  },
  {
    title: 'Free Checklists',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Free DPDPA checklists created by Securze to help you understand and implement compliance with clarity and confidence.
      </>
    ),
  },
];



function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">

        {/* New image + title + subtitle block in the CENTER */}
        <div
          className="row"
          style={{ marginTop: '3rem', justifyContent: 'center' }}
        >
          <div className="col col--8" style={{ textAlign: 'center' }}>
            <img
              src="/img/dpdpa_review_panel_homepage.png"   // put your image in static/img/collage.png
              alt="DPDPA Collage"
              style={{
                width: '100%',
                maxWidth: '5000px',
                borderRadius: '12px',
                marginBottom: '1.5rem',
              }}
            />

            <h2 style={{ marginBottom: '0.75rem' }}>
              A Community of Experts
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                maxWidth: '650px',
                margin: '0 auto',
                opacity: 0.9,
              }}
            >
              Backed by insights from our esteemed Review Panel, this Securze-driven effort ensures the Digital Personal Data Protection Act is explained accurately, simply, and responsibly.
            </p>
            <div style={{ marginTop: '1.75rem' }}>
              <a href="/blog" className="button button--primary button--lg" style={{borderRadius: '8px', padding: '0.8rem 2rem', fontSize: '1rem', }}> 
              Board
              </a></div>
          </div>
        </div>

        {/* Existing 3-feature row */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

/*

export default function HomepageFeatures() {
  return (
    
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}

        </div>
      </div>
      </section>
  );
}
  */
