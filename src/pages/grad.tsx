import * as React from "react";
import { Header, Container, Segment, Grid, Image, Transition } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const GradPage = () => {
  return (
    <>
    <Container>
      <br></br>
      <Header as="h2">Graduation</Header>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <p style={{fontSize: '17px'}}>My name is Kyle Finn and I am going to be taking graduation photos for the upcoming Spring 2021 graduation! This will be my third year taking photos and my prices are $65 for individual shoots, and group pricing varies so please contact me for pricing!</p>
            <p style={{fontSize: '17px'}}>Contact info: <a href="https://www.instagram.com/kyle_finn6/" target="_blank">Instagram </a> and <a href="mailto:kylef1@vt.edu" target="_blank">Email</a></p>
            <p style={{fontSize: '17px'}}>There is no limit on photos you can have edited or a number of locations, and there is no payment required until you are 100% happy with your edited photos! I am also always willing to work with you on pricing and payment. If you would like to book please use any of the contact information above. Also, if you would like to view some of my previous shoots take a look below!</p>
          </Grid.Column>
          <Grid.Column>
          <Transition visible={true} animation="fade" duration={400}>
            <Image src="https://lh3.googleusercontent.com/WQsZOuWObelQHdh2mjlKTU9_lS3PsswB0ULuMo2QrmAtYhttkbm3FdFoLpnfIaukkbd5Q8fxH4XzhL9KqA5Tq5-isd-xrwkHmSZUzGnbb75X_x9liDQqDvCGMvz8PtzihDj_aThNjIA=w2400"/>
          </Transition>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      
      <Segment vertical>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Transition visible={true} animation="fade" duration={4}>
              <Image src="https://lh3.googleusercontent.com/-XoqPi7zlCU0TKm3hilWTYmwf5K0jAB1EQCkfnovApoC5xYDD3xRSzsWgCGMpwzYjGShKr9MDOT6pl9FTMM4mZxxL2oj3ynRaJQGrsOnt6ejVzM2BgLQtcKa0A2ICiNeMYTCQz_Mook=w2400"/>
              </Transition>
            </Grid.Column>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/iQgPaichy-UywAXd5Ev6jaWBSMbzR9PuxNPO4FR_gE9Tn8JlxgSZlMTP4uHTUvxmCjgQCEQ9zM3NXw1MuziP6ytYgd6KfBxOAI7j3apIA6MU5ffu0ee_n4FKuX8p-1LP1twtKE5-8QA=w2400"/>
            </Transition>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/iE8U_GqetsMrNiPvpzlMGhZPLESJefDcwsYXrwyD20aRUZrLASwBGBEscOdCB3rh6wI-y8j0zZ3f4pA04wLFzSsTFKx67bVgKQEy6w5ioD3vjVmrmVJLAKeHOtzd0y2lUTtPeYT0eWc=w2400"/>
            </Transition>
            </Grid.Column>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/7Edvrlmae0Gu76vLY77EcihtCi-YbFnTz1aGhNatjFFsveAES_8n-cHX8sqzkp2WCIXZ7yA3Hq-pTufUq2gaKeozuzvA39AR6G9iSw9MLMNcYz34MPh9e49e1oTqzLHKGN_wchgMeWQ=w2400"/>
            </Transition>
            </Grid.Column>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/52Yg8p2VaYNTazvPVIv_PljFW0hv-qd-_FQI6mm5f02iu6YVtpVv63COgOFgI0sOWiHMkQkyMW_lqCZJIt5lNUK0_y2Tn7IDdwty6jHlQ9yRjANuiEJVUgkFHS7vzNid9aNw9vlzd-I=w2400"/>
            </Transition>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/eaRM4drDiEr_LRrU_q1qoBJy05UVxEHJtlXi8M5Z9AIvckFw3YULjLJuj1Vt5xzNFF1QsgZEy-jnHLKXlQL60QbyqJgG9QOPjf238JnRhVXVi5rskizsy0IiGfrmz9V9meEk8AOH9TQ=w2400"/>
            </Transition>
            </Grid.Column>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/sB0sV2bHZnE8grqnSSpE1LsbPfgGyu0yKH1_rupxGZS9PyqSQ6Z44bh4Z7wK0YZYSMO8g9V7BaOhssheP-l9PfdeCp4w970J5T_frKGlsZSCMkHUV2pRLmhAz0XWUk_txyFbCzmXDpk=w2400"/>
            </Transition>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/H9amh8xq_KwEpp1fS2lFHJlfzaSeCk2mP_QvOXBj9pUjo0R0hOdbkP5-BQE_JKxV1SDBXqi8ZEY2U57s5LttYBrP0SgzvqOZneSh6KLUutX2NkTje3-qNNqTedLxx05qcIMKS1x4oSo=w2400"/>
            </Transition>
            </Grid.Column>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/moLbO8G-szDMu8XCFXrEbbnLtg-WaCcRJnFIb7j4jci4T0a0aecL7jrXI1C9rOcazag8m4efFEjRoWxrKbQ_3i0fUuct2Y7vWHi5n4aq8ILse6gINng15l24fVxf_lBxLpdCYfdXVdw=w2400"/>
            </Transition>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/Iz3vRQze6XV8nq5pCGS-Bis2NIsaX5fuuQMLjttqwiYQyLbhc8DsuhqtnBBknjc26lg2WjTe70azuXGm0s-Ioa9N9Ih42NBDSwcnrVCD8SEHJw-DpMlbhQSJId2bh6uYUtUkdGGIuuo=w2400"/>
            </Transition>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/7AFqdL0TCqXJJeWKRQvsQtFVJzX_bWRCNzCLcjRtd4pFwgwWcRGb3GPBz3Bes6j7hr8yDcSWfNQ8x5OLt39ogq03rspC-4t4fbb6PSKzIY5GjMp7vmduaGYolOzL2zcvcB50HP5ZZLw=w2400"/>
            </Transition>
            </Grid.Column>
            <Grid.Column>
            <Transition visible={true} animation="fade" duration={400}>
              <Image src="https://lh3.googleusercontent.com/fYcj1rxrz9RB8oYBcb1jfEMMZvBdHWq-GmmrBE6nQhSHcYostiSyDxhL2gldSSeB9KWW_G2gXbtHa5AAfMd96E84Q0GA6UJXjbC1ZVLK9OhJOvFdUtH2RABPhj4RFylmqaDHnCpHdSw=w2400"/>
            </Transition>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment vertical>
      </Segment>
    </Container>
    </>
  );
};

export default withLayout(GradPage);
