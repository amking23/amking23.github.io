import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { useMediaQuery } from "react-responsive";
import { HamburgerCollapse } from "react-animated-burgers";
import amk from "../Assets/amk.png";
import $ from "jquery";

export default () => {
  const [menuActive, setMenuActive] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState("d-none");
  const [isOpen, setIsOpen] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(true);
  const [resumeVisible, setResumeVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [underlineDisabled, setUnderlineDisabled] = useState(false);

  useEffect(() => {
    $(document).click(function (event) {
      let clickover = $(event.target);
      let $navbar = $(".navbar-collapse");
      let opened = $navbar.hasClass("show");
      if (opened === true && !clickover.hasClass("navbar-toggle")) {
        toggleActive();
      }
    });
  });

  const toggleActive = () => {
    setMenuActive(!menuActive);
    setIsOpen(!isOpen);
    menuDisplay === "d-none"
      ? setMenuDisplay("d-flex")
      : setMenuDisplay("d-none");
  };

  const isMobileMenu = useMediaQuery({ query: "(max-width: 767px)" });

  const handleClickLink = (id) => {
    isMobileMenu && toggleActive();
    scrollTo(id);
  };

  const updateVisible = (id, setter) => {
    let topOfElement = $(id).offset().top;
    let bottomOfElement = $(id).offset().top + $(id).outerHeight();
    let topOfScreen = $(window).scrollTop();
    let bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
    let sizeOfScreen = bottomOfScreen - topOfScreen;

    if (
      bottomOfScreen > topOfElement + 0.5 * sizeOfScreen &&
      topOfScreen < bottomOfElement - 0.5 * sizeOfScreen
    ) {
      setter(true);
    } else {
      setter(false);
    }
  };

  const disableUnderlineWhileScrolling = () => {
    setUnderlineDisabled(true);
    setTimeout(() => {
      setUnderlineDisabled(false);
    }, 700);
  };

  const scrollTo = (id) => {
    if (id) {
      disableUnderlineWhileScrolling();
      $("html, body").animate(
        {
          scrollTop: $(id).offset().top,
        },
        700
      );
    }
  };

  useEffect(() => {
    $(window).scroll(function () {
      updateVisible("#about", setAboutVisible);
      updateVisible("#resume", setResumeVisible);
      updateVisible("#projects", setProjectsVisible);
      updateVisible("#skills", setSkillsVisible);
    });
  });

  return (
    <div>
      <Navbar
        fixed="top"
        light
        expand="md"
        style={{
          backgroundColor: "#4682b4",
        }}
      >
        <NavbarBrand
          className="amk-logo p-0"
          onClick={() => scrollTo("#about")}
        >
          <img src={amk} style={{ width: "14vw", maxWidth: "55px" }} />
        </NavbarBrand>
        <HamburgerCollapse
          isActive={menuActive}
          toggleButton={toggleActive}
          buttonStyle={{
            outline: "none",
            backgroundColor: "transparent",
            padding: "0px",
            display: "flex",
          }}
          className="d-md-none hamburger"
          buttonColor="#FFBC67"
          barColor="white"
          buttonWidth={36}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button
                onClick={() => handleClickLink("#about")}
                className="navlink"
              >
                <h3
                  className={`mb-0 header-text underline-animation ${
                    aboutVisible && !underlineDisabled && "active-nav-link"
                  }`}
                >
                  about
                </h3>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                onClick={() => handleClickLink("#resume")}
                className="navlink"
              >
                <h3
                  className={`mb-0 header-text underline-animation ${
                    resumeVisible && !underlineDisabled && "active-nav-link"
                  }`}
                >
                  resume
                </h3>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                onClick={() => handleClickLink("#projects")}
                className="navlink"
              >
                <h3
                  className={`mb-0 header-text underline-animation ${
                    projectsVisible && !underlineDisabled && "active-nav-link"
                  }`}
                >
                  projects
                </h3>
              </Button>
            </NavItem>
            <NavItem>
              <Button
                onClick={() => handleClickLink("#skills")}
                className="navlink"
              >
                <h3
                  className={`mb-0 header-text underline-animation ${
                    skillsVisible && !underlineDisabled && "active-nav-link"
                  }`}
                >
                  skills
                </h3>
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
