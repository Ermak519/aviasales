import React from 'react';
import { useSelector } from 'react-redux';
import { Empty } from 'antd';
import { TicketsFilter } from '../TicketsFilter';
import { TicketSort } from '../TicketSort';
import { TicketList } from '../TicketList';

import Logo from '../../assets/img/logo.svg';
import Plane from '../../assets/img/plane.svg';
import './App.scss';

const App = () => {
  const { options } = useSelector((state) => state.filterReducer);

  return (
    <main className="app">
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="aviasales logo" />
        </div>
      </header>
      <section className="main">
        <aside className="main__filter ">
          <TicketsFilter />
        </aside>
        <section className="main__app">
          <div className="main__ticket-filter">
            <TicketSort />
          </div>
          {options.length !== 0 ? (
            <div className="main__ticket-list">
              <TicketList />
            </div>
          ) : (
            <Empty
              image={Plane}
              imageStyle={{
                height: 60,
              }}
              description={<span>Рейсов, подходящих под заданные фильтры, не найдено</span>}
            />
          )}
        </section>
      </section>
    </main>
  );
};

export default App;
