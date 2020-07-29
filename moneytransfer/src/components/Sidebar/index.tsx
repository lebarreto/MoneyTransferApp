import React, { useState } from 'react';
import {
  FiGrid,
  FiRepeat,
  FiShuffle,
  FiCreditCard,
  FiDatabase,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';

import personImg from '../../assets/person.png';
import {
  Container,
  Header,
  Image,
  Name,
  Code,
  Menu,
  Text,
  Info,
  Footer,
} from './styles';

const Sidebar: React.FC = () => {
  const [moneyActive, setMoneyActive] = useState(true);

  return (
    <Container>
      <Header>
        <Info>
          <Image src={personImg} />
          <Name>Letícia Barreto</Name>
          <Code>2312T45B</Code>
        </Info>

        <Menu key="1" to="/service">
          <FiGrid size={20} />
          <Text>Services</Text>
        </Menu>
        <Menu key="2" to="/transaction">
          <FiRepeat size={20} />
          <Text>Transactions</Text>
        </Menu>
        <Menu
          key="3"
          to="/"
          onClick={() => setMoneyActive(!moneyActive)}
          active={moneyActive}
        >
          <FiShuffle size={20} />
          <Text>Send Money</Text>
        </Menu>
        <Menu key="4" to="/cards">
          <FiCreditCard size={20} />
          <Text>Cards</Text>
        </Menu>
        <Menu key="5" to="/history">
          <FiDatabase size={20} />
          <Text>History</Text>
        </Menu>

        <Footer>
          <Menu key="6" to="/settings">
            <FiSettings size={20} />
            <Text>Settings</Text>
          </Menu>
          <Menu key="7" to="/logout">
            <FiLogOut size={20} />
            <Text>Log Out</Text>
          </Menu>
        </Footer>
      </Header>
    </Container>
  );
};

export default Sidebar;
