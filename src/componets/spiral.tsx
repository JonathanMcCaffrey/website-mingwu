import Img from "gatsby-image";
import * as React from "react";
import { connect } from "react-redux";
import * as galleryActions from "../actions/galleryActions";
import styles from "../styles/_global.module.scss";
import FullScreenImage from "./fullscreenImage";

interface ComponentProps {
  data: {
    gallery: any;
    content: any;
  };
  dispatch: any;
}

const handleClick = (props: any, key: any) => {
  props.dispatch(galleryActions.selectImage(key));
};

const renderImages = (props: any, gallery: any) => {
  var data = gallery.edges;

  data = data.sort(function() {
    if (Math.random() == Math.random()) return 0;
    if (Math.random() < Math.random()) return -1;
    if (Math.random() > Math.random()) return 1;
  });

  var imageList: any = [];

  data.map((imageNode: any) => {
    if (imageList.length < 15) {
      imageList.push(
        <div
          key={imageList.length}
          onClick={e => handleClick(props, imageNode.node.id, e)}
        >
          <Img
            className={styles.spiralContainer}
            fluid={imageNode.node.childImageSharp.fluid}
            key={"s" + imageNode.node.id}
          />
        </div>
      );
    }
  });

  return imageList;
};

class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    const { gallery } = this.props.data;

    return (
      <div className={styles.spiralGrid}>
        <FullScreenImage data={this.props.data} />

        <div className={styles.spiralOffset}>
          {renderImages(this.props, gallery)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps)(Component);
