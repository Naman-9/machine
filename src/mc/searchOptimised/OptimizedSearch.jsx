import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react'

function OptimizedSearch() {

  let timer; 

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // if the api returns/ has more data or not
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const observer = useRef();


  // Intersection observer
  const lastElement = (node) => {
    if(loading) return;
    // disconnect from previous node
    if(observer.current) observer.current.disconnect(); 

    observer.current = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting && hasMore) {
        // when we intersect page will inc auto..
        // isIntersecting -- property  - this is added 
        // by intersectoin obs initial- false once intersect - true
        setPage((prev) => prev + 1);
      }
    });

    // if node exists observe that node
    if(node) observer.current.observe(node);
  }

  useEffect(() => {
    setLoading(true);
    const getSearchItems = async () => {
      // using paginated api
      const shows = await axios.get(`https://openlibrary.org/search.json?title=${query}&page=${page}`);
      setHasMore(shows.data.docs.length > 0);
      setLoading(false);
      setData((prev) => {
        return [...new Set([...prev, ...shows.data.docs.map((show) => show.title)])];
      })
    };
    getSearchItems();
  }, [query, page]);


  useEffect(() => {
    setData([]);
  },[query])

  // it will wait for 1 sec to make the api call if in b/w get any req ++
  const handleChange = (e) => { 
    if(timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setQuery(e.target.value);
      // whenever the input in search changes we want to show first page of it
      setPage(1);
    }, 1000);

  };

  return (  
    <div className="mt-10">
      <div className='flex flex-col justify-center items-center gap-2'>
      <input className='border-black border-2 w-1/3' type="text" onChange={(e) => handleChange(e)} />

      {data.map((show, idx) => {
        if(data.length === idx + 1) {
          return (
          <div key={idx} ref={lastElement} className=''>{show}</div>
          ); 
        }
        else {
          return (
            <div key={idx} className=''>{show}</div>
            
          ) 
        }
      })}

      <div>{loading && <h1 className='bg-green-500 w-full text-black'>Loading...</h1>}</div>
    </div>

    </div>
  )
}

export default OptimizedSearch


/**
 * Intersection Observer:::  track any node element can check certain element is visible/intersectig or not
 */