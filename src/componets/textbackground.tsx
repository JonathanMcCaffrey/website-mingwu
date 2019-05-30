import * as React from "react";
import { connect } from "react-redux";
import styles from "../styles/_global.module.scss";

interface ComponentProps {
  data: {};
}

class Component extends React.Component<ComponentProps, {}> {
  renderTextbackground = () => {
    var listOfText = [];

    var isback = false;
    if (this.props.state.effect != null) {
      isback = this.props.state.effect[this.props.state.effect.length - 1]
        .background;
    }
    var list = [
      "Collages",
      "Art",
      "Photography",
      "Ottawa",
      "...",
      "😉",
      "🐱",
      "🎨",
      "🐶",
      "📷",
      "✒️",
      "🖍️",
      "~~~",
      "---"
    ];

    if (isback)
      for (let i = 0; i < 750; i++) {
        if (i % 5 === 0) {
          listOfText.push(
            <div key={listOfText.length} className={styles.frontText}>
              {
                this.props.state.effect[this.props.state.effect.length - 1]
                  .background
              }

              <p
                key={"p" + listOfText.length}
                style={{
                  transform: `translate(${Math.random() * 200 -
                    100}px, ${Math.random() * 200 -
                    100}px) scale(${Math.random() * 2 +
                    1}) rotate(${Math.random() *
                    360}deg) translate(${Math.random() * 200 -
                    100}px, ${Math.random() * 200 -
                    100}px) scale(${Math.random() *
                    0.5}) rotate(${Math.random() * 360}deg)`
                }}
              >
                {list[Math.floor(Math.random() * (1 + list.length - 1))]}
              </p>
            </div>
          );
        } else {
          listOfText.push(
            <div key={listOfText.length} className={styles.backText}>
              {
                this.props.state.effect[this.props.state.effect.length - 1]
                  .background
              }

              <p
                key={"p" + listOfText.length}
                style={{
                  transform: `translate(${Math.random() * 200 -
                    100}px, ${Math.random() * 200 -
                    100}px) scale(${Math.random() * 3.5 +
                    1}) rotate(${Math.random() *
                    360}deg) translate(${Math.random() * 200 -
                    100}px, ${Math.random() * 200 -
                    100}px) scale(${Math.random() * 0.5 +
                    0.5}) rotate(${Math.random() * 360}deg)`
                }}
              >
                {list[Math.floor(Math.random() * (1 + list.length - 1))]}
              </p>
            </div>
          );
        }
      }

    return listOfText;
  };

  public render() {
    return (
      <div className={styles.textbackground}>
        <div className={styles.textbackgroundGrid}>
          {this.renderTextbackground()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { state };
}

export default connect(mapStateToProps)(Component);
