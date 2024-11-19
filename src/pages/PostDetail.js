import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../utils/post";
import styled from "styled-components";
import Loading from "../components/Loading";
import defaultProfile from "../assets/images/default-profile.png";

function PostDetail() {
  // url에서 id 추출
  const { id } = useParams();
  // id 맞는 하나의 포스트
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  // id로 해당 post 찾기
  useEffect(() => {
    const getPostById = async () => {
      setIsLoading(true);
      const data = await getPost(); // 모든 posts 가져오기
      const selectedPost = data.find((post) => post.id === parseInt(id)); // posts 중 id 일치한 post 선택
      setPost(selectedPost); // 선택한 post로 post 업데이트
      setIsLoading(false);
    };
    getPostById();
  }, [id]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getPost(); // post 가져오기
      setPosts(data); // posts 배열 업데이트
    };
    getPosts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <React.Fragment>
      <PostDetailContainer>
        <PostDetailBox>
          <LeftSection>
            <ProductImg src={post.imageUrl} alt={post.title} />

            <ProfileSection>
              <ProfileIcon src={defaultProfile} />
              <UserInfo>
                <Nickname>둥둥</Nickname>
                <Region>노원구</Region>
              </UserInfo>
            </ProfileSection>
          </LeftSection>

          <RightSection>
            <Desc>
              <Title>{post.title}</Title>
              <Category>{post.category}</Category>
              <Price>{post.price.toLocaleString()}원</Price>
              <Description>{post.description}</Description>
            </Desc>

            <Side>
              채팅 {post.chat} ∙ 관심 {post.like} ∙ 조회 {post.viewNum}
            </Side>
          </RightSection>
        </PostDetailBox>
      </PostDetailContainer>

      <MoreSection>
        <H3>인기매물</H3>
        <PostList>
          {posts.map((post) => (
            <PostItem key={post.id}>
              <Thumbnail src={post.imageUrl}></Thumbnail>
              <SmallTitle>{post.title}</SmallTitle>
              <SmallPrice>{post.price.toLocaleString()}원</SmallPrice>
              <SmallRegion>{post.region}</SmallRegion>
            </PostItem>
          ))}
        </PostList>
      </MoreSection>
    </React.Fragment>
  );
}

export default PostDetail;

const PostDetailContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
`;

const PostDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
`;

const LeftSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RightSection = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ProductImg = styled.img`
  width: 100%;
  min-width: 350px;
  margin-bottom: 15px;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileIcon = styled.img`
  width: 65px;
  border-radius: 50%;
  overfit: cover; /* 이미지 잘리지 않고 채워지도록 */
`;

const UserInfo = styled.div`
  margin-left: 13px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Nickname = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Region = styled.div`
  font-size: 14px;
  color: #7c7c7c;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const Category = styled.p`
  font-size: 15px;
  color: #868b94;
  text-decoration: underline;
  cursor: pointer;
  margin-top: -20px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;

const Side = styled.p`
  font-size: 14px;
  color: #868b94;
  margin-top: 100px;
`;

const MoreSection = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
`;

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 50px;
  row-gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const PostItem = styled.div`
  width: 100%;
  max-width: 250px;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.05);
  }
`;

const SmallTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SmallPrice = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SmallRegion = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
