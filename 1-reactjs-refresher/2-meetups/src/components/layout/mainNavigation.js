import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="p-4 bg-stone-950 text-stone-50 flex justify-between items-center">
      <h1 className="font-bold text-lg">Meetups</h1>
      <nav>
        <ul className="flex gap-4">
          <li className="hover:text-stone-400 transition-colors">
            <Link to="/">All Mettups</Link>
          </li>
          <li className="hover:text-stone-400 transition-colors">
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li className="hover:text-stone-400 transition-colors">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
