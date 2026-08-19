import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link to="/" className="text-2xl font-bold">
          Hive of Creativity
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>

          <Link to="/create" className="hover:text-green-600">
            Create
          </Link>

          <Link to="/community" className="hover:text-green-600">
            Community
          </Link>

          <Link to="/my-creations" className="hover:text-green-600">
            My Creations
          </Link>

          <Link to="/about" className="hover:text-green-600">
            About
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;