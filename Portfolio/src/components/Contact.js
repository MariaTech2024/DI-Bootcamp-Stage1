import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex flex-wrap items-start">
        {/* Container for Contact Form */}
        <div className="lg:w-1/2 md:w-full flex flex-col w-full md:py-8 mb-8 md:mb-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5 text-gray-400">
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
          </p>
          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:py-8">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-s text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-s text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-s text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg self-center">
              Submit
            </button>
          </form>
        </div>
       {/* Container for Address, Phone, Email, and Links */}
      
       <div className="lg:w-1/2 md:w-full flex flex-wrap w-full md:py-8 mt-24">
          <div className="rounded-lg overflow-hidden p-10 flex flex-col w-full">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/2 md:w-1/2 w-full p-4">
                <div className="mb-16">
                  <h2 className="title-font font-bold text-white tracking-widest text-s">
                    ADDRESS
                  </h2>
                  <p className="text-lg mt-1">
                    Haifa, Israel
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="title-font font-bold text-white tracking-widest text-s">
                    PHONE
                  </h2>
                  <p className="text-lg leading-relaxed">+972534323112</p>
                </div>
              </div>
              <div className="lg:w-1/2 md:w-1/2 w-full p-4">
                <div className="mb-16">
                  <h2 className="title-font font-bold text-white tracking-widest text-s">
                    EMAIL
                  </h2>
                  <p className="text-lg text-indigo-400 leading-relaxed">mariavolzhina@gmail.com</p>
                </div>
                <div>
                  <h2 className="title-font font-bold text-white tracking-widest text-s">
                    LINKS
                  </h2>
                  <a href="https://github.com/MariaTech2024/DI-Bootcamp-Stage1" className="text-lg text-indigo-400 leading-relaxed" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a><br/>
                  <a href="https://www.linkedin.com/in/mariia-volzhina-5143422b1/" className="text-lg text-indigo-400 leading-relaxed" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-gray-300 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} All rights reserved. This portfolio is made with &#9829; by me.</p>
      </footer>
    </section>

  );
}