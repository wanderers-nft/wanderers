import "./Navigation.css";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div className="navbar">
            <div>
                <h1><Link to="/">WANDERERS</Link></h1>
            </div>
            <div>
                <Link to="/buy">BUY NOW!</Link>
            </div>
            /
            <div>
                <Link to="/#about">About</Link>
            </div>
            /
            <div>
                <Link to="/#roadmap">Roadmap</Link>
            </div>
            /
            <div>
                <Link to="/#team">Team</Link>
            </div>
            /
            <div>
                <Link to="/#social">Social</Link>
            </div>
        </div>
    )
}