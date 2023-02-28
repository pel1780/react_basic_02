import { useEffect, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"
import { Content01 } from "./component/Content01"
import { Content02 } from "./component/Content02"
import { Content03 } from "./component/Content03"
import { Detail } from "./component/Detail"
import { Footer } from "./component/Footer"
import { Header } from "./component/Header"
import styled from "styled-components"

// import { Data } from "./data/data";

const Wrap = styled.div`
margin: 0;
padding: 0;
font-size: inherit; 


`
const List = styled.section`
    width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    padding: 100px 0;
    figure{
        border: 1px solid #ddd;
        padding: 10px;
        text-align: center;
    }
    img{
        max-width: 100%;
    }
`
export const App = () => {
    const [itm, setItm] = useState([]);
    const getItm = async () => {
        const itms = await fetch('https://desipossa.github.io/shop_cra/assets/data.json').then(r => r.json());
        console.log(itms)
        setItm(itms);
    }
    useEffect(() => {
        getItm()
    }, []);

    return (
        <Wrap>
            <Header />
            <Routes>
                <Route path="/" element={
                    <List>
                        {
                            itm.slice(50, 60).map(it => {
                                return (
                                    <figure>
                                        <Link to={`/detail/${it.id}`}>
                                            <img src={it.image_link} alt="" />
                                            <div>{it.name}</div>
                                        </Link>
                                    </figure>
                                )
                            })
                        }
                    </List>
                } />
                <Route path="/01" element={<Content01 />} />
                <Route path="/02" element={<Content02 />} />
                <Route path="/03" element={<Content03 />} />
                <Route path="/detail/:id" element={<Detail itm={itm} />} />
            </Routes>
            <Footer />
        </Wrap>
    )
}