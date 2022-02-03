import React from "react";
import { List, Card } from 'antd'

import './Ticket.scss'

export default function Ticket() {
    const data = [
        {
            first: 'MOW – HKT',
            second: '10:45 – 08:00',
        },
        {
            first: 'В пути',
            second: '21ч 15м',
        },
        {
            first: '2 пересадки',
            second: 'HKG, JNB',
        },
        {
            first: 'MOW – HKT',
            second: '11:20 – 00:50',
        },
        {
            first: 'В пути',
            second: '13ч 30м',
        },
        {
            first: '1 пересадка',
            second: 'HKG',
        },
    ]
    return (
        <Card
            className="ticket__card"
            style={{ width: 510, height: 184, borderRadius: 5, padding: 20 }}
            hoverable
        >
            <div className="ticket__header">
                <div className="ticket__price">
                    13400
                </div>
                <div className="ticket__logo">
                    <img src="https://pics.avs.io/99/36/{S7}.png" alt="company-logo" />
                </div>
            </div>
            <List
                grid={{ gutter: 16, column: 3 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <div className="flight">
                            <div className="ticket__plane-title">
                                {item.first}
                            </div >
                            <div className="ticket__plane-data">
                                {item.second}
                            </div>
                        </div>
                    </List.Item>
                )}
            />

        </Card>
    )
}