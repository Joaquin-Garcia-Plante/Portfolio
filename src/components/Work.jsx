import React from "react";

import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import Clima from "../assets/Clima.png";
import Defi from "../assets/Defi.png";
import Food from "../assets/Food.png";
import Todo from "../assets/Todo.png";
import Aventador from "../assets/Aventador.png";
import Travel from "../assets/Travel.png";

function Work() {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <br />
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Proyectos
          </p>
          <p className="py-6">Algunos de mis proyectos:</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Aventador})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-6">
              <span className="text-xl font-bold text-white tracking-wider pl-4">
                Ediciones Aventador
              </span>
              <p className="p-4 text-xs">
                Implementación de template para Ediciones Aventador. Se trata de
                una web organizacional para la editorial. <br></br> Tecnologías
                utilizadas: React, Node.js, Bootstrap.
              </p>
              <div className="text-center mb-9">
                <button
                  onClick={() => handleClick("https://aventador.com.ar/")}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Web
                </button>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Travel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-6">
              <span className="text-xl font-bold text-white tracking-wider pl-4">
                Travel App
              </span>
              <p className="p-4 text-xs">
                Desarrollo de un E-Commerce en el cual los usuarios pueden
                adquirir excursiones por medio de una aplicacion web full-stack.
                <br />
                Tecnologías implementadas: Tailwind - React - Redux - Node.js -
                Express -MongoDB - Mongoose -Stripe.
              </p>
              <div className="text-center mb-9">
                <button
                  onClick={() =>
                    handleClick("https://deploy-travelapp.herokuapp.com/")
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Web
                </button>
                <button
                  onClick={() =>
                    handleClick(
                      "https://github.com/gianbr/TravelApp-Group-Project"
                    )
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Código
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Food})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-10">
              <span className="text-xl font-bold text-white tracking-wider p-4">
                Food App
              </span>
              <p className="p-4 text-xs">
                Desarrollo de una Single Page Application, que consume datos de
                la API #spoonacularapi. <br /> La misma tiene funcionalidades
                tales como buscar, filtrar/ordenar recetas y crear tu propia
                receta.
                <br /> Tecnologías implementadas: React - Redux - Node.js -
                Express - PostgreSQL
              </p>
              <div className="text-center mb-9">
                <button
                  onClick={() =>
                    handleClick("https://pi-food-deploy.vercel.app")
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Web
                </button>
                <button
                  onClick={() =>
                    handleClick(
                      "https://github.com/Joaquin-Garcia-Plante/PI-Food"
                    )
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Código
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-10">
              <span className="text-xl font-bold text-white tracking-wider pl-4">
                To-Do App
              </span>
              <p className="p-4 text-xs">
                Desarrollo de una App que le permite a un usuario agregar tareas
                que se irán renderizando en tiempo real en pantalla. Una vez
                completada la misma se puede tachar o eliminar. Además pueden
                seleccionar distintos fondos para la aplicación. <br />
                Tecnologías empleadas: React.js - Node.js - CSS - Javascript
              </p>
              <div className="text-center mb-9">
                <button
                  onClick={() =>
                    handleClick("https://to-do-kappa-lilac.vercel.app/")
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Web
                </button>
                <button
                  onClick={() =>
                    handleClick("https://github.com/Joaquin-Garcia-Plante/ToDo")
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Código
                </button>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Clima})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-6">
              <span className="text-xl font-bold text-white tracking-wider pl-4">
                Weather App
              </span>
              <p className="p-4 text-xs">
                Desarrollo de una App que consume datos de la API #Weather API,
                utilizando React y CSS para darle estilos a todos sus
                componentes. La misma tiene funcionalidades tales como buscar
                ciudades de todo el mundo y ver los detalles del clima de cada
                una de ellas en tiempo real.
              </p>
              <div className="text-center mb-9">
                <button
                  onClick={() =>
                    handleClick("https://weather-app-taupe-phi.vercel.app/")
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Web
                </button>
                <button
                  onClick={() =>
                    handleClick(
                      "https://github.com/Joaquin-Garcia-Plante/Weather-App"
                    )
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Código
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Defi})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
                Aplicacion Frontend
              </span>
              <p className="p-4 text-xs">Desarrollada con React.js</p>
              <div className="pt-8 text-center">
                <button
                  onClick={() =>
                    handleClick(
                      "https://defi-dt9eod70t-joaquin-garcia-plante.vercel.app/"
                    )
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Web
                </button>
                <button
                  onClick={() =>
                    handleClick(
                      "https://github.com/Joaquin-Garcia-Plante/DeFi-App"
                    )
                  }
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                >
                  Código
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
