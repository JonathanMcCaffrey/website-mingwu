import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import * as React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "../styles/_global.module.scss";

interface ComponentProps {
  data: {
    websiteImages: any;
  };
}

export default class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }

  getFluidImage = (websiteImages: any, imagePath: string) => {
    return websiteImages.edges
      .map((imageNode: any) => {
        if (imageNode.node.relativePath === imagePath) {
          return imageNode.node.childImageSharp.fluid;
        }
      })
      .filter(function(e: any) {
        return e;
      })[0];
  };

  public render() {
    const { websiteImages } = this.props.data;

    return (
      <div className={styles.portraitContainer}>
        <BackgroundImage
          Tag="section"
          fluid={this.getFluidImage(websiteImages, "background.webp")}
          className={styles.portraitBackground}
        >
          <Parallax x={[0, -13]} y={[0, -25]}>
            <Img
              Tag="section"
              fluid={this.getFluidImage(websiteImages, "background.webp")}
              className={styles.portraitBackWall}
            />
          </Parallax>

          <Parallax x={[0, 10]} y={[-10, -50]}>
            <Img
              className={styles.portraitElementContainer}
              fluid={this.getFluidImage(websiteImages, "ming.webp")}
            />
          </Parallax>
        </BackgroundImage>
      </div>
    );
  }
}
