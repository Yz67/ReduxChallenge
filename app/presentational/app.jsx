/*
    app/container/app.js
    Defines the app presentational element which is a parent
    of both SidebarContainer and ScheduleContainer

    NOTE TO SELF: Having more than one app.js may be confusing...
*/
import React from 'react';
import SidebarContainer from '../container/SidebarContainer';
import ScheduleContainer from '../container/ScheduleContainer';

const App = () => (

    <div className="container">
        <div className="row title text-center">
            Scheduler
        </div>
        <div className="row">
            <div className="col-xs-4 sidebar">
                <SidebarContainer />
            </div>

            <div className="col-xs-8 schedule">
                <ScheduleContainer />
            </div>
        </div>
    </div>
);

export default App;
