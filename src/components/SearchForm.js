import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  // console.log(useGlobalContext());
  const searchValue = React.useRef(""); //selecting DOM node
  // console.log(searchValue);
  React.useEffect(() => {
    searchValue.current.focus(); //focus the input on intial render of the form
  });
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value); //updating searchTerm
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">farourite cocktail ?</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
