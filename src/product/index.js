import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://701c4cb5-6989-4030-81c8-135b9278a83c.mock.pstmn.io/products/ ${id}`
      )
      .then(function (result) {
        setProduct(result.data);
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보 불러오는 중...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
    </div>
  );
};

export default ProductPage;
