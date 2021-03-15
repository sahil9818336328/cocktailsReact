import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  // console.log(cocktails);

  // console.log(useGlobalContext());
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">no matches found ...</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => {
          return <Cocktail key={cocktail.id} {...cocktail} />; //spreading the properties
        })}
      </div>
    </section>
  );
};

export default CocktailList;
