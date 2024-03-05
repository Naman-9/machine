// import React from 'react'
// import Comment from './Comment'

// const comments = {
//   id: 1,
//   items: [
//     {
//       id: 324,
//       value: 'hello ',
//       items: [
//         {
//           id: 3245,
//           value: 'Word ',
//           items: [
//             {
//               id: 3324,
//               value: 'working ',
//               items: [
//                 {
//                   id: 32245,
//                   value: 'Fine.. ',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: 32423,
//       value: '..... ',
//       items: [
//         {
//           id: 3435245,
//           value: 'Word ',
//           items: [
//             {
//               id: 3325424,
//               value: 'working ',
//               items: [
//                 {
//                   id: 32223445,
//                   value: 'Fine.. ',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };


// export default function NestedComment() {
//   return (
//     // <Comment  comments = {comments} />
//     <></>
//   )
// }


// /*
//   from demo
//     Observe:
//       1. Figure Out the Data Structure    :
//                  Here, Everytime adding a comment -> parent child relationship 
//                   is formed. tfore we need a sturcture that maintains a parent child relationship
//                   with each comment.
//                   And, this needs to be done dynamically.
//                   {
//                     id: ,
//                     name: ,
//                     items: [
//                       {
//                         id: ,
//                         name: ,
//                         items: []
//                       }
//                     ]
//                   }
      
//       2. Create  the comment box UI along with del, reply
//       3. write logic for reply, edit, delete functions to structure data.
// */
