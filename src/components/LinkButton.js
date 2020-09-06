import React from 'react';
import { Link } from 'gatsby';

const LinkButton = (props) => {
  const {
    background, color, href, children,
  } = props;

  const style = {
    background,
    color,
  };

  return (
    <Link href={href}
      style={style}
      className="link-btn"
    >
      {children}
    </Link>
  );
};

export default LinkButton;
