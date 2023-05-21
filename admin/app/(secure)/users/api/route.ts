import { NextResponse } from "next/server";
const usersData = [
  {
    id: 1,
    name: "John Doe",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1682704786682-a410529ec7b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    age: 32,
  },
  {
    id: 2,
    name: "John Doe",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1682247297864-54de4ed02804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    age: 32,
  },
  {
    id: 3,
    name: "John Doe",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1682821890455-044ea43d8b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    age: 32,
  },
  {
    id: 4,
    name: "John Doe",
    gender: "men",
    image:
      "https://images.unsplash.com/photo-1683093092507-928bd670af33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    age: 32,
  },
];

export async function GET(request: Request) {
  console.log("GET request runnning");

  return NextResponse.json(usersData);
}
