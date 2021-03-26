import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import Gallery from "react-photo-gallery";

import { photos } from "./photo-data"

const PhotographyPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <Gallery photos={photos}/>
      </Segment>
    </Container>
  );
};

export default withLayout(PhotographyPage);
