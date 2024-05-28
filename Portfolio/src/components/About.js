import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mariia.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
          Aspiring full-stack developer with a fresh perspective and a passion for building dynamic web applications. My skills include proficiency in modern front-end and back-end technologies such as Python, JavaScript, React.js, Node.js, and PostgreSQL. I'm enthusiastic about learning and open to tackling new challenges. What sets me apart is my creative approach to solving problems and my dedication to continuous growth.

I believe in collaboration and strive to bring a positive energy to every project I work on. Whether it's crafting user-friendly interfaces or developing efficient server-side logic, I enjoy every step of the process. If you're looking for a motivated, detail-oriented developer eager to contribute innovative ideas and learn from experienced professionals.
          </p>
          <div className="flex justify-center">
            <a
              href="/public/CV_2024.pdf" 
              download
              className="ml-4 inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
              Download CV
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg">
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}