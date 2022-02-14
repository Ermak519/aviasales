import React, { useEffect } from "react";
import { List, Button, Spin, Progress } from 'antd';
import { useSelector, useDispatch } from "react-redux";

import { addTickets } from "../../store/actions/ticketListActions";

import { getTicketsData, uploadNewTickets } from "../../store/middlewares/thunks";

import { Ticket } from '../Ticket';

import './TicketList.scss'

export const TicketList = () => {

    const { tickets, listStatus, lengthOfList, allTickets, searchId, ticketsProgress } = useSelector(state => state.ticketListReducer);

    const { ticketSort } = useSelector(state => state.sortReducer);

    const { options, labels } = useSelector(state => state.filterReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsData())
    }, [dispatch]);

    useEffect(() => {
        if (!allTickets && searchId) {
            const intervalQuery = setInterval(() => {
                dispatch(uploadNewTickets(searchId))
            }, 3000);
            return () => clearInterval(intervalQuery)
        }
    })

    // if (activeFilter.length === 0 || activeFilter.length === filterList.length) {
    //     filteredList = this.state.searchLists;
    // } else {
    //     filteredList = this.state.searchLists.filter(item =>
    //         this.state.activeFilter.includes(item.type)
    //     );
    // }

    const arrTickets = [...tickets].filter((item) => {
        const transfers1 = item.segments[0].stops.length;
        const transfers2 = item.segments[1].stops.length;

        if (labels.length === options.length) {
            return transfers1 || transfers2;
        };

    }).sort((a, b) => {
        if (ticketSort === 'cheep') return a.price - b.price;
        return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)
    });

    const showTickets = arrTickets.filter((item, i) => i < lengthOfList)

    return (
        listStatus !== 'loading' ?
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