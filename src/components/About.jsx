import React from "react";
import screenSize from "../hooks/useScreenSize";

function About() {
  let size = screenSize();
  const responsive = function () {
    if (size.width < 376) {
      return (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }
  };
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Sobre mí
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-letf text-4xl font-bold">
            <p>
              Hola, soy Joaquín. <br /> Es un placer que esté visitando mi web
              personal. <br /> Siéntase libre de explorarla cuanto desee.
            </p>
          </div>
          <div>
            <p>
              Soy desarollador web con experiencia trabajando tanto en el
              frontend, como en el backend. Me especializo en crear aplicaciones
              robustas y puedo trabajar tanto en el código del lado del cliente
              como el del servidor. Tengo experiencia creando aplicaciones web
              con JavaScript, React, NodeJs, Express, SQL, MongoDB. <br /> Si
              estás buscando un desarrollador, apasionado, enérgico, con
              pensamiento crítico, proactivo, en constante capacitación, con
              atención al detalle y con muchas ganas de trabajar en lo que le
              apasiona, no dudes en ponerte en contacto conmigo.
            </p>
            {responsive()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
