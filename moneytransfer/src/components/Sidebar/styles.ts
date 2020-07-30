import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface ActiveProps {
  active?: boolean;
}

export const Container = styled.div``;

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

export const Menu = styled(NavLink)<ActiveProps>`
  margin-top: 15px;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 10px;

  svg {
    color: #3e4c59;
  }

  ${(props) =>
    props.active &&
    css`
      svg {
        color: #e8368f;
      }

      p {
        color: #e8368f;
      }
    `}
`;

export const Text = styled.p`
  color: #1f2933;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-left: 20px;
  margin-top: 20px;
`;

export const Footer = styled.footer`
  padding-top: 40px;
`;
