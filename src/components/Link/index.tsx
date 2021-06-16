import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomLink: FC<LinkProps> = ({to, children}) => {
  return (
    <Nav.Link as={Link} to={to}>
      {children}
    </Nav.Link>
  )
};

export default CustomLink;
