import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImage from "../assets/img/my image-skills.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} xs ={7}>
            <div className="myimage">
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={myImage}
                    alt="person-img"
                  />
                )}
              </TrackVisibility>
            </div>
          </Col>
          <Col size={12} md={6}xs={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Experience</h2>
                  <h3>Web Development</h3>
                  <p>
                    I have 6 months of experience working with the MERN stack,
                    developing responsive and dynamic web applications. My
                    expertise includes creating robust back-end services using
                    Node.js, Express, and MongoDB, and building intuitive
                    front-end interfaces with React.
                  </p>

                  <h3>UI/UX Design</h3>
                  <p>
                    With a strong foundation in graphic design, I transitioned
                    into UI/UX design, where I focus on creating user-friendly
                    interfaces. I have a keen eye for aesthetics and usability,
                    ensuring that the designs not only look good but are also
                    easy to navigate. My approach is always centered around the
                    user, striving to enhance their interaction with the
                    product.
                  </p>

                  <h3>Graphic Design</h3>
                  <p>
                    Over the past two years, I have honed my skills in graphic
                    design, working on a variety of projects ranging from
                    branding to digital media. My experience includes creating
                    logos, marketing materials, and digital assets that
                    communicate the brand’s message effectively. I am proficient
                    in using tools like Adobe Photoshop, Illustrator, and
                    InDesign to bring ideas to life.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
