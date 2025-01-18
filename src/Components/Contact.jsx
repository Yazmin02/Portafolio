import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="container my-5">
      <h2 className="text-center text-pink mb-4">CONTACTO</h2>
      <div className="card shadow-lg rounded-4 bg-black text-white animate__animated animate__fadeInUp">
        <div className="card-body text-center">
          <p className="text-white">
            Si deseas ponerte en contacto conmigo, puedes enviarme un correo a:
          </p>
          <a
            href="mailto:yazmingonzalezmeneses@outlook.com"
            className="btn btn-outline-pink d-flex align-items-center justify-content-center mb-3"
            style={{ color: '#fff' }}  // Cambié el color para el correo
          >
            <FaEnvelope className="me-2" />
            yazmingonzalezmeneses@outlook.com
          </a>
          <div className="d-flex justify-content-center">
            <a
              href="https://github.com/Yazmin02"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-pink d-flex align-items-center justify-content-center mx-2 hover-pink"
              style={{ color: '#fff' }}  // Cambié el color para GitHub
            >
              <FaGithub className="me-2" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yazmin-berenice-gonzalez-meneses/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-pink d-flex align-items-center justify-content-center mx-2 hover-pink"
              style={{ color: '#fff' }}  // Cambié el color para LinkedIn
            >
              <FaLinkedin className="me-2" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
