import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">HAMILTON ALVAREZ </span>
            from <span className="purple"> Visalia, Canada.</span>
            <br />I'm a Full stack Web Developer with 6 years of experience so I am good at the both of Frontend and Backend Developments.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Running
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Fast Speed + Top Quality!"{" "}
          </p>
          <footer className="blockquote-footer">Hamilton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
