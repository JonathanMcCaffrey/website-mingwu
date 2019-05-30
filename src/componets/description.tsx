import * as React from "react";
import styles from "../styles/_global.module.scss";

interface ComponentProps {
  data: {};
}

export default class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className={styles.textContainer}>
        <p
          dangerouslySetInnerHTML={{
            __html: this.props.data.about.html
          }}
        />
      </div>
    );
  }
}