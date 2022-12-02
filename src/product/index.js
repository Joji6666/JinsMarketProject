import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  return <h1>상세페이지 {id} 상품</h1>;
};

export default ProductPage;
