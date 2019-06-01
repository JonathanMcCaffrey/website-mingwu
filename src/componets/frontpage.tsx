import Img from 'gatsby-image';
import * as React from 'react';
import { connect } from 'react-redux';
import * as effectActions from '../actions/effectActions';
import styles from '../styles/_global.module.scss';
import Sidebar from '../componets/sidebar';
import Spiral from '../componets/spiral';
import Gallery from '../componets/gallery';
import Header from '../componets/header';
import Portrait from '../componets/portrait';
import Footer from '../componets/footer';
import TextBackground from '../componets/textbackground';
import Description from '../componets/description';
import { Parallax } from 'react-scroll-parallax';
import { getFluidImage } from '../utils';

interface ComponentProps {
  dispatch: any;
  state: any;
  data: { websiteImages: any; gallery: any; about: any };
}

class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);

    this.timerId = null;

    this.hidingTimer();
  }

  app = this;
  timerId: any;

  hidingTimer = () => {
    this.timerId = setTimeout(() => {
      this.props.dispatch(effectActions.background());
    }, 50000);
  };

  componentDidMount = () => {
    this.hidingTimer();
    window.addEventListener('scroll', this.handleHideEffects);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleHideEffects);
  }

  handleHideEffects = (store: any) => {
    clearTimeout(this.timerId);

    if (
      this.props.state.effect[this.props.state.effect.length - 1].background
    ) {
      this.props.dispatch(effectActions.debackground());
    }

    this.hidingTimer();
  };

  public render() {
    const { websiteImages } = this.props.data;

    return (
      <div className={styles.page}>
        <div className={styles.collageEffect}>
          <Parallax x={[0, -10]} y={[-20, 10]}>
            <div className={styles.backImage}>
              <Img
                className={styles.i1}
                fluid={getFluidImage(websiteImages, '1.webp')}
              />
            </div>
          </Parallax>

          <Parallax x={[0, 10]} y={[40, -30]}>
            <div className={styles.backImage}>
              <Img
                className={styles.i2}
                fluid={getFluidImage(websiteImages, '2.webp')}
              />
            </div>
          </Parallax>

          <Parallax x={[-10, 0]} y={[-20, 20]} className={styles.backImage}>
            <div className={styles.backImage}>
              <Img
                className={styles.i3}
                fluid={getFluidImage(websiteImages, '3.webp')}
              />
            </div>
          </Parallax>
        </div>

        <div className={styles.collageEffect2}>
          <Parallax x={[0, -10]} y={[-20, 10]}>
            <div className={styles.backImage}>
              <Img
                className={styles.i4}
                fluid={getFluidImage(websiteImages, '1.webp')}
              />
            </div>
          </Parallax>

          <Parallax x={[0, 10]} y={[40, -30]}>
            <div className={styles.backImage}>
              <Img
                className={styles.i5}
                fluid={getFluidImage(websiteImages, '2.webp')}
              />
            </div>
          </Parallax>

          <Parallax x={[-10, 0]} y={[-20, 20]} className={styles.backImage}>
            <div className={styles.backImage}>
              <Img
                className={styles.i6}
                fluid={getFluidImage(websiteImages, '3.webp')}
              />
            </div>
          </Parallax>
        </div>

        <div className={styles.wrapper} onMouseMove={this.handleHideEffects}>
          <div className={styles.header}>
            <Header data={this.props.data} />
          </div>
          <div className={styles.textbackground}>
            <TextBackground data={this.props.data} />
          </div>
          <div className={styles.spiral}>
            <Spiral data={this.props.data} dispatch={this.props.dispatch} />
          </div>
          <div className={styles.sidebar}>
            <Sidebar data={this.props.data} />
          </div>
          <div className={styles.portrait}>
            <Portrait data={this.props.data} />
          </div>
          <div className={styles.description}>
            <Description data={this.props.data} />
          </div>
          <div className={styles.gallery}>
            <Gallery data={this.props.data} dispatch={this.props.dispatch} />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer data={this.props.data} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { state };
}

export default connect(mapStateToProps)(Component);
