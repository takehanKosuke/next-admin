"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../../_components/Loading";
import { User } from "../../_types/user";
import Link from "next/link";
const headers = ["ID", "Name", "Gender", "Image", "Age"];

export default function Page() {
  const [userData, setUserData] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    setLoading(true);
    const res = await axios.get("/users/api");

    setLoading(false);
    setUserData(res.data);
  };
  const lowCount = 30;

  return (
    <div className="container">
      {isLoading ? <Loading /> : null}
      <h1 className="text-3xl py-4">ユーザー一覧</h1>
      <table className="w-full">
        <thead className="text-xs text-white uppercase bg-gray-500">
          <tr>
            {headers.map((header) => (
              <th scope="col" className="px-6 py-3" key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr className="bg-teal-800 border-b" key={user.id}>
              <th>
                <Link href="/users">{user.id}</Link>
              </th>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.image}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {[...Array(lowCount)].map((_, i) => (
        <div className="text-3xl" key={i}>
          {i}
        </div>
      ))}
    </div>
  );
}
