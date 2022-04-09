import React, { useState } from "react";
import Moviedata from "../MovieData.json";
import BodySlider from "./BodySlider";

const Movies = () => {
  const [mData] = useState(Moviedata);
  return (
    <>
      <h4 style={{ marginLeft: "35px" }}>Recommended For You</h4>
     <div style={{height:"600px"}}>
      <BodySlider />
      </div>
    </>
  );
};

export default Movies;
