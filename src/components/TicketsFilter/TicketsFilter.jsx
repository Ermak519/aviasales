import React from 'react';
import { Card, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { allTrans, checkGroup } from '../../store/actions/filterActions';
import './TicketsFilter.scss';

export const TicketsFilter = () => {
    const { labels, options } = useSelector((state) => state.filterReducer);
    const { all } = useSelector((state) => state.filterReducer);

    const dispatch = useDispatch();

    return (
        <Card className="filter">
            <div className="filter__header">Количество пересадок </div>
            <Checkbox
                onChange={() => {
                    dispatch(allTrans());
                }}
                checked={all}
                style={{ paddingBottom: 20 }}
            >
                Все
            </Checkbox>
            <Checkbox.Group
                options={labels}
                value={options}
                onChange={(item) => {
                    dispatch(checkGroup(item));
                }}
            />
        </Card>
    );
};
