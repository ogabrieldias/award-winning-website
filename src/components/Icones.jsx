import React from "react";
import "../Contato.css"; // importa o CSS que você já criou

const Contato = () => {
  return (
    <div className="container_contato">
      <div className="contato-item">
        <a href="mailto:gabrieldiass707@gmail.com" aria-label="E-mail">
          <div className="icone" id="email">
            <i className="bx bx-envelope"></i>
          </div>
          <h3>E-mail</h3>
        </a>
      </div>

      <div className="contato-item">
        <a
          href="https://wa.me/5524998558044"
          aria-label="Whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icone" id="whatsapp">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <h3>Telefone</h3>
        </a>
      </div>

      <div className="contato-item">
        <a
          href="https://www.linkedin.com/in/ogabrieldias/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icone" id="linkedin">
            <i className="bx bxl-linkedin"></i>
          </div>
          <h3>Linkedin</h3>
        </a>
      </div>

      <div className="contato-item">
        <a
          href="https://github.com/ogabrieldias"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icone" id="github">
            <i className="bx bxl-github"></i>
          </div>
          <h3>Github</h3>
        </a>
      </div>

      <div className="contato-item">
        <a
          href="https://instagram.com/_ogabrieldias"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icone" id="instagram">
            <i className="bx bxl-instagram"></i>
          </div>
          <h3>Instagram</h3>
        </a>
      </div>
    </div>
  );
};

export default Contato;
