import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IPeople } from "../types";
import apiClient from "../common/api";
import { PersonPlanet } from "../components";
import "../styles/fullPage.css";

const FullPersonPage = () => {
  const { personId } = useParams();
  const [personData, setPersonData] = useState<IPeople>();

  const getPost = async () => {
    try {
      const res = await apiClient.get(`/people/${personId}`);
      setPersonData(res.data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getPost();
    console.log(personData);
  }, []);

  if (personData === undefined) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    );
  }

  return (
    <div>
      <Link to={"/people"} className="main">Back</Link>
      <div className="fullDataContainer">
        <div className="imageContainerFullDataPer">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              personId +
              ".jpg"
            }
            alt=""
            placeholder="../placeholder.jpg"
          />
        </div>
        <div className="textDataFullData">
          <h2>Name: {personData.name}</h2>
          <h3>Birthday year: {personData.birth_year}</h3>
          <h3>Gender: {personData.gender}</h3>
          <h3>Heigth: {personData.height}</h3>
          <h3>Mass: {personData.mass}</h3>
          <h3>
            Planet: <PersonPlanet url={personData.homeworld} />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FullPersonPage;
