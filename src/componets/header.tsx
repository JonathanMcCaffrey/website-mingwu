import * as React from "react";
import { connect } from "react-redux";
import styles from "../styles/_global.module.scss";

interface ComponentProps {
  data: {};
}

interface ComponentState {}

class Component extends React.Component<ComponentProps, ComponentState> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className={styles.topContainer}>
        <div className={styles.top}>
          <div className={styles.title}>Ming Wu</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { state };
}

export default connect(mapStateToProps)(Component);
