import React, { useState } from 'react';

function StackQueue() {
  const [valueArray, setValueArray] = useState([]);
  const [selected, setSelected] = useState("");

  const onPushClick = () => {
    if(selected === "") return alert("Select Mode first");

    const tempArray = [...valueArray];
    tempArray.push(tempArray.length + 1);
    setValueArray(tempArray);

  };

  const onPopClick = () => {
    if(selected === "") return alert("Select Mode first");

    const tempArr = [...valueArray];

    if(selected === "stack") {
        tempArr.splice(tempArr.length - 1, 1)
        setValueArray(tempArr);
    }

    if(selected === "queue") {
        tempArr.splice(0, 1);
        setValueArray(tempArr);
    };


  };

  return (
    <div className="wrapper-stackqueue flex justify-center items-center min-h-screen bg-black">
      <div className="wrapper-container flex p-6 justify-evenly items-center w-1/2 border-2 border-white px-20 rounded-md">
        <div className="left-contianer flex justify-center items-center flex-col gap-3 m-4">
          <h2 className="heading-stackqueue text-white ">Select Mode</h2>

          <div className="mode-container flex justify-center items-center gap-2">
            <div className={`mode ${selected === 'stack' ? 'bg-white text-black' : 'bg-purple-500 text-white'} p-1 rounded-md font-semibold text-xl hover:bg-gray-400 hover:text-black`} onClick={() => setSelected("stack")}>
              Stack
            </div>
            <div className="mode my-2 rounded-md text-white font-semibold text-xl">or</div>
            <div className={`mode ${selected === 'queue' ? 'bg-white text-black' : 'bg-purple-500 text-white'} p-1 rounded-md font-semibold text-xl hover:bg-gray-400 hover:text-black`} onClick={() => setSelected("queue")}>
              Queue
            </div>
          </div>

          <h2 className="heading-stackqueue text-white ">Select Operation</h2>

          <div className="mode-container flex justify-center items-center gap-2">
            <div
              className="mode bg-purple-500 p-1 rounded-md text-white font-semibold text-xl hover:bg-gray-400 hover:text-black"
              onClick={onPushClick}
            >
              Push
            </div>
            <div className="mode my-2 rounded-md text-white font-semibold text-xl">or</div>
            <div
              className="mode bg-purple-500 p-1 rounded-md text-white font-semibold text-xl hover:bg-gray-400 hover:text-black"
              onClick={onPopClick}
            >
              Pop
            </div>
          </div>
        </div>

        <div className="stackqueue-container flex justify-start flex-col-reverse items-center rounded-none border-2 border-white border-t-0 pt-1 w-20 h-52 overflow-auto overflow-x-hidden">
          {valueArray.map((value) => {
            return <div key={value} className="stackqueue-value text-center transition-opacity duration-1000 ease-in-out bg-purple-400 text-white font-semibold text-lg w-full rounded-sm border-white">{value}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default StackQueue;
