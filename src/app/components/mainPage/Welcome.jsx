import React from "react";
import mainwelcome from "../../../img/mainwelcome.png";
import arrow from "../../../img/arrow.svg";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <section>
        <div className="container ">
          <div className="flex justify-between items-center px-[100px] pt-0">
            <p className="text-white font-medium text-xl leading-7 tracking-widest">
              ДОБРО ПОЖАЛОВАТЬ В МИР
            </p>
            <p className="text-[#B52B25] font-black text-6xl leading-[75px]">
              2023
            </p>
          </div>
          <img
            src={mainwelcome}
            alt="mainwelcome"
            className="absolute top-0 left-0 -z-10"
          />
        </div>
      </section>
      <article className="flex items-center absolute top-[550px] left-[150px]">
        <h1 className="tracking-wide text-lg leading-6 mr-[80px] text-left">
          Приготовьтесь к приключениям, которые вы <br />
          ранее не могли себе даже представить
        </h1>
        <div className="flex justify-center items-center bg-[#B52B25] h-12 hover:bg-[#CC302A]">
          <Link
            to="/bicycles"
            className="text-xl font-base leading-[18px] tracking-tight text-white p-3"
          >
            В каталог
          </Link>
          <a href="#" className="w-[48px] h-[48px] ">
            <img src={arrow} alt="arrow" className=" w-[23px] h-[23px] m-3" />
          </a>
        </div>
      </article>
    </>
  );
};
// hover:bg-[#A71616]
// bg-[#8A2020]

export default Welcome;
