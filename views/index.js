import React, { Component } from 'react';
import { render } from 'react-dom';
import Project from './pages/project/index.jsx';
import TeamPerformance from './pages/team-performance/index.jsx';
import Calendar from './pages/calendar/index.jsx';
import { HashRouter, Route, Link  } from "react-router-dom";

class App extends Component {
    render () {
        return (
            <HashRouter>
                <main className="main-wrapper">
                    <aside className="sidebar">
                        <header className="logo">
                            <img src="/icons/codex-logo.png" alt="logo codex"/>
                        </header>
                        <nav className="nav">
                            <ul>
                                <li className="active">
                                    <Link to="/project">Project</Link>
                                </li>
                                <li>
                                    <Link to="/team-performance">Team Performance</Link>
                                </li>
                                <li>
                                    <Link to="/calendar">Calendar</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    <div className="main-content">
                        <Route exact path="/project" component={Project} />
                        <Route path="/team-performance" component={TeamPerformance} />
                        <Route path="/calendar" component={Calendar} />
                    </div>
                </main>
            </HashRouter>
        )
    }
}

render(<App/>, document.getElementById('app'))