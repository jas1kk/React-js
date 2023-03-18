import { Link } from "react-router-dom";

const MainPageContent = () => {
  return (
    <div className="header">
      <br />
      <Link to="/people" className="main">People</Link>
      <br />
      <br />
      <Link to="/planets" className="main">Planets</Link>
      <br />
      <br />
      <Link to="/starships" className="main">Starships</Link>
    </div>
  );
};

export default MainPageContent;
