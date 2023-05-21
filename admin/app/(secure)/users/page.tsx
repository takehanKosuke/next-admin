"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { SuccessButton } from "../../_components/Button";
import { User } from "../../_types/user";
import Table from "../../_components/Table";
const headers = ["ID", "Name", "Gender", "Image", "Age"];

export default function Page() {
  const [userData, setUserData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);
    const res = await axios.get("/users/api");

    setLoading(false);
    setUserData(res.data);
  };

  return (
    <div className="container">
      <h1>Users</h1>
      <Table headers={headers} rows={userData} />
    </div>
  );
}
