import * as React from 'react';
import styles from '../styles/_global.module.scss';

interface ComponentProps {
  data: { about: any };
}

export default class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className={styles.textContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.data.about.html
          }}
        />
      </div>
    );
  }
}
