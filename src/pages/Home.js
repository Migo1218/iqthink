import axios from "axios";
import React, { useEffect, useState } from "react";
import { usePreventScroll } from "react-aria";
import { useFormik } from "formik";

import Dashboard from "../components/Dashboard";
import HeadlessSlideOver from "../components/HeadlessSlideOver";
import SlideOver from "../components/SlideOver";
import { useDispatch, useSelector } from "react-redux";
import { setlistAdventures } from "../store/slices/adventuresSlice";

const Home = () => {
  let adventures = useSelector((state) => state.adventures.listAdventures);
  

  // ESTADOS
  const [isOpen, setIsOpen] = useState(false);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [character, setCharacter] = useState("");
  const [chooseCharacter, setChooseCharacter] = useState([]);
  //   console.log(chooseCharacter);
  //   console.log(chooseCharacter.name);

  const handleOnClose = () => setIsOpen(false);

  const dispatch = useDispatch();
  // USEEFFECT
  //   useEffect(() => {
  //     getCharacters();
  //   }, []);

  const drop = () => {
    setDropdown(!dropdown);
  };

  const getFilterCharacter = () => {
    setDropdown2(!dropdown2);

    axios
      .get(`https://the-one-api.dev/v2/character?name=${character}`, {
        headers: {
          Authorization: `Bearer r2JqZ124Otxg-ysVcJHS`,
        },
      })
      .then((response) => {
        // Obtenemos los datos
        setChooseCharacter(response.data.docs);
        // setOptions(response.data);
        // dispatch(setlistProyectosUser(response.data))
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const [CharacterDef, setCharacterDef] = useState();
  const [adventureData, setAdventureData] = useState();
  //   console.log(CharacterDef);
  //   console.log(adventureData);
  const raceCharacter = (character) => {
    setCharacterDef(character);
    setDropdown2(!dropdown2);
  };

  //FORMIK
  const formik = useFormik({
    initialValues: {
      adventurename: "",
      origin: "",
      destination: "",
    },
    onSubmit: (data, { resetForm }) => {
      //   console.log(data);
      setAdventureData(data);
      setIsOpen(false);
      dispatch(
        setlistAdventures({
          id: CharacterDef._id,
          name: CharacterDef.name,
          race: CharacterDef.race,
          adventurename: data.adventurename,
          origin: data.origin,
          destination: data.destination,
        })
      );
      setCharacterDef("");
      resetForm();
    },
  });

  const [options, setOptions] = useState();
  console.log(options);

  const getCharacters = () => {
    drop();
    console.log(adventures);
    setOptions(adventures);
  };

  const filtrarPersonaje = (charactername) => {
    console.log(charactername);
  adventures = adventures.filter((adventure) => adventure.name === charactername);
  console.log(adventures);

  }
  //   SLIDEOVER
  usePreventScroll({ isDisabled: !isOpen });
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
              <div className="w-56">
                <button
                  onClick={() => getCharacters()}
                  id="dropdownDefault"
                  data-dropdown-toggle="dropdown"
                  class="inline-flex items-center text-white bg-gray-200 hover:bg-purple-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  <span className="text-light-gray hover:text-white">
                    filter by character
                  </span>
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
              {/* <!-- Dropdown menu --> */}
              {dropdown && (
                <div
                  id="dropdown"
                  class="relative w-56 z-50 bg-white divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
                >
                 
                      
                        <ul
                          class="absolute z-50 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdownDefault"
                        >
                          {
                  options && options.map((option) => (
                    
                          <li>
                            <div 
                            onClick={() => filtrarPersonaje(option.name)}
                            className="w-44 bg-purple-200 hover:bg-purple-300 rounded-md">
                              <p class="cursor-pointer block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">
                                {option.name}
                              </p>
                            </div>
                          </li>
                  ))
                 }
                        </ul>
                      
                    
                </div>
              )}
            </div>
            <div>
              <div
                onClick={() => setIsOpen(true)}
                className="cursor-pointer hover:bg-purple-900 bg-dark-purple rounded-full w-3/5 m-auto mt-5 sm:mt-1"
              >
                <p className="text-center text-white text-base pt-1 pb-1">
                  New Adventure
                </p>
              </div>
            </div>
          </div>
          {/* //Acá irá lógica caracteres */}
          <div>
            {adventures &&
              adventures.map((adventure) => (
                <div
                  key={adventure.id}
                  className="bg-white mt-5 shadow-md mb-5 rounded-md w-4/5"
                >
                  <div className="ml-5 sm:grid sm:grid-cols-4">
                    {/* Primer div img  */}

                    <div className="w-24 w-20 mt-2">
                      <img
                        className=""
                        src="https://res.cloudinary.com/dwhhfl68n/image/upload/v1658296208/iqthink/Placeholder_Mordor_1_w4u5zr.png"
                        alt=""
                      />
                    </div>

                    <div className="col-span-3">
                      <h1 className="text-center lg:text-left text-blue-600 mb-2">
                        {adventure.adventurename}
                      </h1>
                      <div className="grid grid-cols-2">
                        <div>
                          <p>{adventure.name}</p>
                          <p className="text-gray-400">{adventure.race}</p>
                        </div>
                        <div className="pb-5">
                          <p className="text-gray-400">
                            Origin:{" "}
                            <span className="text-black">
                              {adventure.origin}
                            </span>
                          </p>
                          <p className="text-gray-400">
                            Destination:{" "}
                            <span className="text-black">
                              {adventure.destination}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <SlideOver isOpen={isOpen} onClose={handleOnClose} title="New Adventure">
        <div className="">
          {/* <input type="text" className="border-gray-300 rounded-md" /> */}
          <div className="w-4/5 h-px bg-gray-200"></div>
          <div className="mt-5">
            <p className="text-gray-500">About Adventure</p>
          </div>
          <div>
            <div class="w-full">
              <form
                onSubmit={formik.handleSubmit}
                class="bg-white px-8 pt-6 pb-8 mb-4"
              >
                <div class="mb-4">
                  <label
                    class="block text-gray-500 text-xs font-bold mb-1"
                    for="username"
                  >
                    Adventure Name
                  </label>
                  <input
                    id="adventurename"
                    name="adventurename"
                    value={formik.values.adventurename}
                    onChange={formik.handleChange}
                    required
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div class="mb-6 grid grid-cols-4">
                  <div className="mt-5">
                    <div className="w-2 h-2 rounded-full bg-gray-700 m-auto mt-5"></div>
                    <div className="h-12 w-px bg-gray-500 m-auto"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-700 m-auto"></div>
                  </div>
                  <div className="col-span-3">
                    <label
                      class="block text-gray-500 text-xs font-bold mb-1"
                      for="password"
                    >
                      Origin
                    </label>
                    <input
                      id="origin"
                      name="origin"
                      value={formik.values.origin}
                      onChange={formik.handleChange}
                      required
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                    />
                    <label
                      class="block text-gray-500 text-xs font-bold mb-1"
                      for="password"
                    >
                      Destination
                    </label>
                    <input
                      id="destination"
                      name="destination"
                      value={formik.values.destination}
                      onChange={formik.handleChange}
                      required
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-5 mb-5">
                    <p className="text-gray-500">Who is the Character?</p>
                    <div>
                      <label
                        class="block text-gray-500 text-xs font-bold mb-1"
                        for="username"
                      >
                        Character
                      </label>
                      <div class="relative">
                        <div
                          onClick={() => getFilterCharacter()}
                          class="flex absolute cursor-pointer inset-y-0 right-0 mr-2 items-center pl-3"
                        >
                          <span class="material-symbols-outlined">search</span>
                        </div>
                        <input
                          onChange={(event) => setCharacter(event.target.value)}
                          required
                          type="text"
                          id="email-address-icon"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="bg-gray-200 w-full">
                      {chooseCharacter &&
                        chooseCharacter.map((chooseCharacter) => (
                          <div>
                            {dropdown2 && (
                              <div
                                className="cursor-pointer hover:bg-purple-200"
                                onClick={() => raceCharacter(chooseCharacter)}
                                key={chooseCharacter._id}
                              >
                                <p>{chooseCharacter.name}</p>
                                <p className="text-gray-600 text-sm">
                                  {chooseCharacter.race}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <div className="w-3/5 m-auto bg-blue-300 rounded-md mb-5 text-center font-semibold text-blue-800">
                  {CharacterDef ? (
                    <p>El personaje elegido es: {CharacterDef.name}</p>
                  ) : null}
                </div>
                <div class="flex items-center justify-between">
                  <button
                    class="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <button className="mt-[400px]" onClick={handleOnClose}>
            Cerrar
          </button> */}
        </div>
      </SlideOver>

      <HeadlessSlideOver
        open={isHeadlessOpen}
        setOpen={setIsHeadlessOpen}
        title="Item Details"
      >
        <div className="flex flex-col">
          <input type="text" className="border-gray-300 rounded-md" />
          <button className="mt-4" onClick={() => setIsHeadlessOpen(false)}>
            ok
          </button>
        </div>
      </HeadlessSlideOver>
    </div>
  );
};

export default Home;
