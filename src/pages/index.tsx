import { graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../layouts";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import FrontPage from "../componets/frontpage";

import store from "../store";
interface PageProps {
  data: {
    imageTitle: any;
    content: any;
    websiteImages: any;
    location: any;
    gallery: any;
    about: any;
  };
}

export default class IndexPage extends React.Component<PageProps, {}> {
  public render() {
    return (
      <ParallaxProvider>
        <Provider store={store}>
          <Helmet>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <title>Ming Wu</title>
            <link rel="canonical" href="https://jonathanmc.dev/" />
          </Helmet>
          <Layout>
            <FrontPage data={this.props.data} />
          </Layout>
        </Provider>
      </ParallaxProvider>
    );
  }
}

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        siteName
      }
    }

    about: markdownRemark(frontmatter: { page: { eq: "about" } }) {
      html
    }

    content: allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: ASC }
    ) {
      edges {
        node {
          html
          rawMarkdownBody
          frontmatter {
            title
            image
            tags
          }
        }
      }
    }

    websiteImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)|(webp)/" }
        sourceInstanceName: { eq: "images" }
      }
    ) {
      edges {
        node {
          id
          name
          relativePath

          childImageSharp {
            fluid {
              src
              aspectRatio
              srcSet
              sizes
            }
          }
        }
      }
    }

    gallery: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)|(webp)/" }
        sourceInstanceName: { eq: "gallery" }
      }
    ) {
      edges {
        node {
          id
          name
          relativePath
          childImageSharp {
            fluid {
              src
              aspectRatio
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;
