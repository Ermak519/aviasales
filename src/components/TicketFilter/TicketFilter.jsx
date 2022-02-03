import React from "react";
import { Radio } from 'antd';

import './TicketFilter.scss'

export default function TicketFilter() {
  return (
    <Radio.Group className="ticket-filter" defaultValue="cheep" buttonStyle="solid" >
      <Radio.Button
        className="ticket-filter__item"
        value="cheep"
        style={{ width: 170, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 50 }}
      >Самый дешевый</Radio.Button>
      <Radio.Button className="ticket-filter__item" value="fast" style={{ width: 170, height: 50 }}>Самый быстрый</Radio.Button>
      <Radio.Button className="ticket-filter__item" value="optimal" style={{ width: 170, height: 50, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>Оптимальный</Radio.Button>
    </Radio.Group>
  )
}