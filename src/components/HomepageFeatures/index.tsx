import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use with your language of choice!',
    Svg: require('@site/static/img/VVTSRSPY.svg').default,
    description: (
      <>
        voicevox-client is easy to use. Unleash the power of the VOICEVOX engine with so little code!
        Don't waste time with packages that only work on one language. voicevox-client supports three popular languages, and more are coming!
      </>
    ),
  },
  {
    title: 'Lightweight',
    Svg: require('@site/static/img/VVlightweight.svg').default,
    description: (
      <>
        voicevox-client is built to be lightweight, with minimal impact on performance.
      </>
    ),
  },
  {
    title: 'Asynchronous',
    Svg: require('@site/static/img/VVLoop.svg').default,
    description: (
      <>
        Code in a moder, asynchronous way with this package!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
