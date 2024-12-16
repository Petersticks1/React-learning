import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h2>Page not found!</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolorem assumenda
                similique, cum nisi vitae ratione possimus aperiam corrupti iste!
            </p>

            <p>
                Go to the <Link to="/">Homepage</Link>.{" "}
            </p>
        </div>
    );
}

export default NotFound;
