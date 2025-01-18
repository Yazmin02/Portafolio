import React, { useEffect } from "react";

const Projects = () => {
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

  const projects = [
    {
      title: "Aplicación de Monitoreo IoT",
      description: "Desarrollé una aplicación nativa para Android para monitorear IoT en un sistema de gestión de residuos, usando Kotlin y la arquitectura MVVM.",
      repo: "https://github.com/Yazmin02/IOTapp",
      color: "#f8d7da", // color de la tarjeta (rosado claro)
    },
    {
      title: "Optimización del algoritmo PSO",
      description: "Desarrollé un algoritmo de Optimización por Enjambre de Partículas (PSO) en Python para optimizar rutas logísticas con restricciones del método Deb.",
      repo: "https://github.com/Yazmin02/PSO",
      color: "#f5c6cb", // otro tono de rosado
    },
    {
      title: "Gestión de Recetas",
      description: "Aplicación web para administrar recetas, creada con React y Node.js.",
      repo: "https://github.com/Yazmin02/gestionrecetascliente",
      color: "#f1b0b7", // rosado intermedio
    },
  ];

  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center text-pink mb-4" style={{ color: '#e83e8c' }}>PROYECTOS</h2>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4 animate-on-scroll">
            <div className="card shadow-lg" style={{ backgroundColor: project.color }}>
              <div className="card-body">
                <h3 className="card-title text-center text-pink">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-pink w-100"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
