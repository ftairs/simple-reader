import { Link } from "react-router-dom";

function BasicNav() {
  return (
    <div>
      Basic Navigation -<Link to={"/"}>Home</Link> -
      <Link to={"/viewer"}>Viewer</Link> -
      <Link to={"/toc"}>Table Of Contents</Link>
    </div>
  );
}

export default BasicNav;
