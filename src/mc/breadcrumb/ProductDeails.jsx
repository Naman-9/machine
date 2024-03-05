import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

function ProductDeails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
  }, [id]);

  return (
    <>
      <div className="m-16">
        <h1>Product Detials</h1>
        <BreadCrumb />
        <div className="flex flex-row m-5">
          <img src={product.thumbnail} alt="" className="h-1/2" />
          <div>
            <h1>{product.title}</h1>
            <h5>{product.description}</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDeails;
