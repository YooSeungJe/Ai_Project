import { styled } from 'styled-components';
import { STYLE } from '../../styles/commonStyle';

export const Wrap = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const AreaList = styled.ul`
  width: 100%;
  display: flex;
  gap: 3.5rem;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  li {
    position: relative;
    padding: 1.6rem 0;
    font-size: 1.8rem;
    font-weight: 400;
    color: #999;
    cursor: pointer;
    &.selected {
      font-weight: 600;
      color: ${STYLE.mainColor};

      &::after {
        display: block;
        content: '';
        width: 100%;
        height: 0.4rem;
        background-color: ${STYLE.mainColor};
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2.4rem 0 4rem;
`;

export const SearchForm = styled.form`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 25rem;
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 0.6rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #999;

  &:focus {
    outline: 1px solid ${STYLE.mainColor};
  }
`;

export const SearchImgBtn = styled.button`
  width: 2rem;

  img {
    width: 100%;
  }
`;

export const ChatListContainer = styled.div`
  width: 800px;
  margin: 0 auto 2.5rem;
`;

export const ChatLists = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;