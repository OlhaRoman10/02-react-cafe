// // src/App.tsx
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
// import { useState } from "react";

// // import Product from './Product';

// // export default function App() {
// //   return (
// //     <>
// //       <h1>Best selling</h1>

// //       <Product
// //         name="Tacos With Lime"
// //         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
// //         price={10.99}
// //       />
// //       <Product
// //         name="Chicken Tacos"
// //          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
// //         price={8.99}
// //       />
      
// //     </>
// //   );
// // }
// interface MailboxProps {
//     username: string;
//     unreadMessages: string[];
// }
// export default function Mailbox({ username, unreadMessages }: MailboxProps) {
//     return (
//         <div>
//             <p>Hello, {username}!</p>
           
//                 <p>{unreadMessages.length > 0
//           ? `You have ${unreadMessages.length} unread messages`
//                 : "No unread messages"}
//             </p>
//         </div>
//     );
// }

// console.log("Mailbox component props: ", { username: "Alice", unreadMessages: ["Message 1", "Message 2"] });    

// interface Book {
//   id: string;
//   name: string;
// }

// const books: Book[] = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Query overview" },
// ];

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <ul style={{ padding: "12px 16px", color: "blue" }}>
//         {books.map((book) => (
//           <li key={book.id}>{book.name}</li>
//         ))}
//       </ul>
//       <p style={{ padding: "12px 16px", color: "red" }}>
//   Please update your email!
// </p>

//       <div>
// 	{[1, 2, 3].map((item, index) => {
// 	  return <p key={index}>{item}</p>;
// 	})}
// </div>
//     </>
//   );
// }

// export default function App() {

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Clicked!", event);
//     console.log("Target:", event.target); // сам <button>;
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// }

// src/App.tsx

// import { useState } from "react";

// interface Values {
//   x: number;
//   y: number;
// }

export default function App() {
  // const [values, setValues] = useState<Values>({ x: 0, y: 0 });

  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1,
  //   });
  // };
  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1,
  //   });
  // };

  return (
    <div className={css.app}>
<CafeInfo />
    </div>
    

    // <div>
    //   {/* <p>x: {values.x}, y: {values.y}</p>
    //   <button onClick={updateX}>Update x</button>
    //   <button onClick={updateY}>Update y</button> */}
   
    // </div>
  );
}


