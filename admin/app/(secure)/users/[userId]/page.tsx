import React from "react";
import { SuccessButton } from "../../../_components/Button";
import Table from "../../../_components/Table";
const headers = ["ID", "Name", "Gender", "Age"];

const usersData = [
  {
    id: 1,
    name: "John Doe",
    gender: "men",
    age: 32,
  },
  {
    id: 2,
    name: "John Doe",
    gender: "men",
    age: 32,
  },
  {
    id: 3,
    name: "John Doe",
    gender: "men",
    age: 32,
  },
  {
    id: 4,
    name: "John Doe",
    gender: "men",
    age: 32,
  },
];

export default function Page() {
  return (
    <div>
      <h1>Users is show One</h1>
      <Table headers={headers} rows={usersData} />
      <SuccessButton text="Create User" link="/users/create" />
    </div>
  );
}
