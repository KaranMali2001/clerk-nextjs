import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function page() {
  const user = await currentUser();
  console.log("user is ", user);
  return <div></div>;
}
