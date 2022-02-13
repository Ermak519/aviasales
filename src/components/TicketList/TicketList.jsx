/*eslint-disable */

import React, { useEffect } from "react";
import { List, Button, Spin, Progress } from 'antd';
import { useSelector, useDispatch } from "react-redux";

import { allTicketsLoaded, addTickets, setListStatus, setSearchID, addTicketsData, uploadTickets, uploadProgress } from "../../services/store/actions";
import { getTicketsData } from "../../services/store/thunks";
import { getSearchID, getTickets } from "../../services/api/kataAviasales";

import { Ticket } from '../Ticket';

import './TicketList.scss'

export const TicketList = () => {

    const tickets = useSelector(state => state.tickets);
    const status = useSelector(state => state.listStatus);
    const lengthOfList = useSelector(state => state.lengthOfList);
    const allTickets = useSelector(state => state.allTickets);
    const ticketSort = useSelector(state => state.ticketSort);
    const ticketsFilter = useSelector(state => state.ticketsFilter.options);
    const searchId = useSelector(state => state.searchID);
    const ticketsProgress = useSelector(state => state.ticketsProgress);

    const dispatch = useDispatch();

    useEffect(async () => {
        // dispatch(getTicketsData());

        dispatch(setListStatus('loading'));
        const { searchId } = await getSearchID();
        dispatch(setSearchID(searchId));
        try {
            const { tickets, stop } = await getTickets(searchId);
            dispatch(addTicketsData(tickets));
            dispatch(setListStatus('loaded'));
            dispatch(allTicketsLoaded(stop));
        } catch (error) {
            console.log(error)
            dispatch(serverError());
        }
    }, []);

    useEffect(() => {
        if (!allTickets && searchId !== null) {
            const intervalQuery = setInterval(async () => {
                try {
                    const { tickets, stop } = await getTickets(searchId);
                    dispatch(uploadTickets(tickets));
                    dispatch(allTicketsLoaded(stop));
                    dispatch(uploadProgress());
                } catch (error) {
                    const { tickets, stop } = await getTickets(searchId);
                    dispatch(uploadTickets(tickets));
                    dispatch(uploadProgress());
                    dispatch(allTicketsLoaded(stop));
                }
            }, 3000);
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