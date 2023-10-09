import React from "react";
import { logout, useAuthDispatch, useAuthState } from "../context";
import { NavBar } from "../components";

const Home = () => {
  const dispatch = useAuthDispatch();
  const userDetails = useAuthState();

  return (
    <>
      <NavBar logout={() => {logout(dispatch)}} />
      <div className="pt-20">
        <h4 className="mb-4 text-center pb-4 text-6xl leading-tight">Hi, {userDetails.user?.name}!</h4>
      </div>
    </>
  );
};

export default Home;
