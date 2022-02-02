import React from "react";
import { Radio } from 'antd';

export default function TicketFilter () {
  return (
    <Radio.Group defaultValue="cheep" buttonStyle="solid" style={{borderRadius: 5}}>
      <Radio.Button value="cheep" style={{width: 168, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>Самый дешевый</Radio.Button>
      <Radio.Button value="fast" style={{width: 168}}>Самый быстрый</Radio.Button>
      <Radio.Button value="optimal" style={{width: 168, borderTopRightRadius: 5, borderBottomRightRadius: 5}}>Оптимальный</Radio.Button>
    </Radio.Group>
  )
}