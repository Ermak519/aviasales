import React from 'react';
import propTypes from 'prop-types';
import { List, Card } from 'antd';

import './Ticket.scss';

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;
  const [departure, arrival] = segments;

  const travelTime = (duration) => {
    const hours = Math.floor(duration / 60);
    const mins = duration - hours * 60;
    return `${hours}ч ${mins}м`;
  };

  const numberOfTransfers = (arr) => {
    switch (true) {
      case arr.length === 1:
        return '1 пересадка';
      case arr.length > 1:
        return `${arr.length} пересадки`;
      default:
        return 'Без пересадок';
    }
  };

  const cityOfTransfers = (arr) => {
    if (arr.length === 0) return 'Прямой рейс';
    return arr.join(', ');
  };

  const timeOfPlane = (str, duration) => {
    const date = new Date(str);
    const flyHours = duration * 60 * 1000;
    const newDate = new Date(date.getTime() + flyHours);
    return `${date.getHours()}:${date.getMinutes()} - ${newDate.getHours()}:${newDate.getMinutes()}`;
  };

  const departureData = [
    {
      info: `${departure.origin} - ${departure.destination}`,
      data: timeOfPlane(departure.date, departure.duration),
    },
    {
      info: 'В пути',
      data: travelTime(departure.duration),
    },
    {
      info: numberOfTransfers(departure.stops),
      data: cityOfTransfers(departure.stops),
    },
  ];

  const arrivalData = [
    {
      info: `${arrival.origin} - ${arrival.destination}`,
      data: timeOfPlane(arrival.date, arrival.duration),
    },
    {
      info: 'В пути',
      data: travelTime(arrival.duration),
    },
    {
      info: numberOfTransfers(arrival.stops),
      data: cityOfTransfers(arrival.stops),
    },
  ];

  return (
    <Card className="ticket__card" style={{ width: 510, height: 184, borderRadius: 5, padding: 20 }} hoverable>
      <div className="ticket__header">
        <div className="ticket__price">{price}</div>
        <div className="ticket__logo">
          <img src={`https://pics.avs.io/99/36/{${carrier}}.png`} alt="carrier" />
        </div>
      </div>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={departureData}
        renderItem={(item) => (
          <List.Item>
            <div className="flight">
              <div className="ticket__plane-title">{item.info}</div>
              <div className="ticket__plane-data">{item.data}</div>
            </div>
          </List.Item>
        )}
      />
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={arrivalData}
        renderItem={(item) => (
          <List.Item>
            <div className="flight">
              <div className="ticket__plane-title">{item.info}</div>
              <div className="ticket__plane-data">{item.data}</div>
            </div>
          </List.Item>
        )}
      />
    </Card>
  );
};

Ticket.defaultProps = {
  ticket: {},
};

Ticket.propTypes = {
  ticket: propTypes.object,
};

export default Ticket;
