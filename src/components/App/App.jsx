import React from "react";
import { useSelector } from "react-redux";
import { Result, Empty } from "antd";
import { TicketsFilter } from '../TicketsFilter';
import { TicketSort } from '../TicketSort';
import { TicketList } from "../TicketList";


import Logo from './logo.svg';
import Plane from './plane.svg'
import './App.scss'


export const App = () => {
    const serverStatus = useSelector(state => state.serverError);
    const filters = useSelector(state => state.ticketsFilter.options)

    return (
        <main className="app">
            <header className="header">
                <div className="header__logo">
                    <img src={Logo} alt="aviasales logo" />
                </div>
            </header>
            {
                !serverStatus ?
                    <section className="main">
                        <aside className="main__filter ">
                            <TicketsFilter />
                        </aside>
                        <section className="main__app">
                            <div className="main__ticket-filter">
                                <TicketSort />
                            </div>
                            {
                                filters.length !== 0 ?
                                    <div className="main__ticket-list">
                                        <TicketList />
                                    </div> :
                                    <Empty image={Plane}
                                        imageStyle={{
                                            height: 60,
                                        }}
                                        description={
                                            <span>
                                                Рейсов, подходящих под заданные фильтры, не найдено
                                            </span>
                                        }
                                    />
                            }
                        </section>
                    </section> :
                    <Result
                        status="500"
                        title="500"
                        subTitle="Ошибка на сервере, перезагрузите страницу"
                    />
            }
        </main>
    )
}