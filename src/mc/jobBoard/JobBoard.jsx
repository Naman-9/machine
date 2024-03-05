import React, { useEffect, useState } from 'react';
const API_ENDPOINT = 'https://hacker-news.firebaseio.com/v0';
const ITEMS_PER_PAGE = 6;
const DATA = {
  by: 'ea016',
  id: 39379882,
  score: 1,
  text: '(Photoroom&#x27;s CTO here)<p>TL;DR; We&#x27;re looking for a seasoned engineer who has experience building easy-to-use public web APIs with Node.js<p>Our goal: allow anyone to edit images by typing an URL. Think of it as Photoroom-in-a-box, where the interface is an URL<p>For instance, you can call: <a href="https:&#x2F;&#x2F;beta-sdk.photoroom.com&#x2F;v2&#x2F;edit?background.color=blue&amp;outputSize=1000x1000&amp;padding=0.1&amp;imageUrl=IMAGE_URL_GOES_HERE">https:&#x2F;&#x2F;beta-sdk.photoroom.com&#x2F;v2&#x2F;edit?background.color=blue...</a> and get your edited image back. (here it&#x27;s missing an API key)<p>The first version is live, but there&#x27;s so much we want to build: text editing, new AI capabilities (&quot;turn that t-shirt from red to blue&quot;) and so much more<p>About you: our main requirement is that you have a track record of to use and scalable.<p>Our stack: Node 18 deployed on a serverless stack. Ideally you&#x27;d have a lot of experience in Node&#x2F;TypeScript but that&#x27;s not a strong requirement if you can adapt to best practices quickly. We&#x27;re sharing a lot of the rendering code with our apps (in Rust, C). While you won&#x27;t have to dig into that part of the stack you&#x27;ll be able to if you&#x27;re curious<p>You&#x27;ll find more details in the offer here: <a href="https:&#x2F;&#x2F;jobs.lever.co&#x2F;photoroom&#x2F;29260c53-a84f-4d4f-a322-3bdc8540cdb7?lever-origin=applied&amp;lever-source%5B%5D=yc" rel="nofollow">https:&#x2F;&#x2F;jobs.lever.co&#x2F;photoroom&#x2F;29260c53-a84f-4d4f-a322-3bdc...</a>',
  time: 1707980454,
  title: 'PhotoRoom (YC S20) Is Hiring an API Designer in Paris (Node, Rust)',
  type: 'job',
};

function JobPosting({ url, title, by, time }) {
    const formattedTime = new Date(time * 1000).toLocaleString();
  return (
    <div className=" bg-pink-300 p-2 rounded-lg flex flex-col" role="listItem">
      <h2 className="post title m-0 font-semibold text-xl">
        <a 
            href={url}
            target='_blank'
            rel='noopener'
        >
            {title}
        </a>
      </h2>
      <span className='post-metadata text-base font-medium text-amber-950 '>
        By {by} - {formattedTime}
      </span>
    </div>
  );
}

function JobBoard() {
    const [jobs, setJobs] = useState([DATA, DATA]);
    const [jobsId, setJobsId] = useState(null);
    const [fetchingDetails, setfetchingDetails] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const fetchItems = async (currentPage) => {
        setCurrentPage(currentPage);
        setfetchingDetails(true);

        let jobsList = jobsId;
        if(jobsList === null) {
            console.log("fetching")
            const response = await fetch(`${API_ENDPOINT}/jobstories.json`)
            jobsList = await response.json();
            setJobsId(jobsList);
        }

        // how many id's needs to render 
        const jobsIdsForPage = jobsList.slice(
            currentPage * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );

        // Promise.all => discard if any one fails
        const jobsForPage = await Promise.all(
            jobsIdsForPage.map(jobId => 
                fetch(`${API_ENDPOINT}/item/${jobId}.json`)
                .then(res => res.json())
            )
        )

        setJobs([...jobs, ...jobsForPage]);
        setfetchingDetails(false);

    }
    

    useEffect(() => {
        if(currentPage === 0) fetchItems(currentPage);
    },[])

  return (
    <div className="app w-11/12 mx-auto flex flex-col gap-5 m-2">
      <h1 className='p-2 font-bold '>Hacker News Job Board</h1>
      {( jobsId === null || jobs.length < 1) ? (
        <p className='font-bold text-2xl m-2'>Loading...</p>
      ) : (
        <div className='flex flex-col gap-3 w-8/12'>
          <div className="jobs grid gap-y-4" role="list">
            {jobs.map((job, idx) => {
              return <JobPosting {...job} key={idx} />;
            })}
          </div>
          <button 
            className='bg-orange-500 w-1/2 p-2 rounded-full mx-auto'
            onClick={() => fetchItems(currentPage + 1)}
            // edge Case -> to disable btn while loading otherwise multiple fetch requests
            disabled={fetchingDetails}
        >{fetchingDetails ? "Loading...": "Load More Jobs"  }
        </button>
        </div>
      )}
    </div>
  );
}

export default JobBoard;
