import React from "react";
import {TransplantsFilter} from '../TransplantsFilter';
import {TicketFilter} from '../TicketFilter';
import { TicketList } from "../TicketList";

import './App.scss'

export default function App () {
    return (
        <main className="app">
            <header className="header">
                <div className="header__logo">
                    <img src="#" alt="aviasales logo" />
                </div>
            </header>
            <section className="main">
                <aside className="transplant-filter">
                    <TransplantsFilter/>
                </aside>
                <section className="main__app">
                    <TicketFilter/>
                    <TicketList/>
                </section>
            </section>
        </main>
    )
}