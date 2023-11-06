import React from 'react';
import './styles.css';

const Portfolio = () => {
  return (
    <div>
      <header>
        <h1>Chaitanya varma</h1>    
        <p>Full Stack Developer</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
        I'm Chaitanya Varma, a passionate full-stack developer with a strong background in web development. I love creating efficient and user-friendly web applications that solve real-world problems. With a focus on both front-end and back-end technologies, I'm dedicated to delivering high-quality solutions.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>
          Description: A brief description of the project's purpose and features.
Technologies Used: List the programming languages, frameworks, and tools you used.
Screenshots/Demo: Add images or a live demo to showcase the project.
          </p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>
          Description: A brief description of the project's purpose and features.
Technologies Used: List the programming languages, frameworks, and tools you used.
Screenshots/Demo: Add images or a live demo to showcase the project.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;