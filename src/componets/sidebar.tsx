import * as React from "react";
import { Link } from "gatsby";

import styles from "../styles/_global.module.scss";

interface ComponentProps {
  data: {};
}

const menuItem = (link: string, name: string, selected: any) => {
  return (
    <div className={styles.item}>
      <Link
        to={link}
        className={link === selected ? " " + styles.selected : ""}
      >
        {name}
      </Link>
    </div>
  );
};

export default class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }

  selected = "/";

  public render() {
    return (
      <div className={styles.menu}>
        {menuItem("/", "About", this.selected)}
        {menuItem("/rework/", "Rework", this.selected)}
        {menuItem("/instagram/", "Instagram", this.selected)}
        {menuItem("/contact/", "Contact", this.selected)}
      </div>
    );
  }
}
