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
    title: 'A Community-Driven Initiative by Securze',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A community-driven initiative by Securze, created to make the Digital Personal Data Protection Act (DPDPA 2023) clear, practical, and accessible for all.
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
