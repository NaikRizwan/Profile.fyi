import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch, FaTimes } from "react-icons/fa";

import { NavLink } from "react-router-dom"; // Import Link from react-router-dom

const Wrapper = styled.section`
  position: relative;
  z-index: 1;

  .search {
    width: 320px;
    position: relative;
    display: flex;
    bottom: 9px;
  }

  .searchTerm {
    width: 100%;
    border: 3px solid green;
    border-right: none;
    padding: 7px;
    // height: 20px;
    border-radius: 10px 0 0 10px;
    outline: none;
    color: #9dbfaf;
  }

  .searchTerm:focus {
    color: #00b4cc;
  }

  .searchButton {
    width: 60px;
    // height: 36px;
    border: 2px solid green;
    background: cornflowerblue;
    text-align: center;
    color: #fff;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
    font-size: 20px;
  }
  .searchResultsBox {
    width: 322px;
    position: absolute;
    top: 40px; /* Adjust based on your navbar height */

    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: ${({ showResults }) => (showResults ? "block" : "none")};
    z-index: 2;
  }

  .noResults {
    padding: 10px;
    color: #999;
  }
  .searchimg {
    width: 30px;
    height: 30px;
    position: relative;
    top: 2px;
  }
  //   /*Resize the wrap to see the search bar change!*/
  //   .wrap {
  //     width: 30%;
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //   }
`;
// const Search = () => {
//   return (
//     <Wrapper>
//       <div class="wrap">
//         <div class="search">
//           <input
//             type="text"
//             class="searchTerm"
//             placeholder="What are you looking for?"
//           />
//           <button type="submit" class="searchButton">
//             <FaSearch style={{ position: "relative", top: "2px" }} />
//           </button>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Search;

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    setShowResults(true);

    if (term === "") {
      setShowResults(false);
      setSearchResults([]);
    } else {
      const results = products.filter(
        (product) =>
          product.category.toLowerCase().includes(term) ||
          product.company.toLowerCase().includes(term) ||
          product.name.toLowerCase().includes(term)
      );
      setSearchResults(results);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setShowResults(false);
    setSearchResults([]);
  };

  const closeResults = () => {
    setShowResults(false);
  };

  return (
    <Wrapper showResults={showResults}>
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
          value={searchTerm}
          onChange={handleSearch}
        />
        {/* {searchTerm && (
          <button type="button" className="searchButton" onClick={clearSearch}>
            <FaTimes style={{ position: "relative", top: "2px" }} />
          </button>
        )} */}
        {searchTerm ? (
          <button type="button" className="searchButton" onClick={clearSearch}>
            <FaTimes style={{ position: "relative", top: "2px" }} />
          </button>
        ) : (
          <button type="button" className="searchButton">
            <FaSearch style={{ position: "relative", top: "2px" }} />
          </button>
        )}
        {/* <FaSearch
          className="searchButton"
          style={{ position: "relative", top: "2px" }}
        /> */}
      </div>
      {showResults && (
        <div className="searchResultsBox">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <NavLink
                to={`/singleproduct/${result.id}`}
                key={result.id}
                onClick={closeResults}
              >
                <div style={{ padding: "5px 0px 5px 0px" }}>
                  <p>
                    <img
                      src={result.image}
                      alt={result.name}
                      className="searchimg"
                    />{" "}
                    - {result.name} &nbsp; {result.company} &#x20B9;{" "}
                    {result.price}
                  </p>
                </div>
              </NavLink>
            ))
          ) : (
            <div className="noResults">No results found</div>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default Search;
