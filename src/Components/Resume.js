import React from "react";
import { Container, Row, Col } from "reactstrap";

export default () => (
  <div className="page" id="resume">
    <Container className="page-container">
      <Row className="mb-4">
        <Col
          xs="12"
          sm={{ size: 10, offset: 1 }}
          md={{ size: 4, offset: 0 }}
          className="order-md-2 large-left-border text-right text-md-left"
        >
          <span className="sm-underline-parent">
            <h3 className="text-right text-md-left mb-0 sm-underline header-text">
              experience
            </h3>
          </span>
        </Col>
        <Col
          xs="12"
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 0 }}
          className="order-md-1 d-flex flex-column justify-content-center"
        >
          <h5 className="text-right mb-0 sub-header-text">jpmorgan chase</h5>
          <p className="text-right mb-2">
            <i>Software Engineer</i> | November 2017 - Present
          </p>
          <h5 className="text-right mb-0 text-break sub-header-text">
            pricewaterhousecoopers
          </h5>
          <p className="text-right mb-0">
            <i>Assurance Associate</i> | August 2015 - May 2017
          </p>
          <p className="text-right mb-0">
            <i>Assurance Intern</i> | June 2014 - August 2014
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          xs="12"
          sm={{ size: 10, offset: 1 }}
          md={{ size: 3, offset: 0 }}
          className="order-md-0 large-right-border text-left text-md-right"
        >
          <span className="sm-underline-parent">
            <h3 className=" mb-0 sm-underline header-text">education</h3>
          </span>
        </Col>
        <Col
          xs="12"
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 0 }}
          className="order-md-1 d-flex flex-column justify-content-center"
        >
          <h5 className="text-left mb-0 sub-header-text">
            the ohio state university
          </h5>
          <p className="text-left mb-0">
            <i>B.S. in Business Administration</i> | Accounting
          </p>
          <p className="text-left mb-2">
            Honors Cohort Program: 1 of 30 out of over 1000 business students
            selected to participate in a rigorous academic program that focused
            on leadership skills, team building, real-world experience, and
            service-learning opportunities
          </p>
          <h5 className="text-left mb-0 sub-header-text">fullstack academy</h5>
          <p className="text-left mb-0">
            <i>Software Engineering</i>
          </p>
          <p className="text-left mb-0">
            Intensive software development program focusing on JavaScript,
            NodeJS, React, Express, Sequelize and related libraries. Created
            several fullstack web applications.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);
