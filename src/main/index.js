import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  //mock서버에 가져온 정보를 페이지에 상품별 카드와 정보를 보여주기 위해
  //React의 useState기능을 이용한다. 당연히 import React from 'react'; 해줘야 한다.
  const [products, setProducts] = React.useState([]);
  //axios가 기존에 postman 통해서 만든 mock서버와 네트워크 통신 하면서 상품 정보를 가져온다.
  //npm install axios와 import axios form 'axios';필요
  //.get에 있는게 mock 서버 주소
  React.useEffect(function () {
    axios
      .get(
        "https://cfba2957-0b2a-4bdc-9235-5122126e82e6.mock.pstmn.io/products"
      )
      .then(function (result) {
        //비동기화 된 promise객체를 가져오기 때문에 익명 함수function을 사용
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생: ", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {
            //jsx 문법활용
            products.map(function (product, index) {
              return (
                <div className="product-card">
                  <Link className="product-link" to={`/products/${index}`}>
                    <div>
                      <img className="product-img" src={product.imageUrl} />
                    </div>
                    <div className="product-contents">
                      <span className="prodcut-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-seller">
                        <img
                          className="product-avatar"
                          src="images/icons/avatar.png"
                        />
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          }
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
