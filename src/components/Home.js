import React, { useState } from "react";

import styled from "styled-components";
import Viwers from "./Viwers";
import Movies from "./Movies";
import Banner from "./Banner";

const Home = () => {


  
  return (
    <React.Fragment>
          <Banner />
      <div>
        <Viwers />
        <Movies />
      </div>
    </React.Fragment>
  );
};

export default Home;
