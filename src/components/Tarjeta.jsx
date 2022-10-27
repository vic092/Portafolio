import React from "react";
export default function Tarjeta({ pro }) {
  return (
    <div className="col-md-4 mt-4">
      <div
        className="card h-100 p-2 fondo1 animacion2"
        style={{ border: "solid 1px #4f5164" }}
      >
        <div className="overflow">
          <img className="card-img-top" src={pro.imag} alt="Card image cap" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{pro.name}</h5>
          <p className="card-text">{pro.description}</p>
          <div className="row">
            {pro.tools.map((t, i) => (
              
              
              <div className="col-sm-6" key={i}>
                <div
                  className={
                    t === "JavaScript" || t === "Python"
                      ? "bg-warning m-1 p-1 text-center rounded-5"
                      : t === "Bootstrap" || t === "Pandas"
                      ? "bg-success m-1 p-1 text-center rounded-5"
                      : t === "Tailwind" || t === "Numpy"
                      ? "bg-info m-1 p-1 text-center rounded-5"
                      : t === "React" || t === "MediaPipe"
                      ? "bg-primary m-1 p-1 text-center rounded-5"
                      : t === "Vite"
                      ? "bg-light text-dark m-1 p-1 text-center rounded-5"
                      : t === "Axios" || t === "Keras"
                      ? "bg-danger m-1 p-1 text-center rounded-5"
                      : "bg-dark m-1 p-1 text-center rounded-5"
                    // "fondo5 m-1 p-1 text-center rounded-5"
                  }
                > 
                  {t}
                </div>
              </div>
              
            ))}
          </div>
            <a href={pro.url} className="btn btn-secondary mt-4 ">
              {
                pro.url === '#' ?
                <strike>Ver pagina</strike>:
                <>Ver pagina</>
              }
            </a>
        </div>
      </div>
    </div>
  );
}
