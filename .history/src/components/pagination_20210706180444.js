import React from "react";

const Pagination = ({ paginate,postsPerPage, totalPosts}) => {
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
       
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
   <li key={number} className="page-item">
       <a onClick={() => paginate(number)}  className="page-link">
           {number}
       </a>

   </li>
                ))
             
               }
</ul>
        </nav>
       
    )
}


export default Pagination;