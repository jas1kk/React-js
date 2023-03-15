import { Link, Outlet, useLocation } from "react-router-dom";
const GeneralPage = () => {
  const location = useLocation();
 
  console.log({ location });
  return (
    <>
      <header id="head">
        <Link to="/" id="general">Главная</Link>
        <Link to="/login" id="login">Вход</Link>
        <Link to="/help" id="help">Помощь</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default GeneralPage;
