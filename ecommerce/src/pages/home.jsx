

import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/ui/Highlight";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";
import Highlight from "../components/ui/Highlight";

const Home = () => {

    return (
        <>
         <Landing></Landing>
          <Highlights />
          <Featured />
          <Discounted />
          <Explore />
          </>
    )
}

export default Home; 