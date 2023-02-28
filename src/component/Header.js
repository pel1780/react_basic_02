import { Link } from "react-router-dom";
import styled from "styled-components";


const Head = styled.header`
background: #f2f2f2;
line-height: 100px;
.inner{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    margin: 0 auto;
    nav{
        ul{
            display: flex;
            list-style: none;
            gap: 30px;
        }
    }
}
`
export const Header = () => {
    return (
        <Head className="header">
            <div className="inner">
                <h1>
                    <Link to="/">LOGO</Link>
                </h1>
                <nav>
                    <ul>
                        <li><Link to="/01">menu01</Link></li>
                        <li><Link to="/02">menu02</Link></li>
                        <li><Link to="/03">menu03</Link></li>
                    </ul>
                </nav>
            </div>
        </Head>
    )
}

