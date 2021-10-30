import React from "react";
import "../scss/about.scss";
import mia from "../assets/img/mia.jpg";

export default function About() {
  return (
    <section id="about">
      <div className="row aboutMe">
        <div className="col-4 ">
          <img src={mia} className="circular--square" alt="img" />
        </div>
        <div className="col-8">
          <h2>About Me</h2>
          <h3>UI/UX Designer &amp; Web Developer.</h3>
          <p>
            Hello! my name is Lamiaa, you can call me MIA. I am a passionate
            Creative Visual Designer. Design is my passion and Art is my soul.
            My journey in Learning never ends, Design is not only my career and
            hobby; It’s my way of seeing the world differently by experimenting
            all aspects of design, I like creating simple and clean designs that
            solve problems.
          </p>
          <div className="row ">
            <div className="col-6">
              <ul>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Website:</strong> lamiaamoustafa.com
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Phone:</strong> +123 456 7890
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>City:</strong> Fishers, IN
                </li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Degree:</strong> Bachelor
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Email:</strong> gd.lamiaa@gmail.com
                </li>
                <li>
                  <i className="icofont-rounded-right"></i>{" "}
                  <strong>Freelance:</strong> Available
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h5>Download resume</h5>
      </div>
    </section>
  );
}
