/*eslint-disable */

import React, { useEffect } from "react";
import { List, Button, Spin, Progress } from 'antd';
import { useSelector, useDispatch } from "react-redux";

import { addTickets, setLoadingStatus, setLoadedStatus, setSearchID, serverError, addTicketsData } from "../../services/store/actions";
import { getSearchID, getTickets } from "../../services/api/kataAviasales";

import { Ticket } from '../Ticket';

import './TicketList.scss'


export default function TicketList() {

    const tickets = useSelector(state => state.tickets);
    const status = useSelector(state => state.ticketListStatus);
    const lengthOfList = useSelector(state => state.lengthOfList);
    const allTickets = useSelector(state => state.allTickets);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getTicketsData());

        dispatch(setLoadingStatus())
        getSearchID().then(({ searchId }) => {
            dispatch(setSearchID(searchId));
            return searchId
        }).then((id) => {
            getTickets(id).then(({ tickets }) => {
                dispatch(addTicketsData(tickets))
                dispatch(setLoadedStatus());
            }).catch(() => {
                dispatch(serverError())
            })
        })
    }, []);


    const showTickets = tickets.filter((item, i) => i < lengthOfList);

    return (
        status !== 'loading' ?
            <>
                {!allTickets ? <Progress status="active" percent={50} showInfo={false} /> : null}
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