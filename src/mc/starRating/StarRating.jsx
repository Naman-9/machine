import React, { useState } from 'react'
import "./starRating.css"

function StarRating() {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

  return (
    <div className='wrapper-star'>
        <h1>Star Component</h1>
        <div className="stars">
            {
                [1,2,3,4,5].map((star, idx) => (
                    <button 
                        className="star-btn" 
                        key={idx}
                        onMouseOver={
                            () => setHover(star)
                        } 
                        onClick={() => setRating(star)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className={`star ${star <= ((rating && hover) || hover) ? 'on': 'off'}`}>
                            &#9733;
                        </span>
                    </button>
                ))
            }
        </div>
        
    </div>
  )
}

export default StarRating

/**
 * To reiterate:

&& returns the first falsy value if both operands are truthy; otherwise, it returns the last truthy value.

Examples:
0 && 3 evaluates to 0.
3 && 0 evaluates to 0.
3 && 4 evaluates to 4.
4 && 3 evaluates to 3.
|| returns the first truthy value if at least one operand is truthy; otherwise, it returns the last falsy value.

Examples:
0 || 2 evaluates to 2.
2 || 0 evaluates to 2.
3 || 3 evaluates to 3.
0 || 0 evaluates to falsy (0).
 */