import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Mongo from '../assets/mongo.png';
import Git from '../assets/git-icon.png';
import PG from '../assets/postgresql.png';
import Next from '../assets/Next.png';
import GCP from '../assets/gcp.png';
import { useState, useEffect } from 'react';
function Skills() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Escucha el evento de redimensionamiento de la ventana
    window.addEventListener('resize', handleResize);

    // Elimina el event listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(windowSize);
  return (
    <div name="skills" className=" w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          {windowSize.width <= 624 && windowSize.width > 280 ? (
            <>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </>
          ) : (
            <>
              {windowSize.width < 502 ? (
                <>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </>
              ) : (
                ''
              )}
            </>
          )}

          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Tecnologías
          </p>
          <p className="py-4">
            Algunas de las tecnologías que manejo y utilizo para crear
            aplicaciones:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML ICON" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML ICON" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML ICON" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML ICON" />
            <p className="my-4">ReactJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML ICON" />
            <p className="my-4">Node.js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PG} alt="HTML ICON" />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML ICON" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="HTML ICON" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="HTML ICON" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Next} alt="HTML ICON" />
            <p className="my-4">NextJS</p>
          </div>{' '}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GCP} alt="HTML ICON" />
            <p className="my-4">Google Cloud Run</p>
          </div>
        </div>
        {windowSize.width < 640 ? (
          <>
            <br />
            <br />
            <br />
            <br /> <br /> <br />
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Skills;
