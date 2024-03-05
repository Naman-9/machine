

import React, { useEffect, useState } from 'react';
import { items } from './items';

function MultiFilter() {

    let filters = [
        'bags',
        'watches',
        'electronics',
        'shoes',
        'clothing',
        'home',
        'accessories',
        'appliances',
        'furniture',
        'fashion',
        'travel',
        'fitness',
        'sports',
        'formal',
        'vintage',
        'eyewear',
        'gaming',
        'kitchen',
        'bedding',
        'casual',
        'audio',
      ];

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);


  const handleCategoryButtonClick = (selectedCategory) => {

    if(selectedFilters.includes(selectedCategory)) {
        setSelectedFilters((prev) => prev.filter((el) => el != selectedCategory));
    }
    else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
    }

  };

  const filterItems = () => {
    if(selectedItems.length) {
        let tempItems = selectedFilters.map((selectedCategory) => {
            return items.filter((items) => items.category === selectedCategory);
        });
        setSelectedItems(tempItems.flat());
    }
    else {
        setSelectedItems([...items]);
    }
  }

  useEffect(() => {
    filterItems();
  }, [selectedFilters])

 

  return (
    <div className='mx-auto mt-5'>
      <div className="category-container flex gap-2">
        {filters.map((category, idx) => (
          <button 
            key={`filters-${idx}`} 
            className={`${selectedFilters?.includes(category) ? "bg-black text-white shadow-md shadow-yellow-200": "bg-white text-black"} hover:bg-blue-600 transition-all duration-200 ease-in-out border-2 p-2 rounded`}
            onClick={() => handleCategoryButtonClick(category)}    
        >
            {category}
          </button>
        ))}
      </div>

      <div className="items-contianer p-5 grid grid-cols-4 gap-3">
        {
            selectedItems.map((item, idx) => (
                <div className="flex max-w-fit flex-col rounded-lg gap-2 p-2 border border-l-red-700 bg-red-200 shadow-md shadow-black" key={`items-${idx}`}>
                    <div className="">{item.name}</div>
                    <div className="">{item.category}</div>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default MultiFilter;
