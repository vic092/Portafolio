import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../components/Loader'


export default function Github() {
  // Declaración de las variables de estado y loading

  const [datos, setDatos] = useState("");
  const [loading, setLoading] = useState(true)
  const [statusCode, setStatusCode] = useState(true);

  // Obtencion de los datos por parte de gitHub
  const getData = async () => {
    const res = await fetch("https://api.github.com/users/vic092");
    const data = await res.json();

    // Comprobar el estado en de la request
    setStatusCode(res.status > 200 ? res.status : false)

    // console.log(res.status)
    setDatos(data);
    setLoading(false)
  };

  // Llamada de la funcion que solicita los datos
  useEffect(() => {
    getData();
  }, []);

//   if (statusCode) {
//     return <Error></Error>;
//   } else 
if (loading) {
    return <Loader></Loader>
  } else{
    return (
      // Muestra los datos de la pagina de GitHub en una tarjeta
      <>
        <div className="row" style={{ width: "100vw" }}>
          <div className="col-md-4 offset-md-4">
            <div className="card card-body text-center text-white fondo1">
              <h1>{datos.name}</h1>
              <img src={datos.avatar_url} alt="" className="rounded-5" />
              <p>{datos.bio}</p>
              <Link
                to="/"
                className="btn btn-outline-secondary my-2"
              >
                Mi Portafolio
              </Link>

              <a
                href={datos.html_url}
                target="_blank"
                className="btn btn-outline-secondary"
              >
                Mi Github
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
