import { useLocation, Link } from "react-router-dom";

function Breadcrumbs() {
    const location = useLocation();
    // /help/contct ---> help | contact

    let currentLink = "";

    const crumbs = location.pathname
        .split("/")

        .filter((crumb) => crumb !== "")
        .map((crumb) => {
            currentLink = +`/${crumb}`;

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            );
        });

    return <div className="breadcrumbs">{crumbs}</div>;
}

export default Breadcrumbs;
