import React from "react";
import { List, Button, Spin, Progress } from 'antd';
import { useSelector } from "react-redux";

import { Ticket } from '../Ticket';
// import { getSearchID, getTickets } from "../../services/api/kataAviasales";

import './TicketList.scss'


export default function TicketList() {

    const tickets = useSelector(state => state.tickets)
    const status = useSelector(state => state.ticketListStatus)

    return (


        status !== 'loading' ?
            <>
                <Progress status="active" percent={50} showInfo={false} />
                <List
                    grid={{ gutter: 16, column: 1 }}
                    dataSource={tickets}
                    renderItem={item => (
                        <List.Item>
                            <Ticket className="ticket" item={item} />
                        </List.Item>
                    )}
                />
                <Button className="list-button" type="primary">Показать еще 5 билетов!</Button>
            </>
            : <Spin className="list-spin" size="large" />



    )
}