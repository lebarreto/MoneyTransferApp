import React, { useEffect, useState, useCallback } from 'react';
import {
  FiFileText,
  FiHelpCircle,
  FiRefreshCcw,
  FiCalendar,
  FiArrowRight,
  FiDollarSign,
  FiShuffle,
} from 'react-icons/fi';
import axios from 'axios';
import { Select, Input, DatePicker, Radio } from 'antd';
import { format } from 'date-fns';
import moment from 'moment';
import swal from 'sweetalert';

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
  Plans,
  MainContent,
  InfoContent,
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
  const [selectedToImgCurrency, setSelectedToImgCurrency] = useState('');
  const [selectedFromImgCurrency, setSelectedFromImgCurrency] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [plan, setPlan] = useState('');
  const [info, setInfo] = useState('');
  const [dateUTC, setDateUTC] = useState('');

  const [dateVisible, setDateVisible] = useState(false);
  const [planVisible, setPlanVisible] = useState(false);
  const [checkedExpress, setCheckedExpress] = useState(false);
  const [checkedStandard, setCheckedStandard] = useState(false);
  const [checkedToday, setCheckedToday] = useState(false);

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
    setSelectedFromCurrency(value);
  }, []);

  const handleToChange = useCallback((value: string) => {
    setSelectedToCurrency(value);
  }, []);

  const handleDateVisible = useCallback(() => {
    setDateVisible(!dateVisible);
  }, [setDateVisible]);

  const handleDateSelected = useCallback(
    (dateString: string) => {
      if (dateString) {
        const day = new Date(dateString).getDate() + 1;
        const month = new Date(dateString).getMonth();
        const year = new Date(dateString).getFullYear();
        const formattedDate = format(
          new Date(year, month, day),
          'dd  MMMM  yyyy',
        );
        setSelectedDate(formattedDate);
      } else {
        const formattedDate = format(new Date(), 'dd  MMMM  yyyy');
        setSelectedDate(formattedDate);
      }

      const dateUTC = new Date(dateString).toUTCString();
      setDateUTC(dateUTC);

      setDateVisible(false);
      setPlanVisible(!planVisible);
    },
    [setSelectedDate, setDateVisible, setPlanVisible],
  );

  const handleCheckedPlan = useCallback(
    (e: string) => {
      if (e === 'express') {
        setCheckedExpress(true);
        setCheckedStandard(false);
        setCheckedToday(false);
        const info = `Get ${selectedDate} till 12pm`;
        setInfo(info);
      } else if (e === 'standard') {
        setCheckedExpress(false);
        setCheckedStandard(true);
        setCheckedToday(false);
        const info = `Get ${selectedDate} till 6pm`;
        setInfo(info);
      } else {
        setCheckedExpress(false);
        setCheckedStandard(false);
        setCheckedToday(true);
        setInfo('Get today till 8pm');
      }

      if (plan === e) {
        setPlan('');
      } else {
        setPlan(e);
      }
    },
    [checkedExpress],
  );

  function handleConvertToCurrency() {
    const fromImg = currencies.filter(
      (flag) => flag.value === selectedFromCurrency,
    );
    const toImg = currencies.filter(
      (flag) => flag.value === selectedToCurrency,
    );
    setSelectedFromImgCurrency(fromImg[0].flag);
    setSelectedToImgCurrency(toImg[0].flag);

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

  async function handleSubmit() {
    swal(
      'Confirmed!',
      `SentAt: ${dateUTC}, plan: ${plan}, sent: ${valueSent.toFixed(
        2,
      )}, received: ${valueReceived.toFixed(
        2,
      )}, from: ${selectedFromCurrency}, to: ${selectedToCurrency}`,
      'success',
    );
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
        <MainContent>
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
                  defaultValue={moment(new Date(), 'YYYY-MM-DD')}
                  onChange={(date, dateString) =>
                    handleDateSelected(dateString)
                  }
                />
              )}
            </ChoosePlan>
            {planVisible && (
              <Plans>
                <Radio.Group
                  onChange={(e) => handleCheckedPlan(e.target.value)}
                  value={plan}
                >
                  <PlanContent checked={checkedExpress}>
                    <div className="radio">
                      <Radio value="express" />
                    </div>
                    <div>
                      <p>Get {selectedDate} till 12pm</p>
                      <small>Express</small>
                    </div>
                    <p>$ 0.99</p>
                  </PlanContent>
                  <PlanContent checked={checkedStandard}>
                    <div className="radio">
                      <Radio value="standard" />
                    </div>
                    <div>
                      <p>Get {selectedDate} till 6pm</p>
                      <small>Standard</small>
                    </div>
                    <p>$ 1.00</p>
                  </PlanContent>
                  <PlanContent checked={checkedToday}>
                    <div className="radio">
                      <Radio value="today" />
                    </div>
                    <div>
                      <p>Get today till 8pm</p>
                      <small>Only on working days from 11am to 8pm</small>
                    </div>
                    <p>$ 1.00</p>
                  </PlanContent>
                </Radio.Group>
              </Plans>
            )}
          </SendMoneyContent>
          {plan && (
            <InfoContent>
              <p>Payment Details</p>
              <div>
                <div className="sent">
                  <p>{valueSent.toFixed(2)}</p>
                  <span>
                    <img src={selectedFromImgCurrency} alt="" />
                    {selectedFromCurrency}
                  </span>
                </div>
                <button>
                  <FiArrowRight size={25} color="#1F2933" />
                </button>
                <div className="from">
                  <p>{valueReceived.toFixed(2)}</p>
                  <span>
                    <img src={selectedToImgCurrency} alt="" />
                    {selectedToCurrency}
                  </span>
                </div>
              </div>
              <hr />
              <div className="info">
                <div className="content">
                  <FiCalendar size={20} color="#52606D" />
                  <h2>Delivery</h2>
                  <strong>{info}</strong>
                </div>
                <div className="content">
                  <FiDollarSign size={20} color="#52606D" />
                  <h2>Conversion rate</h2>
                  <strong>{valueSent.toFixed(2)}</strong>
                </div>
                <div className="content">
                  <FiShuffle size={20} color="#52606D" />
                  <h2>Recipient gets</h2>
                  <strong>{valueReceived.toFixed(2)}</strong>
                </div>
              </div>
              <button className="confirm" onClick={() => handleSubmit()}>
                Confirm
              </button>
            </InfoContent>
          )}
        </MainContent>
      </Content>
    </Container>
  );
};

export default SendMoney;
