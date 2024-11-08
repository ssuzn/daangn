import React, { useState } from 'react';
import styled from 'styled-components';

import { GoSearch } from "react-icons/go";
function SearchBar() {
    // 검색창 상태 관리
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // 예시 검색 데이터
    const items = [
        { id: 1, title: "중고 노트북", category: "전자기기" },
        { id: 2, title: "중고 자전거", category: "운동" },
        { id: 3, title: "의자", category: "가구" },
        { id: 4, title: "책상", category: "가구" },
        { id: 5, title: "중고차", category: "자동차" },
    ];

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term === "") {
            setSearchResults([]);
        } else {
            const filteredResults = items.filter((item) => 
            item.title.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(filteredResults);
        }
    };

  return (
    <React.Fragment>
            <Search>
                <SearchIcon />
                    <Input
                    type="text"
                    placeholder="물품이나 동네를 검색해보세요"
                    value={searchTerm}
                    onChange={handleSearch}
                    />
            </Search>
            {searchTerm && (
                <SearchResults>
                    {searchResults.length > 0 ? (
                        searchResults.map((item) => <ResultItem key={item.id}>{item.title}</ResultItem>)
                    ) : (
                        <NoResults>
                            검색 결과가 없습니다.
                        </NoResults>
                    )}
                </SearchResults>
            )}
    </React.Fragment>
  )
}

export default SearchBar;

const Search = styled.div`
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

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  z-index: 1000;
`;

const ResultItem = styled.div`
  padding: 8px 0;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const NoResults = styled.div`
  padding: 8px 0;
  color: #888;
  font-size: 14px;
  text-align: center;
`;