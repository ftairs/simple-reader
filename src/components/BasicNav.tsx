import { Link } from "react-router-dom";

// TODO: v2.5 add support for HPL collection switching6

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
