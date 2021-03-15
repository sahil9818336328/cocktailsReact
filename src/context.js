import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="; // search cocktails by name
const globalContext = createContext("PROVIDER NOT FOUND");

const AppProvider = ({ children }) => {
  const Provider = globalContext.Provider;
  //state variables
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  // fetch drinks function
  const fetchDrinks = useCallback(async () => {
    //preventing inifinite loop.
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const finalResponse = await response.json();
      //   console.log(finalResponse);
      const { drinks } = finalResponse;
      //   console.log(drinks);
      if (drinks) {
        const updatedDrinks = drinks.map((drink) => {
          //   console.log(drink);
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = drink;
          // assigning simpler names to existing properties.
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(updatedDrinks);
      } else {
        setCocktails([]); //if response is an empty array.
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <Provider value={{ loading, setSearchTerm, cocktails }}>
      {children}
    </Provider>
  );
};

// Custom hook
const useGlobalContext = () => {
  return useContext(globalContext);
};
export default AppProvider;
export { useGlobalContext };
