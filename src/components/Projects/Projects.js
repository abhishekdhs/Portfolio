import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import djangoRealEstate from "../../Assets/Projects/django-real-estate.png";
import amazon from "../../Assets/Projects/amazon.png";
import djangoProfileApi from "../../Assets/Projects/django-profile-api.png";
import cicd from "../../Assets/Projects/cicd.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cicd}
              isBlog={false}
              title="Complete CI/CD Pipeline"
              description="Complete pipeline using jenkins,Sonarqube, Trivy, OWSAP, Docker, AgroCD, Helm, Kubernetes etc"
              ghLink="https://medium.com/@patel.abhishek7064/deploy-netflix-clone-ci-cd-on-aws-eks-devsecops-practices-b3707dfb4d8f"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoRealEstate}
              isBlog={false}
              title="Django Real estate"
              description="A project with python django used templating to create a admin panned and a website to search for the real estate properties with login features."
              ghLink="https://github.com/abhishekdhs/Real_Estate-Python-Django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon react Clone"
              description="CLone of amazon home page using react js with well structured componenets and reusable code."
              demoLink="https://github.com/abhishekdhs/amazon-clone-django-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoProfileApi}
              isBlog={false}
              title="Django Custom Profile Api"
              description="A custom profile API built for django that can be used to customize the login methods with email and passwords and much more."
              ghLink="https://github.com/abhishekdhs/profiles-rest-api"            
            />
          </Col>

        {/*   <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink=""
              demoLink=""
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
