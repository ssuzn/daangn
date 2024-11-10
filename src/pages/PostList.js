import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPost } from "../utils/post";
import { useNavigate } from "react-router-dom";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(4); // 초기 4개 포스트 표시
  const [columns, setColumns] = useState(4); // 초기 열 개수 설정

  const navigate = useNavigate();

  const handlePostClick = (id) => {
    navigate(`/fleamarket/${id}`); 
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getPost(); // post 가져오기
      setPosts(data); // posts 배열 업데이트
    };
    getPosts();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prev) => prev + columns); 
  };

  useEffect(() => {
    const updateColumns = () => {
        if (window.innerWidth > 1200) setColumns(4);
        else if (window.innerWidth > 890) setColumns(3);
        else setColumns(2);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns); // 화면 사이즈 변경 시 열 개수 변경
    return () => window.removeEventListener("resize", updateColumns); // cleanup
  }, []);

  return (
    <React.Fragment>
      <H1>중고거래 인기매물</H1>
      <PostListContainer>
        <PostBox>
          {posts.slice(0, visiblePosts).map((post) => (
            <Post 
              key={post.id}
              onClick={() => handlePostClick(post.id) }
            >
              <Thumbnail src={post.imageUrl} />
              <Title>{post.title}</Title>
              <Price>{post.price.toLocaleString()}원</Price>
            </Post>
          ))}
        </PostBox>
        {/* 더 표시할 포스트 있을 때 더보기 버튼 표시 */}
        {visiblePosts < posts.length && (
          <MoreButton onClick={loadMorePosts}>더보기</MoreButton>
        )}
      </PostListContainer>
    </React.Fragment>
  );
}

export default PostList;

const H1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 700;
`;

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

const MoreButton = styled.button`
  display: block;
  width: 50%;
  background-color: #f2f3f6;
  color: #212124;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;

  &:hover {
    background-color: #e9ecf0;
  }
`;
