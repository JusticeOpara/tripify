"use client"

import Image from "next/image";
import Card from "../components/Card";
import Map from "../components/Map";
import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: false },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export default function Home() {

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <main>
      <div className="bg-[#1A385A]  flex h-[100vh] w-full fixed overflow-y-auto mt-[70px]">
        <div className=" w-[76%] max-lg:w-[100%] h-[1160px]  px-2 max-sm:items-center bg-gray-400">
          <div className="m-8 bg-orange-100 flex-grow-0 flex-shrink-0 basis-[55vw] flex flex-col gap-5">
            <h1 className="text-xl font-bold font-clashDisplay">
              Where Can I Travel?
            </h1>
            <p className="text-[1.25rem] font-normal font-satoshi">
              Check for entry restrictions, rules, and quarantine information in
              any country or US State, and book safely
            </p>
           
            <div className=" bg-white border-1px grid grid-cols-[1fr,1fr] gap-4 py-4 min-h-[10rem] ">
              <div className="flex flex-row justify-stretch items-center bg-red-500 gap-3">
                <div className="bg-blue-500 w-[2.6rem] h-[2.3rem]  rounded-[50%] flex justify-center items-center">
                  <Image src="/bahamas-flag.svg" className="" width={25} height={18} alt="flag" />
                </div>

                <select
                  id="countries"
                  className="bg-gray-50 border text-base h-[2rem] px-2 border-gray-300 outline-none text-gray-900 font-normal font-satoshi rounded-lg  block shadow w-full"
                >
                  <option className="" selected>
                    Choose a country
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="flex flex-row justify-stretch items-center gap-3 bg-gray-300">
                <div className="bg-blue-500 w-[2.6rem] h-[2.3rem] rounded-[50%] flex justify-center items-center">
                  <Image src="/bahamas-flag.svg" width={24} height={18} className="" alt="flag"/>
                </div>

                <select
                  id="countries"
                  className="bg-gray-50 border text-base h-[2rem] px-2 border-gray-300 outline-none text-gray-900 font-normal font-satoshi rounded-lg  block shadow w-full"
                >
                  <option className="" selected>
                    {" "}
                    Passport of
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="flex flex-row justify-stretch items-center gap-3 bg-red-500">
                <div className="bg-blue-500 w-[2.6rem] h-[2.3rem] rounded-[100%] flex justify-center items-center">
                  <Image src="/bahamas-flag.svg" className="" width={24} height={24} alt="flag"/>
                </div>

                <select
                  id="countries"
                  className="bg-gray-50 border text-base h-[2rem] px-2 border-gray-300 outline-none text-gray-900 font-normal font-satoshi rounded-lg  block shadow w-full"
                >
                  <option className="" selected>
                    Crime free{" "}
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="flex flex-row justify-stretch items-center gap-3 bg-gray-300">
                <div className="bg-blue-500 w-[2.6rem] h-[2.3rem] rounded-[50%] flex justify-center items-center">
                  <Image src="/bahamas-flag.svg" className="" width={24} height={18} alt="flag"/>
                </div>

                <select
                  id="countries"
                  className="bg-gray-50 border text-base h-[2rem] px-2 border-gray-300 outline-none text-gray-900 font-normal font-satoshi rounded-lg  block shadow w-full"
                >
                  <option className="" selected>
                    Traveling to anywhere
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <p className="text-[1.25rem] font-medium font-satoshi">
              Tripster is getting information from hundreds of different sources
              – our information might not be 100% accurate and you should always
              do further checks before making plans. for crime free areas in
              Africa and world wide.
            </p>
            <div className="flex flex-row items-center ">
              <p className="font-medium ">Restriction:</p>

              <div className="rounded bg-white cursor-pointer w-fit">
                <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                  <div className="relative w-fit z-10">
                    <Listbox.Button className="relative w-full min-w-[300px] flex justify-between items-center cursor-default rounded-lg bg-blue-500  py-2 px-3 text-left shadow-md sm:text-sm border">
                      <span className="block truncate">
                        {" "}
                        {selectedPerson.name}
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-4 object-contain "
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31L8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z"
                        />
                      </svg>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="bg-white absolute mt-1 max-h-60 w-full overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            value={person}
                            disabled={person.unavailable}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 px-4 ${
                                active
                                  ? "bg-primary-blue text-blue-500"
                                  : "text-gray-900"
                              }`
                            }
                          >
                            {person.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>

            <Card />
            <div className="w-full text-right pr-[1rem] font-satoshi text-xs ">
              you can vist this site for more information
            </div>
            <div className="mt-8 bg-red-300 flex items-center flex-col">
              <button className=" bg-blue-500 m-0 appearance-none box-border transition-all min-w-[10rem] text-center rounded-[9999px] border-0 py-[0.5em] px-[1em] font-semibold">
                Show More
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white w-[45vw] min-h-[150px] sticky block  px-1.5 top-0 overflow-hidden max-sm:hidden max-lg:hidden ">
          <Map />
        </div>
      </div>
    </main>
  );
}
