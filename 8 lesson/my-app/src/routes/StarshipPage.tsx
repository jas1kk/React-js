import apiClient from "../common/api";
import { IStarship } from "../types";
import { useState, useEffect } from "react";
import { StarshipCard } from "../components";
import "../styles/pageStyle.css";

interface IStarshipsList {
  next: string;
  results: IStarship[];
}

const StarshipPage = () => {
  const [page, setPage] = useState(1);
  const [starships, setStarships] = useState<IStarshipsList>({
    next: "",
    results: [],
  });

  const getStarships = async () => {
    try {
      const res = await apiClient.get(`/starships?page=${page}`);
      setStarships(res.data);
    } catch (error) {
      console.log({ error });
    }
  };


  useEffect(() => {
    getStarships();
  }, [page]);

  if (starships.results.length < 1) {
    return (
    <div className="loading">
      <div>
        Loading..
      </div>
        </div>
    );
  }

  return (
    <div>
      <h2>Starship</h2>
      <div className="cardContainer">
        {starships.results.map((starship) => (
          <StarshipCard {...starship} />
        ))}
      </div>
      {page !== 1 && (
          <input type="button" value="back" onClick={() => setPage(page - 1)} className="button"/>
        )}
        {starships.next !== null && (
          <input type="button" value="next" onClick={() => setPage(page + 1)} className="button"/>
        )}
    </div>
  );
};

export default StarshipPage;
