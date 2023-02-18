import { Axios } from "../../CustomAxios";

const AdminProduct = ({product,getProduct}) =>{
    const uri = `/product/${product.id}`
    
    //삭제버튼 클릭
    const deleteClick = async(event)=>{
      await Axios.delete(uri);
      getProduct();
    }
    
    return (
        <>
            <tr> 
                <td>이미지</td>
                <td className="">{product.item_name}</td>
                <td className="">{product.price}</td>
                <td className="">{product.stock}</td>
                <td className="">{product.item_status}</td>
                <td><input type="button" value="수정"/></td>
                <td><input onClick={deleteClick} type="button" value="삭제"/></td>
            </tr>
        </>
    )
}

export default AdminProduct;