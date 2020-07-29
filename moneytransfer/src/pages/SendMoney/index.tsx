import React, { useEffect, useState, useCallback } from 'react';
import {
  FiFileText,
  FiHelpCircle,
  FiRefreshCcw,
  FiCalendar,
} from 'react-icons/fi';
import axios from 'axios';
import { Select, Input, DatePicker, Radio } from 'antd';
import { format } from 'date-fns';

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
  ChooseCurrency,
  To,
  SendMoneyDiv,
  ToCurrency,
  ChoosePlan,
  PlanContent,
} from './styles';

interface Currencies {
  id: string;
  label: string;
  value: string;
  flag: string;
}

interface Rates {
  rates: object;
}

var fx = require('money');

const SendMoney: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currencies[]>([]);
  const [rates, setRates] = useState<Rates[]>([]);

  const [selectedFromCurrency, setSelectedFromCurrency] = useState('');
  const [selectedToCurrency, setSelectedToCurrency] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const [dateVisible, setDateVisible] = useState(false);
  const [planVisible, setPlanVisible] = useState(false);

  const [valueSent, setValueSent] = useState(0);
  const [valueReceived, setValueReceived] = useState(0);

  const { Option } = Select;

  async function loadCurrencies() {
    const response = await axios.get(
      'https://my-json-server.typicode.com/juliomerisio/currency-json-server/currencies',
    );
    setCurrencies(response.data);
  }

  async function loadRates() {
    const response = await axios.get(
      'https://openexchangerates.org/api/latest.json?app_id=aa6b64650de946fb8ead0094d832368e',
    );

    setRates(response.data.rates);
  }

  useEffect(() => {
    loadCurrencies();
    loadRates();
  }, []);

  const handleFromChange = useCallback((value: string) => {
    console.log(value, 'a');
    setSelectedFromCurrency(value);
  }, []);

  const handleToChange = useCallback((value: string) => {
    console.log(value, 'a');
    setSelectedToCurrency(value);
  }, []);

  const handleDateVisible = useCallback(() => {
    setDateVisible(!dateVisible);
  }, [setDateVisible]);

  const handleDateSelected = useCallback(
    (dateString: string) => {
      const formattedDate = format(new Date(dateString), "dd '' MMMM '' yyyy");
      setSelectedDate(formattedDate);
      setDateVisible(false);
      setPlanVisible(!planVisible);
    },
    [setSelectedDate, setDateVisible, setPlanVisible],
  );

  function handleConvertToCurrency() {
    fx.rates = rates;
    fx.settings = { from: selectedFromCurrency, to: selectedToCurrency };
    const convertedValue = fx.convert(valueSent);
    setValueReceived(convertedValue);
  }

  const list = currencies.map((currency) => (
    <Option
      value={currency.value}
      key={currency.id}
      style={{ marginTop: '10px' }}
    >
      <div className="currencyInfo">
        <span role="img" aria-label={currency.label}>
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
        </span>
        {currency.label}
      </div>
    </Option>
  ));

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
          <ChooseCurrency>
            <From>
              <p>From: </p>
              <Select
                className="container-dropdown"
                onChange={handleFromChange}
                value={selectedFromCurrency}
                bordered={false}
              >
                {list}
              </Select>
            </From>
            <To>
              <p>To: </p>
              <Select
                className="container-dropdown"
                onChange={handleToChange}
                value={selectedToCurrency}
                bordered={false}
              >
                {list}
              </Select>
            </To>
          </ChooseCurrency>
          <SendMoneyDiv>
            <FromCurrency>
              <p>You send</p>
              <Input
                type="number"
                onChange={(e) => setValueSent(Number(e.target.value))}
              />
              <strong>{selectedFromCurrency}</strong>
            </FromCurrency>
            <div className="refresh">
              <button type="button" onClick={() => handleConvertToCurrency()}>
                <FiRefreshCcw size={40} color="#fff" />
              </button>
            </div>
            <ToCurrency>
              <p>Recipient gets</p>
              <div>
                <h1>{valueReceived.toFixed(2)}</h1>
                <strong>{selectedToCurrency}</strong>
              </div>
            </ToCurrency>
          </SendMoneyDiv>
          <ChoosePlan>
            <div>
              <h2>Choose a plan: </h2>
              <div>
                <small>Choose the date:</small>
                <button type="button" onClick={() => handleDateVisible()}>
                  <FiCalendar size={20} color="#52606D" />
                </button>
              </div>
            </div>
            {dateVisible && (
              <DatePicker
                onChange={(date, dateString) => handleDateSelected(dateString)}
              />
            )}
            {planVisible && (
              <>
                <PlanContent>
                  <div>
                    <Radio />
                    <p>Get </p>
                  </div>
                </PlanContent>
                <PlanContent>
                  <div>
                    <Radio />
                  </div>
                </PlanContent>
                <PlanContent>
                  <div>
                    <Radio />
                  </div>
                </PlanContent>
              </>
            )}
          </ChoosePlan>
        </SendMoneyContent>
      </Content>
    </Container>
  );
};

export default SendMoney;
