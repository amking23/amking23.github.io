import React from "react";
import { Container, Row, Col } from "reactstrap";
import me from "../Assets/me.png";
import "animate.css/animate.css";

export default () => (
  <div className="page" id="about">
    <Container className="page-container">
      <Row>
        <Col
          xs={{ size: 10, offset: 1 }}
          sm={{ size: 8, offset: 2 }}
          lg={{ size: 6, offset: 0 }}
          className="order-lg-2"
        >
          <img
            src={me}
            className="animate__animated animate__fadeIn"
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col
          xs={{ size: 10, offset: 1 }}
          sm={{ size: 8, offset: 2 }}
          lg={{ size: 5, offset: 1 }}
          className="order-lg-1 d-flex flex-column justify-content-center"
        >
          <h3 className="text-left text-md-center text-lg-right header-text mb-0 animate__animated animate__fadeIn">
            hi, i'm anne marie
          </h3>
          <p className="text-left text-md-center text-lg-right animate__animated animate__fadeIn mb-0">
            I'm a Software Engineer wtih experience in JavaScript,
            React, Responsive Design, Java, SpringBoot, and SQL. Based in
            Chicago, Illinois and working as a Software Engineer for Clearstep.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);
