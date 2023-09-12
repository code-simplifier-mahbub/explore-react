import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetail = () => {
  const person = useLoaderData();

  return (
    <div>
      <h1>person name: {person.name}</h1>
      <h3>person contact: {person.phone}</h3>
      <h2>this page about this person you need to need</h2>
    </div>
  );
};

export default FriendDetail;
