import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import styles from '../styles/_global.module.scss';
import { getFluidImage } from '../utils';

interface ComponentProps {
  data: {
    websiteImages: any;
  };
}

export default class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { websiteImages } = this.props.data;

    return (
      <div className={styles.portraitContainer}>
        <BackgroundImage
          Tag="section"
          fluid={getFluidImage(websiteImages, 'background.webp')}
          className={styles.portraitBackground}
        >
          <Parallax x={[0, -13]} y={[0, -25]}>
            <Img
              Tag="section"
              fluid={getFluidImage(websiteImages, 'background.webp')}
              className={styles.portraitBackWall}
            />
          </Parallax>

          <Parallax x={[0, 10]} y={[-10, -50]}>
            <Img
              className={styles.portraitElementContainer}
              fluid={getFluidImage(websiteImages, 'ming.webp')}
            />
          </Parallax>
        </BackgroundImage>
      </div>
    );
  }
}
