import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Buttons from "../../components/Buttons";
import { Link } from "react-router-dom";
import { deleteUser } from "./userSlice";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <div
        key={user.id}
        className="bg-gray-300 p-5 flex items-center justify-between"
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-4">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </button>
          </Link>

          <button onClick={() => handleRemoveUser(user.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <Link to="/add-users">
        <Buttons>Add User</Buttons>
      </Link>

      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p
            className="text-center col-span-2
              text-gray-700  font-semibold"
          >
            No user
          </p>
        )}
      </div>
    </div>
  );
};

export default UsersList;
