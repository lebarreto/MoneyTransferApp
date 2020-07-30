import styled, { css } from 'styled-components';
import 'antd/dist/antd.css';

interface RadioProps {
  checked?: boolean;
}

export const Container = styled.div`
  display: flex;
  margin: 60px 100px;
`;

export const Content = styled.div`
  width: 100%;
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

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SendMoneyContent = styled.div`
  display: block;
  width: 800px;
`;

export const ChooseCurrency = styled.div`
  display: flex;
  margin-left: 120px;
  justify-content: space-between;
`;

export const From = styled.div`
  align-items: center;
  margin-top: 50px;
  background-color: #f5f7fa;
  border-radius: 8px;
  display: flex;
  width: 250px;

  p {
    margin-top: 10px;
    margin-left: 20px;
  }

  .container-dropdown {
    align-items: center;
    min-height: 40px;
    display: flex;
    white-space: nowrap;
    overflow: auto;
    width: 300px;
    background-color: #f5f7fa;
    border-radius: 8px;
  }
`;

export const To = styled.div`
  align-items: center;
  margin-top: 50px;
  background-color: #f5f7fa;
  border-radius: 8px;
  display: flex;
  width: 250px;

  p {
    margin-top: 10px;
    margin-left: 20px;
  }

  .container-dropdown {
    align-items: center;
    min-height: 40px;
    display: flex;
    white-space: nowrap;
    overflow: auto;
    width: 300px;
    background-color: #f5f7fa;
    border-radius: 8px;
  }

  .currencyInfo {
    margin-bottom: 20px;
    margin-left: 5px;
  }
`;

export const FromCurrency = styled.div`
  margin-top: 30px;
  width: 250px;
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

  input {
    border: 0;
    font-size: 40px;
    width: 150px;
    margin-left: 30px;
    background: #f5f7fa;
    color: #323f4b;
  }

  strong {
    color: #323f4b;
  }
`;

export const SendMoneyDiv = styled.div`
  display: flex;
  margin-left: 120px;
  justify-content: space-between;

  .refresh {
    background: #f364a2;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    margin-top: 60px;
    border: 1px solid #f364a2;

    button {
      background: transparent;
      border: 0;
      margin: 0 auto;
      align-content: center;
      display: block;

      svg {
        margin-top: 5px;
      }

      &:hover {
        opacity: 0.8;
        transition: transform 1s linear;
        transform: rotate(360deg);
      }
    }
  }
`;

export const ToCurrency = styled.div`
  margin-top: 30px;
  width: 250px;
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

  div {
    display: flex;

    h1 {
      color: #323f4b;
      margin-left: 30px;
    }

    strong {
      color: #323f4b;
      margin-top: 15px;
      margin-left: 30px;
    }
  }
`;

export const ChoosePlan = styled.div`
  display: block;
  margin-left: 120px;
  margin-top: 50px;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      font-weight: 500;
      color: #1f2933;
    }

    div {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      small {
        font-weight: normal;
        font-size: 18px;
        color: #1f2933;
      }

      button {
        background: transparent;
        border: none;
        display: flex;

        svg {
          margin-top: 4px;
          margin-left: 10px;
        }
      }
    }
  }
`;

export const Plans = styled.div`
  display: block;
  flex-direction: column;
  margin-left: 120px;
  align-items: center;
`;

export const PlanContent = styled.div<RadioProps>`
  display: flex;
  border: 2px solid #e4e7eb;
  box-sizing: border-box;
  border-radius: 4px;
  width: 680px;
  height: 88px;
  margin-top: 20px;

  ${(props) =>
    props.checked &&
    css`
      background: #fff6f9;
      border: 2px solid #ff8cba;
    `}

  div.radio {
    margin-left: 30px;
    margin-top: 30px;
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #da127d !important ;
  }

  .ant-radio-checked .ant-radio-inner:after {
    background-color: #da127d;
  }

  .ant-radio:hover .ant-radio-inner {
    border-color: #da127d;
  }

  p {
    margin-left: auto;
    margin-top: 30px;
    margin-right: 30px;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-align: right;
    color: #1f2933;
  }

  div {
    margin-left: 30px;

    p {
      margin-top: 20px;
      font-weight: 500;
      font-size: 18px;
      color: #3e4c59;
      text-align: left;
    }

    small {
      display: block;
      position: relative;
      bottom: 15px;
      margin-bottom: 80px;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #616e7c;
    }
  }
`;

export const InfoContent = styled.div`
  display: block;
  border: 2px solid #e4e7eb;
  box-sizing: border-box;
  border-radius: 4px;
  width: 350px;
  height: 630px;
  margin-top: 50px;
  margin-left: 30px;

  p {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.015em;
    text-align: left;
    color: #1f2933;
    margin-top: 30px;
    margin-left: 30px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      border: 0;
      background: #ffffff;
      border-radius: 50%;
      box-shadow: 0px 2px 7px rgba(123, 135, 148, 0.28);
      display: flex;
      margin-left: 30px;

      &:hover {
        opacity: 0.8;
      }
    }

    div.sent {
      display: block;
      margin-left: 30px;

      p {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: right;
        color: #1f2933;
      }

      span {
        margin-left: 30px;
        img {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background: #da127d;
        }
      }
    }

    div.from {
      display: block;
      margin-right: 80px;

      p {
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-align: right;
        color: #1f2933;
      }

      span {
        margin-left: 30px;
        img {
          width: 20px;
          height: 20px;
          border-radius: 10px;
          background: #da127d;
        }
      }
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 2px solid #e4e7eb;
    margin: 1em 0;
    padding: 0;
  }

  div.info {
    display: block;
    margin-top: 30px;

    div.content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 30px;

      h2 {
        font-weight: normal;
        font-size: 17px;
        text-align: left;
        color: #3e4c59;
        margin-top: 10px;
      }

      strong {
        font-weight: 600;
        font-size: 18px;
        text-align: right;
        margin-right: 30px;
        color: #1f2933;
        margin-top: 3px;
      }
    }
  }

  button.confirm {
    display: flex;
    padding: 12px 116px;

    background: #f364a2;
    border: 1px solid #f364a2;
    border-radius: 4px;
    color: #ffffff;
    align-content: center;
    margin-left: 30px;
    margin-top: 180px;

    &:hover {
      opacity: 0.8;
    }
  }
`;
