import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../assets/css/detail.css";
import "../../../assets/js/main.js";
import { get } from "../../../api/product";
const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState<any>([]);
  useEffect(() => {
    get(String(id)).then(({ data }) => setProduct(data));
  }, []);

  return (
    <div>
      <main>
        <section className="contact">
          <div className="container">
            <h1 className="big-title">Products Detail</h1>
            <div className="about-icons">
              <Link to="/">
                <i className="about-icon bx bxs-home"></i>
              </Link>
              <span> / Product / Detail</span>
            </div>
          </div>
        </section>
        <section className="blogs">
          <div className="container">
            <form action="">
              <div className="flex-box">
                <div className="left">
                  <div className="big-img">
                    <img src={product.image} className="big-img1" />
                  </div>
                  <div className="images">
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img12.png"
                      />
                    </div>
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img13.png"
                      />
                    </div>
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img16.png"
                      />
                    </div>
                    <div className="small-img">
                      <img
                        className="img-tt"
                        src="/src/assets/images/img15.png"
                      />
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="pname">{product.name}</div>
                  <div className="ratings">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="price">
                    Price: <span>$ {product.price}</span>
                  </div>
                  <div className="size">
                    <p>Size :</p>
                    <input
                      type="text"
                      className="psize active"
                      defaultValue="M"
                      readOnly
                    />
                    <input
                      type="text"
                      defaultValue="L"
                      className="psize"
                      readOnly
                    />
                    <input
                      type="text"
                      defaultValue="XL"
                      className="psize"
                      readOnly
                    />
                    <input
                      type="text"
                      defaultValue="XXL"
                      className="psize"
                      readOnly
                    />
                  </div>
                  <div className="description">
                    <p>Descripiton:</p>
                    <p className="des">{product.description}</p>
                  </div>
                  <div className="quantity">
                    <p>Quantity :</p>
                    <input
                      type="number"
                      min={1}
                      step={1}
                      max={5}
                      defaultValue={1}
                    />
                  </div>

                  <div className="btn-box">
                    <button className="cart-btn">Add to Cart</button>
                    <button className="buy-btn">Buy Now</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
