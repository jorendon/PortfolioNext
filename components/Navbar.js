import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Portfolio</a>
        </Link>
        <Link href="/miniapps">
          <a className="navbar-brand">
            Apps
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
