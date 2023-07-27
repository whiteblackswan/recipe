import "./Home.css";
import { useFetch } from "../../hooks/useFetch";
import React from "react";


import RecipeList from "../../components/RecipeList";

function Home() {
  const { data, isPending, error } = useFetch(" http://localhost:3000/recipes")

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipe={data}/>}
    </div>
  );
}

export default Home;
