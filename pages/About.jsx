import { useState } from "react";
import { Navigate } from "react-router-dom";

function About() {
    const [user, setUser] = useState("mario");

    if (!user) {
        return <Navigate to="/" replace={true} />;
    }
    return (
        <div className="about">
            <h2>About us</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque aliquid fugit?
                Vitae vero at, ullam voluptate, ab quasi, fuga dicta minima quam laboriosam cum. Cum
                a magni quibusdam cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque aliquid fugit?
                Vitae vero at, ullam voluptate, ab quasi, fuga dicta minima quam laboriosam cum. Cum
                a magni quibusdam cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque aliquid fugit?
                Vitae vero at, ullam voluptate, ab quasi, fuga dicta minima quam laboriosam cum. Cum
                a magni quibusdam cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing
            </p>

            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    );
}

export default About;
