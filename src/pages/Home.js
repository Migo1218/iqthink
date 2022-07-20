import axios from "axios";
import React, { useEffect } from "react";
import Dashboard from "../components/Dashboard";

const Home = () => {
    useEffect(() => {
        getCharacters()
    }, [])
    
    const getCharacters = () => {
        axios
          .get(`https://the-one-api.dev/v2/character`,{
            headers: {
              'Authorization': `Bearer r2JqZ124Otxg-ysVcJHS`
            }
          })
          .then((response) => {
            // Obtenemos los datos
            console.log(response.data.docs);
            // setOptions(response.data);
            // dispatch(setlistProyectosUser(response.data))
          })
          .catch((e) => {
            // Capturamos los errores
          });
      };
  return (
    <div>
      <div className="grid grid-cols-4">
        <div>
          <Dashboard />
        </div>

        <div className="col-span-3">
          <h1 className="ml-5 mt-2 font-semibold text-gray-500">Hi, user</h1>
          <div className="grid sm:grid-cols-2 mt-5 w-4/5 m-auto">
            <div>
              <button
                // onClick={() => drop()}
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                class="inline-flex items-center text-white bg-gray-200 hover:bg-purple-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                <span className="text-light-gray">filter by character</span>
                <svg
                  class="w-4 h-4 ml-2 text-light-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <div className="bg-dark-purple rounded-full w-3/5 m-auto mt-5 sm:mt-1">
                <p className="text-center text-white text-base pt-1 pb-1">
                  New Adventure
                </p>
              </div>
            </div>
          </div>
          {/* //Acá irá lógica caracteres */}
          <div>
            <div className="bg-white shadow-md mt-5 mb-5 rounded-md w-4/5">
              <div className="grid grid-cols-4">
                {/* Primer div img  */}
                <div className="w-24 w-20 mb-2">
                  <img
                    src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1657054921/ADI/arfpigg_p1f8ou.png"
                    alt=""
                  />
                </div>

                <div className="col-span-3">
                  <h1 className="text-center">Nombre de la aventura</h1>
                  <div className="grid grid-cols-2 mt-2">
                    <div>
                        <p>Nombre personaje</p>
                        <p className="text-gray-400">raza personaje</p>
                    </div>
                    <div>
                        <p className="text-gray-400">Origin: <span className="text-black">sfsdg</span></p>
                        <p className="text-gray-400">Destination: <span className="text-black">sfsdg</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
