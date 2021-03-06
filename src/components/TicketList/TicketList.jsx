import React, { useEffect } from 'react';
import { List, Button, Spin, Progress, BackTop } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { addTickets } from '../../store/actions/ticketListActions';

import { getTicketsData, uploadNewTickets } from '../../store/middlewares/thunks';

import { Ticket } from '../Ticket';

import './TicketList.scss';

const TicketList = () => {
  const { tickets, listStatus, lengthOfList, allTickets, searchId, ticketsProgress } = useSelector(
    (state) => state.ticketListReducer
  );

  const { ticketSort } = useSelector((state) => state.sortReducer);

  const { options, labels } = useSelector((state) => state.filterReducer);

  const numberOfStops = {
    'Без пересадок': 0,
    '1 пересадка': 1,
    '2 пересадки': 2,
    '3 пересадки': 3,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketsData());
  }, [dispatch]);

  useEffect(() => {
    if (!allTickets && searchId) {
      const intervalQuery = setInterval(() => {
        dispatch(uploadNewTickets(searchId));
      }, 3000);
      return () => clearInterval(intervalQuery);
    }
  });

  const arrTickets = [...tickets]
    .filter((item) => {
      const transfers = item.segments[0].stops.length + item.segments[1].stops.length;

      if (labels.length === options.length) return transfers <= 3;

      return options.some((option) => numberOfStops[option] === transfers);
    })
    .sort((obj1, obj2) => {
      if (ticketSort === 'cheap') return obj1.price - obj2.price;
      return (
        obj1.segments[0].duration + obj1.segments[1].duration - (obj2.segments[0].duration + obj2.segments[1].duration)
      );
    });

  const showTickets = arrTickets.filter((item, i) => i < lengthOfList);

  const BackTopStyle = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

  return listStatus !== 'loading' ? (
    <>
      <BackTop>
        <div style={BackTopStyle}>
          <ArrowUpOutlined />
        </div>
      </BackTop>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={showTickets}
        renderItem={(ticket) => (
          <List.Item>
            <Ticket className="ticket" ticket={ticket} />
          </List.Item>
        )}
      />
      <Button
        className="list-button"
        type="primary"
        onClick={() => {
          dispatch(addTickets());
        }}
      >
        Показать еще 5 билетов!
      </Button>
    </>
  ) : (
    <>
      <Progress className="list-progress" status="active" percent={ticketsProgress} showInfo={false} />
      <Spin className="list-spin" size="large" />
    </>
  );
};

export default TicketList;
