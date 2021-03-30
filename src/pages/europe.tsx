import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const EuropePage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Header.Content>
            Coming soon!
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
      </Segment>
    </Container>
  );
};

export default withLayout(EuropePage);
