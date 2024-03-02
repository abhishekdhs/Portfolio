import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Patel </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as a <span className="purple"> Cloud Devops Engineer</span> at <a href="https://www.nice.com/" class="purple" target="_blank">NICE</a>.
            <br />
            I have completed Bachelor of Technology in Computer Science and Engineering from <a href="https://kiit.ac.in/" class="purple" target="_blank">KIIT University</a>, Bhubaneswar.
            <br />
            <br />
            Apart from Tech, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gym and Bodybuilding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn something new today!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
