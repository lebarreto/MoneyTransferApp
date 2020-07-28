import React from 'react';
import {
  FiGrid,
  FiRepeat,
  FiShuffle,
  FiCreditCard,
  FiDatabase,
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
} from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <Header>
        <Info>
          <Image src={personImg} />
          <Name>Letícia Barreto</Name>
          <Code>2312T45B</Code>
        </Info>

        <Menu key="1" to="/">
          <FiGrid color="#3E4C59" size={20} />
          <Text>Services</Text>
        </Menu>
        <Menu key="2" to="/">
          <FiRepeat color="#3E4C59" size={20} />
          <Text>Transactions</Text>
        </Menu>
        <Menu key="3" to="/">
          <FiShuffle color="#3E4C59" size={20} />
          <Text>Send Money</Text>
        </Menu>
        <Menu key="4" to="/">
          <FiCreditCard color="#3E4C59" size={20} />
          <Text>Cards</Text>
        </Menu>
        <Menu key="5" to="/">
          <FiDatabase color="#3E4C59" size={20} />
          <Text>History</Text>
        </Menu>
      </Header>
    </Container>
  );
};

export default Sidebar;
