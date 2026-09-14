import React, { useState, useEffect } from "react";
import "./App.css";
import gourmet from "./Assets/Projects/calle-gourmet-desktop.webp";
import covid from "./Assets/Projects/covid.webp";
import clima from "./Assets/Projects/clima.webp";
const projects = [
  {
    name: "Calle Gourmet",
    type: "COMERCIO DIGITAL",
    image: gourmet,
    text: "Catálogo de productos, carrito y detalle del pedido. Una experiencia de compra sencilla para un negocio de comida rápida.",
    tags: ["React", "Material UI", "Firebase"],
    url: "https://calle-gourmet.vercel.app/",
  },
  {
    name: "Coronavirus Chile",
    type: "VISUALIZACIÓN DE DATOS",
    image: covid,
    text: "Proyecto de visualización de indicadores de la pandemia en Chile. Gráficos y tarjetas para explorar los datos de disease.sh.",
    tags: ["React", "Chart.js", "API REST"],
    url: "https://coronavirus-chile.vercel.app/",
  },
  {
    name: "Clima Información",
    type: "APLICACIÓN WEB",
    image: clima,
    text: "Consulta del tiempo por ubicación con OpenWeather. Animaciones Lottie que presentan las condiciones meteorológicas de forma visual.",
    tags: ["React", "OpenWeather", "Lottie"],
    url: "https://clima-flax.vercel.app/",
  },
];
const jobs = [
  [
    "Entel",
    "ENE 2023 — ACTUALIDAD",
    "Desarrollador de Software",
    "Desarrollo y mantención de integraciones de CRM corporativos. Automatización de carga masiva de clientes en CX Oracle y CPQ Oracle, colaborando en equipos Scrum.",
    "75% menos tiempo operativo",
  ],
  [
    "Enexum S.A.",
    "SEP — NOV 2022",
    "Desarrollador Web",
    "Diseño y desarrollo de un gestor web para la carga y administración de catálogos de productos. Optimización de flujos internos y reducción de errores manuales.",
    "60% menos tiempo · 40% menos errores",
  ],
  [
    "EPYS",
    "ENE — JUL 2022",
    "Soporte TI",
    "Soporte técnico y resolución de incidencias de infraestructura TI en EPYS Especialistas en Procesos SpA.",
    "Resolución de incidencias TI",
  ],
];
const skills = [
  ["Frontend", "React · React Native · HTML5 · CSS3 · Bootstrap · Material UI"],
  ["Backend", "Node.js · Flask · APIs RESTful · Microservicios"],
  ["Datos & cloud", "MySQL · PostgreSQL · MongoDB · AWS · Heroku"],
  ["Lenguajes & CRM", "JavaScript · Python · Java · CX Oracle · CPQ Oracle"],
];
const External = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);
function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") setMenu(false);
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, []);
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <header>
        <div className="nav-wrap">
          <a
            className="brand"
            href="#inicio"
            aria-label="Leandro Miranda, inicio"
          >
            lm<span>.</span>
            <small>LEANDRO MIRANDA</small>
          </a>
          <button
            className="menu"
            aria-expanded={menu}
            aria-controls="nav"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Cerrar ✕" : "Menú ☰"}
          </button>
          <nav
            id="nav"
            className={menu ? "open" : ""}
            aria-label="Navegación principal"
          >
            {[
              ["experiencia", "Experiencia"],
              ["proyectos", "Proyectos"],
              ["sobre-mi", "Sobre mí"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={"#" + id}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contacto"
              onClick={() => setMenu(false)}
            >
              Hablemos ↗
            </a>
          </nav>
        </div>
      </header>
      <main id="contenido">
        <section id="inicio" className="hero container">
          <div>
            <p className="eyebrow">
              <i /> DESARROLLADOR FULL-STACK · CHILE
            </p>
            <h1>
              Ideas claras.
              <br />
              Código que
              <br />
              <em>genera impacto.</em>
            </h1>
            <p className="intro">
              Soy <strong>Leandro Miranda</strong>, ingeniero civil en
              Computación. Conecto interfaces, datos y procesos para construir
              software que hace el trabajo más simple.
            </p>
            <div className="actions">
              <a className="button primary" href="#proyectos">
                Explorar proyectos ↓
              </a>
              <a
                className="button"
                href="/CV_Leandro_Miranda_2026.pdf"
                download
              >
                Descargar CV ↓
              </a>
            </div>
            <p className="hero-foot">
              JavaScript & Python <span /> Del frontend a la automatización
            </p>
          </div>
          <div
            className="art"
            role="img"
            aria-label="Interfaces conectadas con APIs, datos y automatización"
          >
            <div className="art-top">
              DE LA IDEA AL SISTEMA <span>01 / 03</span>
            </div>
            <div className="orbit one" />
            <div className="orbit two" />
            <div className="orbit three" />
            <div className="core">
              <b>&lt;/&gt;</b>
              <small>CONSTRUIR. CONECTAR.</small>
            </div>
            <div className="node a">
              ◈ <span>Interfaces</span>
            </div>
            <div className="node b">
              ⌘ <span>APIs & datos</span>
            </div>
            <div className="node c">
              ↗ <span>Automatización</span>
            </div>
            <div className="art-bottom">
              <i /> MENOS FRICCIÓN. MÁS POSIBILIDADES.
            </div>
          </div>
        </section>
        <div className="metrics container">
          <div>
            <strong>3+</strong>
            <span>
              Años de experiencia
              <br />
              en tecnología
            </span>
          </div>
          <div>
            <strong className="metric-years">
              2015<small>—</small>2022
            </strong>
            <span>
              Ingeniería Civil en Computación
              <br />
              Universidad de Talca
            </span>
          </div>
          <div>
            <strong className="metric-degree">LCI</strong>
            <span>
              Licenciado en Ciencias
              <br />
              de la Ingeniería
            </span>
          </div>
        </div>
        <section id="experiencia" className="section container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / TRAYECTORIA</p>
              <h2>
                Software con
                <br />
                <em>resultados reales.</em>
              </h2>
            </div>
            <p>
              De resolver incidencias a automatizar procesos.
              <br />
              Una trayectoria enfocada en mejorar cómo funcionan las cosas.
            </p>
          </div>
          {jobs.map(([company, date, role, text, impact], i) => (
            <article className="job" key={company}>
              <div className="company">
                <span className={i === 0 ? "dot current" : "dot"} />
                <h3>{company}</h3>
                <small>{date}</small>
              </div>
              <div>
                <h4>{role}</h4>
                <p>{text}</p>
                <span className="impact">↗ {impact}</span>
              </div>
              <span className="number">0{i + 1}</span>
            </article>
          ))}
        </section>
        <section id="proyectos" className="section project-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / PROYECTOS SELECCIONADOS</p>
                <h2>
                  De la idea
                  <br />
                  <em>a la pantalla.</em>
                </h2>
              </div>
              <External
                className="text-link"
                href="https://github.com/Brocoleo"
              >
                Explorar mi GitHub ↗
              </External>
            </div>
            <div className="projects">
              {projects.map((p, i) => (
                <article className="project" key={p.name}>
                  <div className={"project-image image-" + i}>
                    <img
                      src={p.image}
                      alt={"Interfaz de " + p.name}
                      loading="lazy"
                      decoding="async"
                      width="900"
                      height="560"
                    />
                    <small>0{i + 1}</small>
                  </div>
                  <div className="project-body">
                    <p className="eyebrow">{p.type}</p>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <ul className="tags" aria-label="Tecnologías">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <External className="project-link" href={p.url}>
                      Visitar proyecto <span>↗</span>
                    </External>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="sobre-mi" className="section container about">
          <div>
            <p className="eyebrow">03 / SOBRE MÍ</p>
            <h2>
              Curiosidad como
              <br />
              <em>punto de partida.</em>
            </h2>
            <p className="about-intro">
              Me interesa entender el problema, elegir las herramientas
              adecuadas y construir una solución que se pueda mantener y
              mejorar.
            </p>
            <p>
              Mi experiencia combina desarrollo web, consultoría tecnológica e
              integraciones para telecomunicaciones. Trabajo con ecosistemas
              JavaScript y Python, metodologías ágiles y aprendizaje continuo.
            </p>
            <div className="education">
              <span>↗</span>
              <div>
                <h3>Universidad de Talca</h3>
                <p>
                  Ingeniería Civil en Computación
                  <br />
                  Licenciatura en Ciencias de la Ingeniería
                </p>
                <small>2015 — 2022 · Inglés intermedio</small>
              </div>
            </div>
          </div>
          <div className="skills">
            {skills.map(([title, text], i) => (
              <div className="skill" key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contacto" className="contact">
          <div className="container">
            <p className="eyebrow">04 / SIGUIENTE PASO</p>
            <h2>
              Construyamos algo
              <br />
              que haga la diferencia.
            </h2>
            <p>
              Si tienes un proyecto o una oportunidad en mente, conversemos.
            </p>
            <a className="email" href="mailto:leomir2656@gmail.com">
              leomir2656@gmail.com ↗
            </a>
            <div className="contact-links">
              <External href="https://www.linkedin.com/in/leandro-miranda-1b83561ba/">
                LinkedIn ↗
              </External>
              <External href="https://github.com/Brocoleo">GitHub ↗</External>
              <a href="/CV_Leandro_Miranda_2026.pdf" download>
                Currículum PDF ↓
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container">
        <span>© {new Date().getFullYear()} Leandro Miranda Carvajal</span>
        <span>Hecho con intención. Desarrollado en React.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}
export default App;
