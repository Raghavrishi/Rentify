import React from "react";
import { SiWeightsandbiases } from "react-icons/si";
import { MdFitnessCenter, MdElectricCar, MdOutlinePets } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { GiTheaterCurtains } from "react-icons/gi";
import { HiBuildingOffice } from "react-icons/hi2";

const OurSpecialities = () => {
  const specialities = [
    {
      id: 1,
      title: "Office Nearby",
      icon: <HiBuildingOffice />,
      subText: "Work Nearby"
    },
    {
      id: 2,
      title: "Pet Friendly",
      icon: <MdOutlinePets />,
      subText: "Pets allowed"
    },
    {
      id: 3,
      title: "Car parking",
      icon: <MdElectricCar />,
      subText: "Park your car"
    },
    {
      id: 4,
      title: "Near Schools & Colleges",
      icon: <IoSchoolSharp />,
      subText: "Comfort Education"
    },
    {
      id: 5,
      title: "Theater Nearby",
      icon: <GiTheaterCurtains />,
      subText: "Watch movie during lesure"
    },
  ];
  return (
    <>
      <section id="ourSpecialities">
        <h1>OUR PROPERTIES SPECIALITIES</h1>
        <div className="specialities_container">
          {
            specialities.map(element=>{
              return(
                <div className="card" key={element.id}>
                    <div className="icon">{element.icon}</div>
                    <div className="title_text">{element.title}</div>
                    <div className="subtitle_text">{element.subText} <FaLongArrowAltRight/></div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default OurSpecialities;
