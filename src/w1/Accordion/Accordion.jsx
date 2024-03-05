import React, { useState } from 'react';
import './Accordion.css'

function Accordion({data}) {

    const [activeAccordionIndex, setActiveAccordionIndex] = useState(0)

    const handleClick = (index) => {
        if(activeAccordionIndex === index) return setActiveAccordionIndex(null);
        setActiveAccordionIndex(index);
        
    }

  return (
    <div>
        {data.map((item, idx) => (
        <div className="wrapper-acc" key={item.id}>
            <div className="question" onClick={() => handleClick(idx)}>
                {item.title}
                <span className='icon'>{idx === activeAccordionIndex ? "+" : "-"}</span>
                </div>

            <div className={idx === activeAccordionIndex ? "answer" : "hidden"}>{item.info}</div>
        </div>
    ))}
    </div>
  )
}

export default Accordion