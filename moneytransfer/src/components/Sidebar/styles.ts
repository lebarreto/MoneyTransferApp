import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 60px 90px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
`;

export const Image = styled.img``;

export const Name = styled.h2`
  margin-top: 15px;
`;

export const Code = styled.p`
  margin-top: 5px;
  margin-bottom: 25px;
`;

export const Menu = styled(Link)`
  margin-top: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #1f2933;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-left: 20px;
`;
