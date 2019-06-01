import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import * as React from "react";
import { Parallax } from "react-scroll-parallax";
import styles from "../styles/_global.module.scss";

export const getFluidImage = (websiteImages: any, imagePath: string) => {
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
