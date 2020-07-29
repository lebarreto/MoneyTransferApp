import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  margin: 60px 100px;
`;

export const Content = styled.div`
  width: 993px;
`;

export const Header = styled.div`
  margin-left: 120px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderInfo = styled.div``;

export const HeaderButton = styled.div`
  button {
    background: #ffffff;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
    margin-left: 20px;
    height: 34px;
    width: 34px;

    &:hover {
      opacity: 0.8;
    }

    svg {
      color: #1f2933;
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
`;

export const Available = styled.p`
  margin-top: 15px;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;

  color: #f364a2;

  small {
    color: #616e7c;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const SendMoneyContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FromContent = styled.div`
  display: block;
  margin-left: 120px;
`;

export const From = styled.div`
  align-items: center;
  margin-top: 50px;
  background-color: #f5f7fa;
  border-radius: 8px;
  display: flex;

  p {
    margin-top: 10px;
    margin-left: 20px;
  }

  .container-dropdown {
    align-items: center;
    min-height: 40px;
    display: flex;
  }

  .currencyInfo {
    margin-bottom: 20px;
    margin-left: 5px;
  }
`;

export const FromCurrency = styled.div`
  margin-top: 30px;
  width: 267px;
  height: 128px;
  background: #f5f7fa;
  border-radius: 8px;
  border: 1px solid #f5f7fa;

  p {
    margin-left: 30px;
    margin-top: 20px;
    font-size: 14px;
    line-height: 17px;
    color: #52606d;
  }
`;
