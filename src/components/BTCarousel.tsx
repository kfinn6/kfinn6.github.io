import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React from "react";

const Btcarousel = () => (
    <Container>
        <Carousel
          showArrows={true}
          controls={true}
          justify-self="end"
          align-self="center"
          control-prev-icon-color="invert(100%)"
          control-next-icon-color="invert(100%)"
          >
                  <Carousel.Item>
                    <img className="d-block w-70" src={"https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"} alt="Portfolio" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-70"
                      src={"https://live.staticflickr.com/2912/13981352255_fc59cfdba2_b.jpg"}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-70"
                      src={"https://miro.medium.com/max/1838/1*MI686k5sDQrISBM6L8pf5A.jpeg"}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-70"
                      src={"https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG98ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
        </Carousel>
    </Container>
  );

  export default Btcarousel;