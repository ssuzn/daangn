import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function SearchPostList() {
    const searchTerm = useSelector((state) => state.search.searchTerm);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/fleamarket/${id}`);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/dummy-post.json");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    // 검색어로 게시물 필터링
    if (searchTerm) {
      const results = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(results);
    }
  }, [searchTerm, posts]);

  return (
    <React.Fragment>
      <PostListContainer>
          {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostBox>
                  <Post key={post.id} onClick={() => handlePostClick(post.id)}>
                <Thumbnail src={post.imageUrl} />
                <Title>{post.title}</Title>
                <Price>{post.price.toLocaleString()}원</Price>
              </Post>
        </PostBox>
            ))
        ) : (
            <NoResults>검색 결과가 없습니다.</NoResults>
        )}
      </PostListContainer>
    </React.Fragment>
  );
}

export default SearchPostList;

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 기본 4열 */
  gap: 30px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 화면이 줄어들면 3열 */
  }

  @media (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr); /* 더 줄어들면 2열 */
  }
`;

const Post = styled.div`
  width: 100%;
  max-width: 250px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s linear;

  &: hover {
    scale: 1.05;
  }
`;

const Title = styled.div`
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 말줄임표 표시 */
  white-space: nowrap; /* 텍스트를 한 줄로 유지 */
  margin-bottom: 8px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const NoResults = styled.div`
  font-size: 18px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
