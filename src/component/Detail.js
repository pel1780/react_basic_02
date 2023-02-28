import { useParams } from "react-router-dom"
import styled from "styled-components";

const Itm = styled.div`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 30px;
    padding: 100px 0;
    div{
        flex: 1;
        border: 1px solid #ddd;
        padding: 10px;
        img{
            width: 100%;
        }
    }
`
export const Detail = ({ itm }) => {
    const { id } = useParams();
    const detailItm = itm.find(it => it.id == id);
    // find는 객체, filter는 새로운 배열을 생성, map은 순회만 한다
    console.log(detailItm)
    // 자료를 가져와서 자료와 매칭되는 것을 여기 뿌린다
    // console.log(typeof (id))
    return (
        <Itm>
            <div><img src={detailItm.image_link} alt="" /></div>
            <div>
                <h2>{detailItm.name}</h2>
                <p>{detailItm.description}</p>
            </div>
        </Itm>
    )
}