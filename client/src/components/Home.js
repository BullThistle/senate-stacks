import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

const Home = () => (
  <Container style={{ marginTop: '7em' }}>
    <Grid className="centered">
      <Grid.Row>
        <Header as="h1">Senate Stacks</Header>
      </Grid.Row>
      <Grid.Row />
    </Grid>
  </Container>
);

export default Home;
