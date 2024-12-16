import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  console.log(location);

  return <div>Breadcrumbs</div>;
}

export default Breadcrumbs;
