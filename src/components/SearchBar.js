import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/reducers/searchSlice";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.search.searchTerm);
  
  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim(); // 검색어 가져오기
    if (searchTerm !== "") {
      dispatch(setSearchTerm(searchTerm));
      navigate("/search");
    }
  };

  return (
    <React.Fragment>
      <Search>
        <SearchIcon />
        <SearchForm onSubmit={handleSearchSubmit}>
          <Input
          name="search"
            type="text"
            placeholder="물품이나 동네를 검색해보세요"
            value={searchTerm}
            onChange={handleChange}
          />
        </SearchForm>
      </Search>
    </React.Fragment>
  );
}

export default SearchBar;

const Search = styled.div`
  display: flex;
  margin-right: 12px;
  color: #868b94;
`;

const SearchIcon = styled(GoSearch)`
  font-size: 24px;
  color: #212124;
  cursor: pointer;
  display: none;

  @media (max-width: 983px) {
    display: block;
  }
`;

const SearchForm = styled.form`

`;

const Input = styled.input`
  background-color: #f2f3f6;
  width: 288px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }

  @media (max-width: 983px) {
    display: none;
  }
`;