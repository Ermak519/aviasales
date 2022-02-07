import React from "react";
import { Card, Checkbox } from 'antd';

import './TransplantsFilter.scss';

export default function TransplantsFilter() {
    const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
    const defaultOption = []

    const [checkedList, setCheckedList] = React.useState(defaultOption);
    const [indeterminate, setIndeterminate] = React.useState(false);
    const [checkAll, setCheckAll] = React.useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(true);
        setCheckAll(e.target.checked);
    };


    return (
        <Card className="filter" >
            <div className="filter__header">Количество пересадок</div>
            <Checkbox 
              indeterminate={indeterminate} 
              onChange={onCheckAllChange} 
              checked={checkAll} 
              style={{ paddingBottom: 20 }}
            >
                Все
            </Checkbox>
            <Checkbox.Group 
              options={plainOptions} 
              value={checkedList} 
              onChange={onChange} 
            />
        </Card>

    )
}