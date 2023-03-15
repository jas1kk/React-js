import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HelpPage = () => {
  const [postId, setPostId] = useState(0);
  const navigate = useNavigate();

  const onClickPost = (id: number) => {
    setPostId(id);
    navigate(`/help/${id}`);
  };

  return (
    <div className="App">
      <h1>Help Page</h1>
      <div className="container">
        <div className="column">
        </div>
        <div className="column">
        </div>
      </div>
    </div>
  );
};

export default HelpPage;