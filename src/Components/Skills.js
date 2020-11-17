import React from "react";
import { Container, Row, Col } from "reactstrap";

export default () => (
  <div className="page" id="skills">
    <Container className="page-container">
      <Row className="mb-4">
        <Col
          xs="12"
          md={{ size: 2, offset: 2 }}
          className="large-right-border text-left text-md-right"
        >
          <span className="sm-underline-parent">
            <h3 className="mb-0 sm-underline header-text">skills</h3>
          </span>
        </Col>
        <Col
          xs="12"
          md={{ size: 6, offset: 0 }}
          className="d-flex flex-column justify-content-center"
        >
          <p className="text-left mb-0">
            JavaScript, React, Ember, NodeJS, Express, Sequelize, Java,
            SpringBoot, SQL, CSS, Bootstrap, Responsive Development, AWS,
            Firebase
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);
