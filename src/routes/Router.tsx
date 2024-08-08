import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainlayout from "../component/common";
import { Home } from "../component/common/features/mainLayou/Home";
import ExerciseOneCard from "../component/challenge/ExerciseOne-Card";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/exerciseOneCard" element={<ExerciseOneCard />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
