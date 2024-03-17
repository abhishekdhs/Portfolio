import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import djangoRealEstate from "../../Assets/Projects/django-real-estate.png";
import amazon from "../../Assets/Projects/amazon.png";
import djangoProfileApi from "../../Assets/Projects/django-profile-api.png";
import cicd from "../../Assets/Projects/cicd2.png";
import route53 from "../../Assets/Projects/route53.png";
import terraform from "../../Assets/Projects/terraform.png";

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
              title="Complete CI/CD Pipeline"
              description="Complete pipeline using jenkins,Sonarqube, Trivy, OWSAP, Docker, AgroCD, Helm, Kubernetes etc. For more details checkout my medium stories and feel free to write any suggestions or errors."
              demoLink="https://medium.com/@patel.abhishek7064/deploy-netflix-clone-ci-cd-on-aws-eks-devsecops-practices-b3707dfb4d8f"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={route53}
              title="Connecting an external domain to AWS Route53 + ACM"
              description="A Blog on how to join an external domain to aws using route 53 and how we can use ACM for secure connections."
              demoLink="https://medium.com/@patel.abhishek7064/route53-dns-subdomain-delegation-with-godaddy-aws-cert-manager-0a0d1e11fd8b"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={terraform}
              title="Terraform 3 tier Architecture"
              description="A small Project that shows how can we write terraform code to build a 3 tier architecture using existing aws terraform modules."
              ghLink="https://github.com/abhishekdhs/Terraform-AWS-VPC-3-Tier-Architecture"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoRealEstate}
              title="Django Real estate"
              description="A project with python django used templating to create a admin panned and a website to search for the real estate properties with login features."
              ghLink="https://github.com/abhishekdhs/Real_Estate-Python-Django"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              title="Amazon react Clone"
              description="CLone of amazon home page using react js with well structured componenets and reusable code."
              ghLink="https://github.com/abhishekdhs/amazon-clone-django-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoProfileApi}
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
