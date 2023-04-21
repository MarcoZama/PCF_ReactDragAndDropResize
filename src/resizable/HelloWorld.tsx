import * as React from 'react';
import ResizableDiv from './components/ResizableDiv';

export interface IHelloWorldProps {
  name?: string;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
      <ResizableDiv></ResizableDiv>
    )
  }
}
