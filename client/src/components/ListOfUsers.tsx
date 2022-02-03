import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../graphql/Queries";
import { DELETE_USER } from "../graphql/Mutations";

interface User {
  id: any;
  name: string;
  username: string;
}

const ListOfUsers = () => {
  const [deletedUser] = useMutation(DELETE_USER);
  const allUsers = useQuery(GET_ALL_USERS);

  const removeUser = (id: any) => {
    deletedUser({ variables: { id: id } });
    window.location.reload();
  };

  return (
    <div>
      <h1>All Users</h1>
      {allUsers.loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {allUsers.data.getAllUsers.map((user: User) => (
            <>
              <ul>
                <li>
                  <b>Name:</b> {user.name}
                </li>
                <p>
                  <b>Username:</b> {user.username}
                </p>
              </ul>
              <button onClick={() => removeUser(user.id)}>Delete</button>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListOfUsers;
