import Pro7 from './assets/Pro7.png'
import Pro6 from './assets/Pro6.png'
import Pro5 from './assets/Pro5.png'
import Pro4 from './assets/Pro4.png'
import Pro3 from './assets/Pro3.png'
import Pro2 from './assets/Pro2.png'
import Pro1 from './assets/Pro1.png'

export const skills = [
  {
    skill: "HTML",
    level: "Intermedio - Avanzado",
    percentaje: 75,
  },
  {
    skill: "JavaScript",
    level: "Intermedio",
    percentaje: 60,
  },
  {
    skill: "Python",
    level: "Intermedio",
    percentaje: 60,
  },
  {
    skill: "Java",
    level: "Intermedio",
    percentaje: 60,
  },
  {
    skill: "CSS",
    level: "Intermedio",
    percentaje: 60,
  },
  {
    skill: "React",
    level: "Intermedio",
    percentaje: 40,
  },
  {
    skill: "MySQL",
    level: "Intermedio",
    percentaje: 60,
  },
  {
    skill: "NodeJs",
    level: "Básico",
    percentaje: 15,
  },
  {
    skill: "Django",
    level: "Básico",
    percentaje: 15,
  },
  {
    skill: "MongoDB",
    level: "Básico",
    percentaje: 15,
  },
  {
    skill: "Git",
    level: "Básico",
    percentaje: 25,
  }
  ,
];

export const projects = [
  {
    name: "Buscador de Nombres",
    description:
      "Practica aplicación web creada usando la librería de React, por medio de una API pública se obtienen los nombres e implementando un buscador se llaman y muestran a los nombres coincidentes con lo solicitado.",
    tools: ["React", "Vite", "Bootstrap"],
    imag: Pro3,
    url:"https://vic092.github.io/reactPalabras/"
  },
  {
    name: "Aplicación de tareas",
    description:
      "CRUD sencillo de tareas, permite agregar nuevas tareas que aparecerán mostradas en pantalla al instante, así también permite eliminarlas y mostrar los cambios.",
    tools: ["React", "React-Context", "Vite", "Tailwind", "JavaScript"],
    imag: Pro1,
    url:"https://vic092.github.io/react-deploy-example/"
  },
  {
    name: "Buscador de personajes de comics",
    description:
      "Práctica de aplicación web creada por medio de React, consume la API pública de Marvel la cual contiene información sobre personajes que provenientes de los comics hechos por la empresa, la aplicación web permite la búsqueda de hasta 100 personajes.",
    tools: ["React", "Vite", "Bootstrap", "Axios"],
    imag: Pro4,
    url:"https://vic092.github.io/reactMarvel/"
  },
  {
    name: "Aplicación de imágenes de la NASA",
    description:
      "Práctica aplicación web creada con el propósito de consumir la API pública proporcionada por la NASA par mostrar imágenes fotográficas tomadas por telescopios o por cámaras instaladas en robots que se ubican marte, una parte de la página muestra imágenes tomadas en marte y otra parte muestra imágenes por día del cosmos en general.",
    tools: ["React", "Vite", "React-Router", "Bootstrap"],
    imag: Pro5,
    url:"#"
  },
  {
    name: "Rick And Morty API",
    description:
      "Práctica de aplicación web sencilla que mediante el uso de una API muestra a los personajes e información de la famosa serie animada Rick and Morty con paginación incluida, mostrando un total de 20 personajes por página.",
    tools: ["React", 'Vite',"Bootstrap"],
    imag: Pro2,
    url:"https://vic092.github.io/ReactRickandMorty/"
  },
  {
    name: "Crypto Monedas",
    description:
      "Aplicación web de práctica, consume una API que otorga información sobre el estado financiero actual en el precio de algunas de las cripto monedas existentes y de mayor conocimiento actualmente.",
    tools: ["React", "Vite", "Axios", "Bootstrap"],
    imag: Pro6,
    url:"https://vic092.github.io/reactCrypto/"
  },
  {
    name: "Sistema de detección de agresiones",
    description:
      "Sistema integrado por tecnologías desarrolladas en el campo de la visión e inteligencia artificial con el propósito de monitorear y diferenciar cuando una persona actual de manera agresiva o no pasiva.",
    tools: ["Python", "Keras", "MediaPipe", "Pandas", "Numpy"],
    imag: Pro7,
    url:'#'
  },
];
