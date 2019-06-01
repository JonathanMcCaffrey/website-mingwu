import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import * as React from 'react';
import { connect } from 'react-redux';
import * as galleryActions from '../actions/galleryActions';
import styles from '../styles/_global.module.scss';
import FullScreenImage from './fullscreenImage';

interface ComponentProps {
  data: any;
  dispatch: any;
}

class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }

  selectedImageKey = '';

  handleClick = (id: string) => {
    this.props.dispatch(galleryActions.selectImage(id));
  };

  renderImages = () => {
    let data = this.props.data.gallery.edges;

    data = data.sort(function(a: any, b: any) {
      if (a.node.name == b.node.name) {
        return 0;
      }
      if (a.node.name < b.node.name) {
        return -1;
      }
      if (a.node.name > b.node.name) {
        return 1;
      }
    });

    return data.map((image: any) => {
      this.selectedImageKey = image.node.id;

      return (
        <div
          key={'d' + image.node.id}
          onClick={e => this.handleClick(image.node.id)}
          className={styles.collageButton}
        >
          <Img
            fluid={image.node.childImageSharp.fluid}
            className={styles.collageContainer}
            key={'i' + image.node.id}
          />
        </div>
      );
    });
  };

  renderImage = (frontmatter: any) => {
    return this.props.data.gallery.edges
      .map((image: any) => {
        if (image.node.relativePath.includes(frontmatter.image)) {
          this.selectedImageKey = image.node.id;
          return (
            <div
              key={'d' + image.node.id}
              className={styles.collageButton}
              onClick={e => this.handleClick(image.node.id)}
            >
              <Img
                className={styles.collageContainer}
                fluid={image.node.childImageSharp.fluid}
                key={'i' + image.node.id}
              />
              <div className={styles.imageTitle} key={'p' + image.node.id}>
                {frontmatter.title}
              </div>
            </div>
          );
        }
      })
      .filter(function(a: any) {
        return a;
      })[0];
  };

  renderMarkdown = () => {
    let data = this.props.data.content.edges;

    data = data.sort(function(a: any, b: any) {
      if (a.node.name == b.node.name) {
        return 0;
      }
      if (a.node.name < b.node.name) {
        return -1;
      }
      if (a.node.name > b.node.name) {
        return 1;
      }
    });

    return data.map((md: any) => {
      return this.renderImage(md.node.frontmatter);
    });
  };

  public render() {
    return (
      <div>
        <FullScreenImage data={this.props.data} />

        <div className={styles.collageGrid}>{this.renderMarkdown()}</div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return state;
}

export default connect(mapStateToProps)(Component);
