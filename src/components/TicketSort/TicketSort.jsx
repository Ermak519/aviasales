import React from "react";
import { Radio } from 'antd';
import { useDispatch, useSelector } from "react-redux";

import { cheeper, faster } from '../../store/actions/sortActions'
import './TicketSort.scss'


export const TicketSort = () => {

  const { ticketSort } = useSelector(state => state.sortReducer)
  const dispatch = useDispatch()

  return (
    <Radio.Group className="ticket-filter" defaultValue={ticketSort} buttonStyle="solid" >
      <Radio.Button
        onClick={() => { dispatch(cheeper()) }}
        className="ticket-filter__item"
        value="cheep"
        style={{ width: 255, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, height: 50 }}
      >Самый дешевый</Radio.Button>
      <Radio.Button
        onClick={() => { dispatch(faster()) }}
        className="ticket-filter__item"
        value="optimal"
        style={{ width: 255, height: 50, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>Самый быстрый</Radio.Button>
    </Radio.Group>
  )
}