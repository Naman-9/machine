import React from 'react';

function W1jsc() {

  const debounce = (func, delay) => {
    let timerId;

    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  const search = (query) => {
    console.log(query);
  }

  const debouncedSearch = debounce(search, 1000);

  const handleChange = (query) => {
    debouncedSearch(query);
  };

  return (
    <div> 
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default W1jsc;

/**
 * 
 *  debounce func takes func, dealy timming
 *  set Context to this
 *  args to arguments
 *  clearTimerId
 *  timerId = ---
 * 
 * 
 * for using we need to create one instance of debounce
 * **funciton then on every change we can update debouncedSearch with the "query"
 */
