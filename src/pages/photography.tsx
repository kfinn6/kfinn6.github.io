import * as React from "react";
import { useCallback } from "react"
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import Gallery from "react-photo-gallery";
import { navigate } from "gatsby"
import { Link } from "gatsby";

const photos = [
  {
    // this
    src: "https://lh3.googleusercontent.com/v1tGsL0ODyfW4M7D8_0f6ISvXDkLd_RaONkGWr24JauhsPae4J6T91jZBBR-FfvVmpBrq0Ercv37sWj5WFi9OMiX-0Fz0zIGn4VRYKCnm6_x21Qi4Vg-6q2tGiBeKa97ldHi3FwRcIc=w2400",
    width: 6,
    height: 4
  },
  {
    src: "https://lh3.googleusercontent.com/QM1jhUfmbpME-_LxxNJaN_jUAVG1pyxjDHhaG1-TNQzntjM30MSlxbu1jxNfd3jwpKtZoCbgQF-wZkMT99BATB9Tz0WB_NS_H8BMR2O-vevhmdZwPuSdieh5Al1Jn5S8PnQ0ReQISW4=w2400",
    width: 6,
    height: 4
  }
]

const redirectPage = (event, { photo, index }) => {
  // switch statement
  if (index == 0) {
    navigate("/europe");
  }
  else if (index == 1) {
    navigate("/grad")
  }
  
};

const PhotographyPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="photo"/>
          <Header.Content>
            Photography
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <Gallery photos={photos} margin={0} onClick={redirectPage}/>
      </Segment>
    </Container>
  );
};

export default withLayout(PhotographyPage);
