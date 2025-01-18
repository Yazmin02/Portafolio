import React, { useEffect } from "react";
import myImage from './img/image.png'; // Cambia esta ruta por la ubicación de tu imagen

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="container my-5">
      <article className="card shadow-lg animate-on-scroll" style={{ backgroundColor: '#ffffff' }}>
        <div className="row g-0">
          <div className="col-12 col-md-4">
            <img
              src={myImage} 
              alt="Yazmín Berenice"
              className="img-fluid rounded-start"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-12 col-md-8">
            <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
              <h1 className="card-title mb-3 text-pink animate-on-scroll">YAZMÍN BERENICE GONZÁLEZ MENESES</h1>
              <p className="card-text text-dark">
                Soy Ingeniera en Sistemas Computacionales, con una fuerte inclinación
                hacia el desarrollo de software y la creación de soluciones tecnológicas
                innovadoras. Mi enfoque principal es el desarrollo de aplicaciones Android,
                aunque también me apasionan los proyectos que involucran análisis de datos y
                algoritmos complejos, como la optimización de rutas o la integración de sistemas
                de IoT. Me considero una persona creativa, responsable y organizada, siempre
                en busca de aprender y enfrentar nuevos desafíos que me permitan seguir creciendo
                tanto a nivel técnico como personal.
              </p>
              <h3 className="text-pink">Habilidades</h3>
              <div className="row">
                <div className="col-6 col-md-4 mb-3">
                  <div className="card text-center bg-pink-light hover-pink">
                    <div className="card-body">
                      <h5 className="card-title text-dark">Python</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="card text-center bg-pink-medium hover-pink">
                    <div className="card-body">
                      <h5 className="card-title text-dark">Android</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="card text-center bg-pink-dark hover-pink">
                    <div className="card-body">
                      <h5 className="card-title text-dark">React</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="card text-center bg-pink-light hover-pink">
                    <div className="card-body">
                      <h5 className="card-title text-dark">Java</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4 mb-3">
                  <div className="card text-center bg-pink-medium hover-pink">
                    <div className="card-body">
                      <h5 className="card-title text-dark">JavaScript</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
