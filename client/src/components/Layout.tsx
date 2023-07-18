import { Component, JSXElement } from 'solid-js';
import Header from './Header';

interface LayoutProps {
  children: JSXElement;
}

const Layout: Component<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
