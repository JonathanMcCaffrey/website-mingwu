import * as React from 'react';

interface ComponentProps {
  data: {};
}

export default class Component extends React.Component<ComponentProps, {}> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div>
        <i>Collages by Ming</i>
      </div>
    );
  }
}
