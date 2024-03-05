import React, { useEffect, useState } from 'react';

function PaginationApp() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] =  useState(0);

  const fetchProduct = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`);
    const data = await res.json();
    if (data && data.products) {
        setProducts(data.products);
        setTotalPages(data.total / 10);  // 10 per page
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    console.log('-------------------')
    if(selectedPage >=1 &&
       selectedPage <= totalPages &&
       selectedPage !== page
    ) setPage(selectedPage);
  }

  return (
    <div className="grid">
      {products.length > 0 && (
        <div className="products grid m-5 gap-4 grid-cols-3">
          {products.map((product, idx) => {
            return (
              <span
                className="product__single h-64 rounded-md bg-slate-400 text-center cursor-pointer "
                key={idx}
              >
                <img
                  className="w-full h-4/5 object-cover mb-2"
                  src={product.thumbnail}
                  alt={product.name}
                />
                <h2 className="font-bold">{product.title}</h2>
              </span>
            );
          })}
        </div>
      )}

{/* pagination */}
      {products.length > 0 && (
        <div className={`p-10 mt-3.5 flex justify-center`}>
          <span className={`${page > 1 ? "" : "hidden"} px-4 py-5 cursor-pointer border-2`} onClick={() => selectPageHandler(page - 1)}>◀</span>
          {[...Array(totalPages)].map((_, i) => {
            return( 
                <span 
                    key={i} 
                    className={ `${page === i+1 ? "bg-gray-400" : "bg-white"} px-4 py-5 cursor-pointer border-2`}
                    onClick={() => selectPageHandler(i+1)}
                > {i + 1} 
                </span> )
          })}
          <span className={`${page < totalPages ? "" : "hidden"} px-4 py-5 cursor-pointer border-2`} onClick={() => selectPageHandler(page + 1)}>▶</span>
        </div>
      )}

    </div>
  );
}

export default PaginationApp;
