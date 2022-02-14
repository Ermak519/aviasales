import React, { useEffect } from "react";
import { List, Button, Spin, Progress } from 'antd';
import { useSelector, useDispatch } from "react-redux";

import { addTickets } from "../../store/actions/ticketListActions";

import { getTicketsData, uploadNewTickets } from "../../store/middlewares/thunks";

import { Ticket } from '../Ticket';

import './TicketList.scss'

export const TicketList = () => {

    const { tickets, status, lengthOfList, allTickets, searchId, ticketsProgress } = useSelector(state => state.ticketListReducer);

    const ticketSort = useSelector(state => state.sortReducer.ticketSort);

    const ticketsFilter = useSelector(state => state.filterReducer.options);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsData())
    }, [dispatch]);

    useEffect(() => {
        if (!allTickets && searchId !== null) {
            const intervalQuery = setInterval(() => {
                uploadNewTickets(searchId)
            }, 1000);
            return () => clearInterval(intervalQuery)
        }
    })

    const arrTickets = [...tickets].filter((item) => {
        const { segments } = item;
        const [obj1, obj2] = segments;
        const transfers1 = obj1.stops.length;
        const transfers2 = obj2.stops.length;
        if (ticketsFilter.includes('Без пересадок')) {
            return transfers1 === 0 || transfers2 === 0;
        };
        if (ticketsFilter.includes('1 пересадка')) {
            return transfers1 === 1 || transfers2 === 1;
        };
        if (ticketsFilter.includes('2 пересадки')) {
            return transfers1 === 2 || transfers2 === 2;
        };
        if (ticketsFilter.includes('3 пересадки')) {
            return transfers1 === 3 || transfers2 === 3;
        };
    }).sort((a, b) => {
        if (ticketSort === 'cheep') return a.price - b.price;
        if (ticketSort === 'fast') {
            const { segments: segmentsA } = a;
            const [obj1A, obj2A] = segmentsA;
            const durationA = obj1A.duration + obj2A.duration;
            const { segments: segmentsB } = b;
            const [obj1B, obj2B] = segmentsB;
            const durationB = obj1B.duration + obj2B.duration;
            return durationA - durationB;
        };
    });

    const showTickets = arrTickets.filter((item, i) => i < lengthOfList)

    return (
        status !== 'loading' ?
            <>
                {!allTickets ? <Progress className="list-progress" status="active" percent={ticketsProgress} showInfo={false} /> : null}
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