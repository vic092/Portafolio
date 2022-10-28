import { skills, projects } from "../profile";
import { Link } from "react-router-dom";

import perfil from "../assets/Foto.jpeg";
import Logo from "../assets/Logo.png";
import Tarjeta from "../components/Tarjeta";
import Footer from "../components/Footer";

export default function Body() {
  return (
    <>
      {/* Barra de navegacion */}

      <nav
        className="navbar navbar-expand navbar-dark text-light m-3 fondo1 menu 
       rounded-4"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" style={{ width: "60px" }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ cursor: "pointer" }}>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre mi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" >
                  Conociminetos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/GitHub">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Boton del mennu plegable */}
     
      <main className="container">
        {/* Recepcion */}

        <div className="row justify-content-end">
          <div className="col-md-2">
            <button className="btn  fondo5">
              <a
                href="https://drive.google.com/file/d/1r_OrkAgnhrRoe_q0qt_XA10Cg2XNIZ0B/view?usp=sharing"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Resumen
              </a>
            </button>
          </div>
        </div>

        <header className="row mt-4 fondo1 rounded-3 animacion1">
          <div className="col-md-12 p-5 text-light">
            <p className="text-muted">Me presento, soy</p>
            <h1>Víctor Uriel Rodríguez García</h1>
            <h3 className="text-muted">Developer en ruta</h3>
            <p className="p-3">
              Ingeniero en Tecnologías de la información interesado en
              seguir aprendiendo y ejercer mi profesión dentro del mundo de la
              programación, quiero aprender más sobre las tecnologías en
              tendecia sobre desarrollo de software y adquirir expriencia como
              desarrollador.
            </p>
          </div>
        </header>

        <hr className="mt-5 hr-text" data-content="Sobre mi" id="about" />
        {/* Apartado sobre mi */}
        <section className="row fondo1 mt-5 text-light rounded-3 animacion1">
          <div className="col-md-4 p-4 ">
            <div className="d-flex h-100 img_filtro">
              {/* <div className="box"></div> */}
              <img
                src={perfil}
                alt="No hay imagen"
                className="img-fluid rounded-5"
              />
            </div>
          </div>
          <div className="col-md-8 p-5">
            <h3>Un poco mas sobre mi</h3>
            <h6 className="text-muted">
              <i>Ing. Tecnologías de la Información</i>
            </h6>
            <p>
              Soy egresado de la carrera en Tecnologías de la Información en la
              Universidad Politécnica Metropolitana de Hidalgo, realice una
              tesis en la que aborde temas de inteligencia artificial y visión
              artificial enfocándolas a la detección de posibles posturas
              agresivas.
            </p>
            <p>
              No tengo experiencia laboral fuera de los procesos de estancias y
              estadías que curse durante mi formación, actualmente me interesa
              mucho expandir mi conocimiento en tecnologías enfocadas al
              desarrollo web o de software y al manejo y procesamiento de datos.
              Me gusta pensar, me gusta descomponer el problema y buscar
              soluciones mediante la programación, me es agradable el
              sentimiento de estar enfocado en la situación que esta profesión
              genera.
            </p>
          </div>
        </section>

        <hr className="mt-5 hr-text" data-content="Conocimientos" id="skills" />
        {/* Skills Vista previa */}
        <section className="row mt-5 fondo3 p-4 rounded-3 animacion1">
          {skills.map((sk, i) => (
            <div className="col-md-3 mt-3 mb-3 animacion3" key={i}>
              <div
                className={
                  sk.level === "Intermedio - Avanzado"
                    ? "text-center text-light p-2 bg-danger rounded-2"
                    : sk.level === "Intermedio"
                    ? "text-center text-light p-2 bg-primary rounded-2"
                    : sk.level === "Básico"
                    ? "text-center text-light p-2 bg-success rounded-2"
                    : "text-center text-light p-2 fondo4 rounded-2"
                }
              >
                <h5>{`${sk.skill} - ${sk.level}`}</h5>
              </div>
            </div>
          ))}
        </section>

        {/* Skills por barra de progreso */}
        {/* <section className="row mt-5">
          <div className="row py-2">
            <div className="col-md-12">
              <div className="card fondo1 text-light animacion1">
                <div className="card-body">
                  <h1>Skills</h1>
                  {skills.map((skill, i) => (
                    <div key={i} className="py-3">
                      <h5>{skill.skill}</h5>
                      <div className="progress">
                        <div
                          className={
                            skill.level === "Avanzado"
                              ? "progress-bar bg-danger"
                              : skill.level === "Intermedio"
                              ? "progress-bar bg-primary"
                              : skill.level === "Básico"
                              ? "progress-bar bg-success"
                              : "progress-bar bg-danger"
                          }
                          role="progressbar"
                          style={{ width: `${skill.percentaje}%` }}
                        ></div>
                      </div>
                      <h6 className="d-block derecha">{skill.percentaje}%</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <hr className="mt-5 hr-text" data-content="Proyectos" id="projects" />
        {/* Sección de proyectos  */}
        <section className="row mt-5 text-light">
          <div className="col-md-12">
            <div className="row">
              {projects.map((pro, i) => (
                <Tarjeta pro={pro} key={i}></Tarjeta>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
