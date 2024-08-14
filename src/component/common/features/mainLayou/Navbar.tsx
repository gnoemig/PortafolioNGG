import { useState } from "react";
import ExerciseOneCard from "../../../challenge/ExerciseOne-Card"


const Navbar = () => {

const [exerciseOne, setExerciseOne] = useState(false);
  const overhed = "hover:bg-[#127ef9ff] hover:text-black cursor-pointer";

  return (
    <div>
      <div className="flex flex-col">
        <ul className="flex lg:flex-col justify-center gap-5 p-2  bg-success">
          <li className={overhed} onClick={() => setExerciseOne(true)}>
            Ejercicio 1
          </li>
          <li className={overhed}>Ejercicio 2</li>
          <li className={overhed}>Ejercicio 3</li>
          <li className={overhed}>Ejercicio 4</li>
          <li className={overhed}>Ejercicio 5</li>
        </ul>
      </div>
      <div className="flex justify-center items-center">{exerciseOne && <ExerciseOneCard />}</div>
    </div>
  );
};

export default Navbar