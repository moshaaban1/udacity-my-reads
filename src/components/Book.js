import React from "react";
import { upperCaseSplit } from "../utils/helpers";

function Book(props) {
   var bookOptions = ["currentlyReading", "wantToRead", "read", "none"];

   return (
      <li>
         <div className="book">
            <div className="book-top">
               <div
                  className="book-cover"
                  style={{
                     width: 128,
                     height: 193,
                     backgroundImage: `url(${props.img})`
                  }}
               />
               <div className="book-shelf-changer">
                  <select
                     defaultValue={props.shelf}
                     onChange={e =>
                        props.updateShelf(e.target.value, props.book)
                     }
                  >
                     <option value="move" disabled>
                        Move to...
                     </option>
                     {bookOptions.map(option => (
                        <option value={option} key={props.id + option}>
                           {upperCaseSplit(option)}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
            <div className="book-title">{props.title}</div>
            <div className="book-authors">{props.authors}</div>
         </div>
      </li>
   );
}

export default Book;
