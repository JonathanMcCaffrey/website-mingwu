import Img from 'gatsby-image';
import * as React from 'react';
import { connect } from 'react-redux';
import * as galleryActions from '../actions/galleryActions';
import styles from '../styles/_global.module.scss';

interface ComponentProps {
  data: any;
  dispatch: any;
  state: any;
}

class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }

  handleClick = () => {
    this.props.dispatch(galleryActions.deselectImage());
  };

  renderMarkdown = (name: string) => {
    let data = this.props.data.content.edges;

    return data
      .map((md: any) => {
        if (
          md.node.frontmatter.image &&
          md.node.frontmatter.image.includes(name)
        ) {
          return (
            <div>
              <p>
                <b>{md.node.frontmatter.title}</b>
              </p>
              <p
                dangerouslySetInnerHTML={{
                  __html: md.node.html
                }}
              />
            </div>
          );
        }
      })
      .filter(function(a: any) {
        return a;
      })[0];
  };

  renderFullScreen = (id: string) => {
    return (
      <div>
        {(() => {
          return this.props.data.gallery.edges
            .map((image: any) => {
              if (image.node.id === id) {
                return (
                  <div className={styles.fullScreen}>
                    <div
                      key={image.node.id}
                      className={styles.fullScreenGrid}
                      onClick={this.handleClick}
                    >
                      <div className={styles.fullScreenImage}>
                        <Img
                          fluid={image.node.childImageSharp.fluid}
                          key={image.node.id}
                        />
                      </div>
                      <div className={styles.fullScreenText}>
                        {this.renderMarkdown(image.node.name)}
                      </div>
                    </div>
                  </div>
                );
              }
            })
            .filter(function(a: any) {
              return a;
            })[0];
        })()}
      </div>
    );
  };

  getId = () => {
    if (this.props.state.gallery && this.props.state.gallery.length > 0) {
      return this.props.state.gallery[this.props.state.gallery.length - 1].id;
    } else {
      return '';
    }
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {};

  public render() {
    return <div>{this.renderFullScreen(this.getId())}</div>;
  }
}

function mapStateToProps(state: any) {
  return { state };
}

export default connect(mapStateToProps)(Component);
