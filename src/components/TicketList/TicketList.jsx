import React from "react";
import { List, Button, Spin, Progress } from 'antd';
import { useSelector, useDispatch } from "react-redux";

import { addTickets } from "../../services/store/actions";

import { Ticket } from '../Ticket';
// import { getSearchID, getTickets } from "../../services/api/kataAviasales";

import './TicketList.scss'


export default function TicketList() {

    const tickets = useSelector(state => state.tickets);
    const status = useSelector(state => state.ticketListStatus);
    const lengthOfList = useSelector(state => state.lengthOfList);
    const dispatch = useDispatch();

    const showTickets = tickets.filter((item, i) => i < lengthOfList);

    return (
        status !== 'loading' ?
            <>
                <Progress status="active" percent={30} showInfo={false} />
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={showTickets}
                    renderItem={ticket => (
                        <List.Item>
                            <Ticket className="ticket" ticket={ticket} />
                        </List.Item>
                    )}
                />
                <Button
                    className="list-button"
                    type="primary"
                    onClick={() => { dispatch(addTickets()) }}
                >Показать еще 5 билетов!</Button>
            </>
            : <Spin className="list-spin" size="large" />
    )
}