import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <h1>
                <a href="/">LOGO</a>
            </h1>
            <nav>
                <ul>
                    <li><Link to="/01">menu01</Link></li>
                    <li><Link to="/02">menu02</Link></li>
                    <li><Link to="/03">menu03</Link></li>
                </ul>
            </nav>
        </header>
    )
}

