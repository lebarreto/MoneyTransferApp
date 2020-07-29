import React, { useEffect, useState } from 'react';
import { FiFileText, FiHelpCircle } from 'react-icons/fi';
//import fx from 'money';
import axios from 'axios';
import { Select, Input } from 'antd';

import Sidebar from '../../components/Sidebar';
import {
  Container,
  Content,
  Header,
  Title,
  Available,
  HeaderInfo,
  HeaderButton,
  SendMoneyContent,
  From,
  FromCurrency,
  FromContent,
} from './styles';

interface Currencies {
  id: string;
  label: string;
  value: string;
  flag: string;
}

const SendMoney: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currencies[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const { Option } = Select;

  async function loadCurrencies() {
    const response = await axios.get(
      'https://my-json-server.typicode.com/juliomerisio/currency-json-server/currencies',
    );
    setCurrencies(response.data);
  }

  useEffect(() => {
    // fx.base = 'USD';
    // fx.rates = {
    //   EUR: 0.745101, // eg. 1 USD === 0.745101 EUR
    //   GBP: 0.64771, // etc...
    //   USD: 1, // always include the base rate (1:1)
    //   /* etc */
    // };
    // const pounds = fx(1.99).from('USD').to('GBP');

    // console.log(pounds);
    loadCurrencies();
  }, []);

  async function handleChange(value: string) {
    console.log(value, 'a');
    setSelectedCurrency(value);
  }

  return (
    <Container>
      <Sidebar />
      <Content>
        <Header>
          <HeaderInfo>
            <Title>Send Money</Title>
            <Available>
              22,124 <small>available</small>
            </Available>
          </HeaderInfo>
          <HeaderButton>
            <button onClick={() => {}}>
              <FiFileText size={15} />
            </button>
            <button onClick={() => {}}>
              <FiHelpCircle size={15} />
            </button>
          </HeaderButton>
        </Header>
        <SendMoneyContent>
          <FromContent>
            <From>
              <p>From: </p>
              <Select
                className="container-dropdown"
                dropdownStyle={{
                  width: '50%',
                  height: '22px',
                }}
                onChange={handleChange}
              >
                {currencies.map((currency) => (
                  <Option
                    value={currency.value}
                    key={currency.id}
                    style={{ marginTop: '10px' }}
                  >
                    <div>
                      <p className="currencyInfo">
                        <img
                          src={currency.flag}
                          alt={currency.label}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '10px',
                            background: '#DA127D',
                            marginLeft: '10px',
                            marginRight: '10px',
                          }}
                        />
                        <strong>{currency.label}</strong>
                      </p>
                    </div>
                  </Option>
                ))}
              </Select>
            </From>
            <FromCurrency>
              <p>You send</p>
              <Input
                type="number"
                onChange={(e) => console.log(e.target.value)}
              />
              <p>{selectedCurrency}</p>
            </FromCurrency>
          </FromContent>
        </SendMoneyContent>
      </Content>
    </Container>
  );
};

export default SendMoney;
