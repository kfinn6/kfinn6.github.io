import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import Gallery from "react-photo-gallery";
import { Link } from "gatsby";

const photos = [
  {
      src: "https://lh3.googleusercontent.com/NEHk2UOGnFARpUh2GWs8h4oL9UDquU7vyRc7zJKpUZ93Rz-VwKsFMPv0G0Z1iHOE4tdMqABA-rvdqzL23Xo9yHX8L9mi1Ii4YGaB6eqvzKPGFWZ4QxDTdnitqREd9FXKAumRJdwTAv8=w2400",
      width: 3,
      height: 4
  },
  {
      src: "https://lh3.googleusercontent.com/x4VVGYDOWIW0sbkAwWKTbDw5eL-XmUqY3jKgC0N3OoHmh1Ry4MEeNmZXNU8EQ30wluvL_E5osKFgjtYeNSsBlzTVj-a3W-rM36r2aiB80q4TE6RN6cGGU06jtrmhCiuOykg1DNPwB_Y=w2400",
      width: 4,
      height: 3
  },
  {
      src: "https://lh3.googleusercontent.com/sIAehltwjACuUeFsCzyHuHZciEPsRmfTgaG2isg-VKUBSUD1hDBtcOAGSzGGKrefQVZoZJTKceMxeEBjADqduxy1ge4YXvQSsu5eBuNsxex4S1bNB6disdXg3MjMApJQ9HGjakJnTkM=w2400",
      width: 4,
      height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/ynJMIluKeZ94Xel20Xd69gCuTA7PWBf-C7evnVj0mhtQYfdPEh9nlT6LrrG8_BxjiWtJe1S82uVcJFlLmRNIUsdqaEDkUSzWNaJzcWx5GBrpyIU7a4H6ydKEOlll_nhhetiJLMcskO0=w2400",
    width: 3,
    height: 4
  },
  {
    src: "https://lh3.googleusercontent.com/ee7Qg6em_ElO8ZfKI0IqswUNw5L--cmVxZheIvIdSYDLYNKDQBhUaTKfphMWZrex9_PAcDx1_yyIyvi6vOipd3bE3w7jo1O-dsDJG4eNzmOt5DNLGckdUjKmrnM6VXLjUDIrPTtJ6YU=w2400",
    width: 4, 
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/v1tGsL0ODyfW4M7D8_0f6ISvXDkLd_RaONkGWr24JauhsPae4J6T91jZBBR-FfvVmpBrq0Ercv37sWj5WFi9OMiX-0Fz0zIGn4VRYKCnm6_x21Qi4Vg-6q2tGiBeKa97ldHi3FwRcIc=w2400",
    width: 4,
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/DahupUFTWXYZV1IrsgKYZic-qDFqyaTKhUaMWUvMDsw7mHQdnfV1eaaCLXKq5738xGVR3xuzIY2o1ziafwwPVUFc5mvxmyRjN7t0zXW4fkYJIb3DyD-StVAOTAWaei8c2WhQQJFPzeo=w2400",
    width: 4,
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/5M_T5eZ3pV9bQJISzoEt0qEN-hXd6Qc7OhbXdNajqjXSWNl3CJIUlw01zKVhWEh0M7NqsbSeH0iUHGTxcFWu1TAV5hwVobkCk9munWOfilORl73JfOXioOdbJr6Tz-0PQ2i8QDvHdKo=w2400",
    width: 3,
    height: 4
  },
  {
    src: "https://lh3.googleusercontent.com/MGc6UQodFzX5X8Go-54FyjrKMGw7ZL24dl6-cDOL2UJLUUoLsvbaN5w1vawLKbt81gF8Lgc9PETyD1m8mOYtDUMBkcv7Tcnf1LhSm_fIwhLmHBi6lJA-V4Pqza4sdpzVMLMH2rS4bLI=w2400",
    width: 4,
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/kEDmiv--PbcIlo8msmf4btloHCN0bVlVHmPMLeNZA6rA22mHvONEjrHHocsJHmMyOh0_33bbGsp0K21G2ZHNDOEXUz3DDu34-AwLEbyy5dxcyjyVGP3ORXn5I8l16ymtTft1MLtBjWQ=w2400",
    width: 4,
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/JM2n2VwS9qcuROhDxqIvJLT88eIEzsL_XWWkdsl7UL1KQS4F_MOGk61C9D1uENJyp7CQTvyqAMFAzU9vozBUwSpeV1rbzSNmfRg_tBTRis6RkdtQaWwh1eCY2jGvW2XCwL5OTbPxYIk=w2400",
    width: 4,
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/I_vrFkZC6VnaFFaK-hmA4hVxcvvCCTE6L-0aUREiYiE3SwYmNDnRv1gClsT6ol5Lwx4dstvAn2swlA7q2bKgc60u3Gmck7PxmU7MDxfJnyDPsPevXa4EEik4M2jXRPPWgCY0KE4Wx5w=w2400",
    width: 4,
    height: 3
  },
  {
    src: "https://lh3.googleusercontent.com/yp6bH3c5deuX1UiSaN5FzsQpoHe1vcXbEEKqt_DSbTowgBLqgIqmtRHfMO9D8YLxBBaZ0EsVEK3QHS0OWVXiMyLNoydnCnIXiyIvJEFOZIOMQ5icmhlcbicDDiAvegyAQh4FTI0KrYI=w2400",
    width: 4,
    height: 3
  }
]

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
        <Gallery photos={photos} margin={0}/>
      </Segment>
    </Container>
  );
};

export default withLayout(PhotographyPage);
