import React from "react";

function Hero({ heroName }) {
  if (heroName === "jocker") {
    throw new Error("No a hero");
  }
  return <div>{heroName}</div>;
}
export default Hero;
