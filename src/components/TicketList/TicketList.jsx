import React from "react";
import { List, Button } from "antd";

import {Ticket} from '../Ticket'

import './TicketList.scss'

export default function TicketList () {
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    
    return (
        <>
            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Ticket className="ticket" item={item}/> 
                    </List.Item>
                )}
            />
            <Button className="list-button" type="primary">Показать еще 5 билетов!</Button>
        </>
    
    )
}