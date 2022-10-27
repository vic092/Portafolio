import React from "react";

export default function Footer() {
  return (
    <footer className="fondo1 text-light text-center mt-5">
      <div className="container p-4">
        <h1>&copy; Victor Rodriguez Portafolio</h1>
        <p>2000 - {new Date().getFullYear()}</p>
        <p>victorurg86@gmial.com o victrodgrc@gmail.com</p>
      </div>
    </footer>
  );
}
