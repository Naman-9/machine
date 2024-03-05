import React, { useState } from 'react';

function Cell({ filled, onClick, isDisabled, label }) {

  return (
    <button
      disabled = {isDisabled}
      className={`${
        filled ? 'cell cell-activated bg-green-500' : 'cell bg-transparent'
      }  border-2 border-black h-0 pb-20 `}
      onClick={onClick}
      aria-label={label}
    />
  );
}

function GridApp() {

    const [order, setOrder] = useState([]);
    const [isDeactivating, setIsDeactivating] = useState(false);

  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
        setOrder((prev) => {
            // will create a deepCopy if we make changes to prev it might mutate arry.
            const newOrder = prev.slice();
            newOrder.pop();

            if(newOrder.length=== 0 ){
                clearInterval(timer);
                setIsDeactivating(false);
            }

            return newOrder;
        })
    }, 300)
  }

  const activateCells = (index) => {


    const newOrder = [...order, index];
    setOrder(newOrder);

    // once the grid is full start deactivating 
    if(newOrder.length === config.flat(1).filter(Boolean).length){
        deactivateCells();
    }
  };

  return (
    <div className="wrapper flex items-center justify-center flex-col gap-4 mt-10">
      <div
        className="grid max-w-xs w-full p-5 gap-5 border-2 border-black"
        style={{ gridTemplateColumns: `repeat(${config[0].length}, 1fr)` }}
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell 
                label= {`cell-${index}`}
                key={index} 
                filled={order.includes(index)} 
                onClick={() => activateCells(index)} 
                isDisabled = {order.includes(index) || isDeactivating}
                
            />
          ) : (
            <span key={index}></span>
          );
        })}
      </div>
    </div>
  );
}

export default GridApp;


// edge Case 
/**
 * disability 
 * mutating array
 */