/* eslint-disable */

import React from "react";
import { Card, Checkbox } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { allTrans, checkGroup } from "../../services/store/actions";
import './TransplantsFilter.scss';

export default function TransplantsFilter() {

    const labels = useSelector(state => state.transPlants.labels);
    const options = useSelector(state => state.transPlants.options);
    const all = useSelector(state => state.all)

    const dispatch = useDispatch()

    return (
        <Card className="filter" >
            <div className="filter__header">Количество пересадок </div>
            <Checkbox
                indeterminate={all}
                onChange={() => { dispatch(allTrans()) }}
                checked={all} // true/false
                style={{ paddingBottom: 20 }}
            >
                Все
            </Checkbox>
            <Checkbox.Group
                options={labels}
                value={options}
                onChange={(item) => { console.log(item); dispatch(checkGroup(item)) }}
            />
        </Card>
    )
}