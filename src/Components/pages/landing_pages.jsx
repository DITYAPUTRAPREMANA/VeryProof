import Background from "../Background/background";
import Navbar from "../Navbar/navbar";
import Hero from "../Hero/hero";
import { useState } from "react";

function Landing () {
  let heroData = [
    { text1: "Authenticity", text2: "Accuracy", text3: "Simplicity" }
  ];

  const [playStatus, setplayStatus] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      <Background playStatus={playStatus} />
      <Navbar />
      <Hero
        setplayStatus={setplayStatus}
        heroData={heroData[0]}
        playStatus={playStatus} />
    </div>
  );
}

export default Landing;
