import React from "react";
import {TransplantsFilter} from '../TransplantsFilter';
import {TicketFilter} from '../TicketFilter';
import { TicketList } from "../TicketList";


import Logo from './logo.svg';
import './App.scss'

export default function App () {
    return (
        <main className="app">
            <header className="header">
                <div className="header__logo">
                    <img src={Logo} alt="aviasales logo" />
                </div>
            </header>
            <section className="main">
                <aside className="main__filter ">
                    <TransplantsFilter />
                </aside>
                <section className="main__app">
                    <div className="main__ticket-filter">
                        <TicketFilter/>
                    </div>
                    <div className="main__ticket-list">
                        <TicketList />
                    </div>
                    
                </section>
            </section>
        </main>
    )
}