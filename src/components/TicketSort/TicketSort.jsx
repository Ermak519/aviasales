import React from "react";
import { Radio } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { cheeper, faster, optimal } from '../../services/store/actions'
import './TicketSort.scss'


export default function TicketSort() {

  const value = useSelector(state => state.ticketSort)
  const dispatch = useDispatch()

  return (
    <Radio.Group className="ticket-filter" defaultValue={value} buttonStyle="solid" >
      <Radio.Button
        onClick={() => { dispatch(cheeper()) }}
        className="ticket-filter__item"
        value="cheep"
        style={{ width: 170, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 50 }}
      >Самый дешевый</Radio.Button>
      <Radio.Button
        onClick={() => { dispatch(faster()) }}
        className="ticket-filter__item"
        value="fast"
        style={{ width: 170, height: 50 }}>Самый быстрый</Radio.Button>
      <Radio.Button
        onClick={() => { dispatch(optimal()) }}
        className="ticket-filter__item"
        value="optimal"
        style={{ width: 170, height: 50, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>Оптимальный</Radio.Button>
    </Radio.Group>
  )
}