import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD } from "../graphql/Mutations";

const UpdatePasword = () => {
  const [userData, setUserData] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });

  const [passwordUpdate] = useMutation(UPDATE_PASSWORD);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    passwordUpdate({
      variables: {
        username: userData.username,
        oldPassword: userData.oldPassword,
        newPassword: userData.newPassword,
      },
    });
    //window.location.reload();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Update Password</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          defaultValue={userData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="oldPassword"
          placeholder="Old Password"
          defaultValue={userData.oldPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          defaultValue={userData.newPassword}
          onChange={handleChange}
        />
        <button>Update</button>
      </form>
    </div>
  );
};

export default UpdatePasword;
