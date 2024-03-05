// import React, { useState } from 'react';
// import {} from 'react-icons';

// let i = 1;

// function Comment({ comments }) {
//   const [input, setInput] = useState('');

//   const onAddComment = () => {};

//   return (
//     console.log('--data--', ++i, comments),
//     (
//       <div className="">
//         <div className={comments.id === 1 ? 'inputContainer' : 'commentContainer'}>
//           {comments.id === 1 ? (
//             <>
//               <input
//                 type="text"
//                 className=""
//                 autoFocus
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your comment"
//               />
//               <div className="" onClick={onAddComment}>
//                 Comment
//               </div>
//             </>
//           ) : (
//             // if item array is filled
//             <>
//               <span className="" style={{ wordWrap: 'break-word' }}>
//                 {comments.value}
//               </span>
//             </>
//           )}
//         </div>

//         <div className="" style={{ paddingLeft: 25 }}>
//             {comments?.items?.map((comnt) => {
//               return <Comment key={comnt.id} comment={comnt} />;
//             })}
          
//       </div>
//     )
//   );
// }

// export default Comment;
