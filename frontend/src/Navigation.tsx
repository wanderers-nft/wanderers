import "./Navigation.css";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <div className="navbar">
            <div>
                <h1><Link to="/">WANDERERS</Link></h1>
            </div>
            <div>
                <Link to="/buy"><b>BUY NOW!</b></Link>
            </div>
            /
            <div>
                <p>About</p>
            </div>
            /
            <div>
                <p>Roadmap</p>
            </div>
            /
            <div>
                <p>Team</p>
            </div>
            /
            <div>
                <p>Social</p>
            </div>
        </div>
    )
}