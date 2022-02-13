/* eslint-disable */

import React from "react";
import { Card, Checkbox } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { allTrans, checkGroup } from "../../services/store/actions";
import './TicketsFilter.scss';

export const TicketsFilter = () => {

    const labels = useSelector(state => state.ticketsFilter.labels);
    const options = useSelector(state => state.ticketsFilter.options);
    const all = useSelector(state => state.ticketsFilter.all)

    const dispatch = useDispatch()


    return (
        <Card className="filter" >
            <div className="filter__header">Количество пересадок </div>
            <Checkbox
                onChange={() => { dispatch(allTrans()) }}
                checked={all}
                style={{ paddingBottom: 20 }}
            >
                Все
            </Checkbox>
            <Checkbox.Group
                options={labels}
                value={options}
                onChange={(item) => { dispatch(checkGroup(item)) }}
            />
        </Card>
    )
}