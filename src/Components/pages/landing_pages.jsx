import Background from "../Background/background";
import Navbar from "../Navbar/navbar";
import Hero from "../Hero/hero";

function Landing () {
  let heroData = [
    { text1: "Authenticity", text2: "Accuracy", text3: "Simplicity" }
  ];

  return (
    <div className="relative w-full min-h-screen">
      <Background />
      <Navbar />
      <Hero
        heroData={heroData[0]}
         />
    </div>
  );
}

export default Landing;
