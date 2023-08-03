import React, { useState } from 'react';
import * as S from './style';
import { BiHeart } from 'react-icons/bi';
import { ROUTE } from '../../../constants/routes/routeData.tsx';
import { Link } from 'react-router-dom';
import Pagination from '../../commons/Pagination/index.tsx';
import { useGetUserPostQuery } from '../../../hooks/query/useGetUserPostQuery.ts';

const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const options: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('en-US', options).split('/').reverse().join('/');
};

const List = () => {
  const { data: postList } = useGetUserPostQuery();
  console.log(postList);
  const postsPerPage = 10;
  const totalPosts: any = postList?.data?.length;
  const totalPages: number | undefined = Math.ceil(totalPosts / postsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList?.data?.slice(indexOfFirstPost, indexOfLastPost);

  if (!currentPosts) {
    return <div>Loading...</div>;
  }

  return (
    <S.Wrap>
      <S.List>
        {currentPosts.map(post => (
          <Link to={`${ROUTE.FREEDETAIL.link}/${post.id}`} key={post.id}>
            <S.Post>
              <S.LeftDiv>
                <S.PostHeader>{post.title}</S.PostHeader>
                <S.PostUser>
                  <S.PostDate>{formatDate(post.created_at)}</S.PostDate>
                </S.PostUser>
              </S.LeftDiv>
              <S.HeartDiv>
                <S.HeartContainer>
                  <BiHeart size="25" color="#9747ff" style={{ verticalAlign: 'middle' }} />
                  <S.PostHeart>{post.like}</S.PostHeart>
                </S.HeartContainer>
              </S.HeartDiv>
            </S.Post>
          </Link>
        ))}
      </S.List>
      <S.PageNumber>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </S.PageNumber>
    </S.Wrap>
  );
};

export default List;
