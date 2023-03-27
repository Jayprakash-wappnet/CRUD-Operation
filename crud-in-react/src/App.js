import { Route, Routes } from "react-router-dom";
import "./App.css";
import UsersList from "./features/users/UsersList";
import AddUsers from "./features/users/AddUsers";
import EditUsers from "./features/users/EditUsers";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        CRUD with React-Redux
      </h1>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/add-users" element={<AddUsers />} />
        <Route path="/edit-user/:id" element={<EditUsers />} />
      </Routes>
    </div>
  );
}

export default App;
