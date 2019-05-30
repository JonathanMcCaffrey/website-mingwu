import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";
import * as React from "react";
import { connect } from "react-redux";
import * as effectActions from "../actions/effectActions";
import styles from "../styles/_global.module.scss";
import Sidebar from "../componets/sidebar";
import Spiral from "../componets/spiral";
import Gallery from "../componets/gallery";
import Header from "../componets/header";
import Portrait from "../componets/portrait";
import Footer from "../componets/footer";
import TextBackground from "../componets/textbackground";
import Description from "../componets/description";

interface ComponentProps {
  data: {};
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
  };

  handleMouseMove = (store: any) => {
    clearTimeout(this.timerId);

    var isback = false;
    if (store.effect != null) {
      isback = this.props.state.effect[this.props.state.effect.length - 1]
        .background;
    }

    if (
      this.props.state.effect[this.props.state.effect.length - 1].background
    ) {
      this.props.dispatch(effectActions.debackground());
    }

    this.hidingTimer();
  };

  public render() {
    return (
      <div className={styles.page}>
        <div className={styles.wrapper} onMouseMove={this.handleMouseMove}>
          <div className={styles.header}>
            <Header data={this.props.data} />
          </div>
          <div className={styles.textbackground}>
            <TextBackground data={this.props.data} />
          </div>
          <div className={styles.spiral}>
            <Spiral data={this.props.data} />
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
            <Gallery data={this.props.data} />
          </div>
          <div className={styles.footer}>
            <Footer data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { state };
}

export default connect(mapStateToProps)(Component);
