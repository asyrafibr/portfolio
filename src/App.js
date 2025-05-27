import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Image, Nav, Tab } from "react-bootstrap";
import profileImg from "./assets/profile.png"; // Place your image file here

const App = () => {
  const [key, setKey] = useState("summary");

  return (
    <Container className="my-5 px-3">
      <Row className="mb-4 align-items-center">
        <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
          <Image src={profileImg} roundedCircle width="160" height="160" className="shadow" />
        </Col>
        <Col xs={12} md={8} className="text-center text-md-start">
          <h1 className="fw-bold">Muhammad Asyraf Bin Ibrahim</h1>
          <h4 className="text-primary">Front-End Developer</h4>
          <p className="text-muted mb-0">Segambut, Kuala Lumpur</p>
          <p className="text-muted mb-0">muhdasyrafibr@gmail.com | +6013-2936420</p>
        </Col>
      </Row>

      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="tabs" className="mb-4 justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="summary">Summary</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="experience">Work Experience</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="parttime">Part-Time</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="education">Education</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="skills">Technical Skills</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="summary">
            <Section title="Professional Summary">
              <p className="lead">
                Results-driven Front-End Developer with 5+ years of experience in web and mobile
                development using React.js and React Native. Skilled in building responsive interfaces,
                integrating APIs, and collaborating in Agile environments.
              </p>
            </Section>
          </Tab.Pane>

          <Tab.Pane eventKey="experience">
            <Section title="Work Experience">
              <Experience
                company="HTC Global Services"
                period="Aug 2024 – Present"
                role="Front-End Developer (Web & Mobile)"
                responsibilities={[
                  "Developed dynamic web apps for CIMB Backoffice",
                  "Built cross-platform mobile apps for CIMB Octo",
                  "Implemented Redux for state management",
                  "Led API integrations and responsive UI design",
                  "Streamlined Agile workflows using JIRA and GitLab CI/CD"
                ]}
              />
              <Experience
                company="Total Neutron Solution SDN BHD"
                period="Jan 2023 – Jul 2024"
                role="Front-End Developer (Web)"
                responsibilities={[
                  "Maintained Petronas web applications",
                  "Tested APIs using Postman & Swagger",
                  "Improved data handling and team collaboration"
                ]}
              />
              <Experience
                company="CyberSolution Technologies SDN BHD"
                period="Nov 2020 – Nov 2022"
                role="Front-End Developer (Web)"
                responsibilities={[
                  "Developed web apps for MBJB with React.js",
                  "Integrated REST APIs and responsive UIs",
                  "Established CI/CD workflows"
                ]}
              />
              <Experience
                company="Collabera"
                period="Sep 2019 – Sep 2020"
                role="Front-End Mobile Developer"
                responsibilities={[
                  "Built and maintained Unifi mobile apps",
                  "Improved state management with React Hooks",
                  "Tested APIs and supported SIT & UAT phases"
                ]}
              />
            </Section>
          </Tab.Pane>

          <Tab.Pane eventKey="parttime">
            <Section title="Part-Time Projects">
              <Experience
                company="Taskaway"
                role="Frontend Mobile Developer"
                responsibilities={[
                  "Developed a cross-platform task app",
                  "Built responsive layouts with React Native",
                  "Integrated REST API for tasks and notifications"
                ]}
              />
              <Experience
                company="Nasken Coffee"
                role="Frontend Mobile Developer"
                responsibilities={[
                  "Built ordering app with real-time tracking",
                  "Styled UI with CSS and integrated APIs",
                  "Improved performance and app smoothness"
                ]}
              />
            </Section>
          </Tab.Pane>

          <Tab.Pane eventKey="education">
            <Section title="Education">
              <p className="mb-0">International Islamic University Malaysia (IIUM)</p>
              <small>Bachelor of Information Technology (2013–2018) | CGPA: 2.5</small>
            </Section>
          </Tab.Pane>

          <Tab.Pane eventKey="skills">
            <Section title="Technical Skills">
              <ul className="list-unstyled">
                <li><strong>Frontend:</strong> React.js, React Native, JavaScript, HTML, CSS, Next.js, Tailwind CSS, Bootstrap, Ant Design</li>
                <li><strong>Backend & APIs:</strong> Node.js, Express.js, SQL, Axios</li>
                <li><strong>Tools:</strong> Git, GitHub, GitLab, Postman, Swagger</li>
                <li><strong>Other:</strong> Agile, UI/UX, API Integration, CI/CD</li>
              </ul>
            </Section>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-5">
    <h3 className="mb-3 border-bottom pb-2 text-primary">{title}</h3>
    {children}
  </section>
);

const Experience = ({ company, role, period, responsibilities }) => (
  <Card className="mb-4 shadow-sm border-0">
    <Card.Body>
      <Card.Title className="text-dark fw-bold">{company}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {role} {period && `| ${period}`}
      </Card.Subtitle>
      <ul className="mb-0">
        {responsibilities.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </Card.Body>
  </Card>
);

export default App;