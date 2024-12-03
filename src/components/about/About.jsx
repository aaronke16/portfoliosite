import React from 'react';
import "./about.css";
// import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';
import ResumeDoc from "../../assets/Aaron Essien Resume 11-24M.docx (4).pdf"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__cointainer grid">
        <img src={Image} alt="" className="about__img"/>
        <div className="about__data grid">
          <div className="about__info">
            <p className="about_description">
            👋🏾Hi, I’m Aaron Essien! I'm someone who is passionate about technology and community building.
            <br />
            <br />
            💻 As a Software Development Engineer in Test (SDET) Intern, I was able to imrpove my technical skills in Python by performing manual and automated tests using libraries such as Pytest and Playwright as well as learning to conduct API testing using Postman. My experience of developing and executing functional and regression tests to ensure the delivery of high-quality software products not only shows my enthusiasm towards learning new skills and technologies, but also reveals that I thrive in fast-paced environments and enjoy collaborating across teams to solve complex problems.
            <br />
            <br />
🎓 Currently pursuing my degree in Computer Science with a minor in Psychology and am active in multiple roles on campus and beyond. This journey has given me with hands-on experiences at organizations like NSBE and MLT, has equipped me with leadership and communication skills.
<br />
            <br />
🌟 Beyond tech, I’m driven by my commitment to empowering others, fostering community, and making a positive impact. Whether through leadership roles in NSBE or building platforms that enhance learning and collaboration, I’m always looking for ways to contribute meaningfully.
            </p>
            <div className="download__button">
              <a href={ResumeDoc} download="MyExampleDoc"  target="_blank" className="btn">Download Resume</a>
            </div>
          </div>


        </div>
      </div>
      {/* <AboutBox /> */}
    </section>
  )
}

export default About