import React from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollTo from "./ScrollTo";
import Link from "../Assets/Icons/Link";
import GithubLarge from "../Assets/Icons/GithubLarge";

export default () => (
  <div className="page" id="projects">
    <Container className="page-container">
      <Row className="mb-4">
        <Col
          xs="12"
          sm={{ size: 10, offset: 1 }}
          md={{ size: 3, offset: 0 }}
          className="order-md-2 large-left-border text-right text-md-left"
        >
          <span className="sm-underline-parent">
            <h3 className="mb-0 sm-underline header-text">projects</h3>
          </span>
        </Col>
        <Col
          xs="12"
          sm={{ size: 10, offset: 1 }}
          md={{ size: 8, offset: 1 }}
          className="order-md-1 d-flex flex-column justify-content-center"
        >
          <div className="text-right">
            <h5 className="mb-0 sub-header-text d-inline">
              <a
                href="https://memesforhumans.herokuapp.com"
                target="_blank"
                className="header-link"
              >
                memes against humanity
              </a>
            </h5>
            <a
              href="https://memesforhumans.herokuapp.com"
              target="_blank"
              className="d-inline-block"
            >
              <div
                style={{ width: "19px", marginLeft: "5px" }}
                className="headline-icon"
              >
                <Link />
              </div>
            </a>
            <a
              href="https://github.com/jakewski/mah"
              target="_blank"
              className="d-inline-block"
            >
              <div
                style={{ width: "19px", marginLeft: "5px" }}
                className="headline-icon"
              >
                <GithubLarge />
              </div>
            </a>
          </div>
          <p className="text-right mb-0">
            In-browser game allowing users to judge their peers' meme-making
            abilities real-time Challenges: Implementing a back-end redux store
            to keep track of the current game state for all users; utilizing
            WebSockets to update all players’ screens real-time Personal
            Contributions: Creating React components, implementing Express
            Sessions, overall design and CSS implementation, React form
            validation, real-time scoreboard and timer updates using web
            sockets.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);
