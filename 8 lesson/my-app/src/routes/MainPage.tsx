import { Link, Outlet } from "react-router-dom";

export default function MainPage() {

  return (
    <>
      <header>
       <Link to="/" className="main">Main</Link>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        
      </footer>
    </>
  );
}
