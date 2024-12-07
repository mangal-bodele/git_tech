import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddUser from "./Components/AddUser";
import ShowUsers from "./Components/ShowUsers";
import UpdateUser from "./Components/UpdateUser";
import DeleteUser from "./Components/DeleteUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Add" element={<AddUser />} />
          <Route path="/show" element={<ShowUsers />} />
          <Route path="/update/:userId" element={<UpdateUser />} />
          <Route path="/delete/:userId" element={<DeleteUser />} />

          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
