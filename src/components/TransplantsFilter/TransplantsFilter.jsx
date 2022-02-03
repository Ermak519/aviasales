import React from "react";
import { Card, Checkbox } from 'antd';

import './TransplantsFilter.scss';

const CheckboxGroup = Checkbox.Group;

export default function TransplantsFilter() {
    const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    const defaultOption = ['1 пересадка']

    const [checkedList, setCheckedList] = React.useState(defaultOption);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };


    return (
        <Card className="filter" >
            <div className="filter__header">Количество пересадок</div>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} style={{ paddingBottom: 20 }}>
                Все
            </Checkbox>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </Card>

    )
}