import React from "react";

import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import Clima from "../assets/Clima.png";
import Defi from "../assets/Defi.png";
import Food from "../assets/Food.png";
import Todo from "../assets/Todo.png";

function Work() {
  const handleClick = (url) => {
    window.open(url);
  };
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Proyectos</p>
          <p className="py-6">Algunos de mis proyectos:</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${Food})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-6">
              <span className="text-xl font-bold text-white tracking-wider pl-4">Food App</span>
              <p className="pl-4 text-xs">Desarrollo de una Single Page Application, que consume datos de la API#spoonacularapi y una base de datos montada con PostgreSQL, a través de un BackEnd desarrollado en Node.JS, utilizando Express. Para el Front End se utilizó React, Redux como state management y CSS para darleestilos. La misma tiene funcionalidades tales como buscar, filtrar/ordenar recetas ycrear tu propia receta.</p>
              <div className="text-center mb-9">
                <button onClick={() => handleClick("https://pi-food-deploy.vercel.app")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <button onClick={() => handleClick("https://github.com/Joaquin-Garcia-Plante/PI-Food")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Todo})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-6">
              <span className="text-xl font-bold text-white tracking-wider pl-4">To-Do App</span>
              <p className="pl-4 text-xs">Desarrollo de una App que le permite a un usuario agregar tareas que se iránrenderizando en tiempo real en pantalla. Una vez completada la misma se puedetachar o eliminar. Además pueden seleccionar distintos fondos para la aplicación. Tecnologías empleadas: React JS - CSS - Javascript</p>
              <div className="text-center mb-9">
                <button onClick={() => handleClick("https://to-do-kappa-lilac.vercel.app/")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <button onClick={() => handleClick("https://github.com/Joaquin-Garcia-Plante/ToDo")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div style={{ backgroundImage: `url(${Clima})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 mt-6">
              <span className="text-xl font-bold text-white tracking-wider pl-4">Weather App</span>
              <p className="pl-4 text-xs">Desarrollo de una App que consume datos de la API #Weather API, utilizando React yCSS para darle estilos a todos sus componentes. La misma tiene funcionalidades talescomo buscar ciudades de todo el mundo y ver los detalles del clima de cada una deellas en tiempo real.</p>
              <div className="text-center mb-9">
                <button onClick={() => handleClick("https://weather-app-taupe-phi.vercel.app/")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <button onClick={() => handleClick("https://github.com/Joaquin-Garcia-Plante/Weather-App")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Defi})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">Aplicacion Frontend</span>
              <p className="p-4">Desarrollada con ReactJS</p>
              <div className="pt-8 text-center">
                <button onClick={() => handleClick("https://defi-dt9eod70t-joaquin-garcia-plante.vercel.app/")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Demo
                </button>
                <button onClick={() => handleClick("https://github.com/Joaquin-Garcia-Plante/DeFi-App")} className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
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
