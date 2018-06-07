import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const HeaderMenu = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" href="/" header>
        Senate Stacks
      </Menu.Item>
    </Container>
  </Menu>
);

export default HeaderMenu;
