import { useParams } from "react-router-dom"

export const Detail = ({ itm }) => {
    const { id } = useParams();
    const detailItm = itm.find(it => it.id == id);
    // find는 객체, filter는 새로운 배열을 생성, map은 순회만 한다
    console.log(detailItm)
    // 자료를 가져와서 자료와 매칭되는 것을 여기 뿌린다
    // console.log(typeof (id))
    return (
        <>
            <div>
                detail{id}
            </div>
            <div><img src={detailItm.image_link} alt="" /></div>
        </>
    )
}