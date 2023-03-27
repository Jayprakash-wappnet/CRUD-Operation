import React, { useState } from "react";
import TextField from "../../components/TextField";
import Buttons from "../../components/Buttons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "./userSlice";

const EditUsers = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const navigate = useNavigate();

  const existingUser = users.filter((user) => user.id === params.id);

  const { name, email } = existingUser[0];

  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        email: values.email,
      })
    );
    navigate("/");
  };
  return (
    <div className="mt-10 max-w-full mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: "text", placeholder: "Enter your name" }}
      />

      <br />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "email", placeholder: "Enter your email" }}
      />
      <Buttons onClick={handleEditUser}>Edit</Buttons>
    </div>
  );
};

export default EditUsers;
