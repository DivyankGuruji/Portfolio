import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Practice-Karlo",
      description: "Web Development",
      projectUrl: "https://practice-karlo.netlify.app/",
      imgUrl: projImg1,
    },
    {
      title: "DivKart",
      description: "Design & Development",
      projectUrl: "https://cerulean-gnome-f3995d.netlify.app/",
      imgUrl: projImg2,
    },
    {
      title: "Dashboard-pro",
      description: "Design & Development",
      projectUrl: "https://dashboar-pro.netlify.app/",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A showcase of my expertise in Front-End Development. These projects demonstrate my ability to build seamless, interactive web applications using modern frameworks and technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Internet of Things</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Drones</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="section">
                      <p>Web Development Projects</p>
                    </Tab.Pane> */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            <div>
                              <div className="sec-heading"><span>M</span>anhole Monitoring and Detection Through IoT</div>
                              <div className="sec-description">
                                <ul>
                                  <li>This project involves designing a system that monitor manholes using different sensors to detect parameters like water level, gas presence, and cover displacement.</li>
                                  <li>The system utilized real-time data transmission to alert authorities, aiming to prevent accidents and ensure public safety.</li>
                                  <li>This experience enhanced my skills in IoT hardware integration, data handling, and problem-solving for real-world applications.</li>
                                </ul>
                              </div>
                            </div>
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div>
                              <div className="sec-heading"><span>R</span>C Fixed-Wing Drone</div>
                              <div className="sec-description">
                                <ul>
                                  <li>During a technical event organized by IEEE at Madan Mohan Malaviya University of Technology (MMMUT), I successfully designed and built a RC Fixed-Wing Drone. This project was an exciting hands-on experience in the field of aerodynamics, electronics, and remote control systems.</li>
                                  <li>The drone was constructed using lightweight materials to ensure efficient flight and stability.</li>
                                  <li>I carefully calculated wing dimensions, center of gravity, and thrust-to-weight ratio to ensure optimal performance.</li>
                                  <li>A remote-controlled transmitter and receiver module was used to achieve real-time control of the drone.</li>
                                </ul>
                              </div>
                            </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
