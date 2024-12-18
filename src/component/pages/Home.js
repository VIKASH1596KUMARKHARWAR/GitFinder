import React, { Fragment } from "react";
import Search from "../../component/users/Search";
import Users from "../../component/users/Users";

const Home = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
