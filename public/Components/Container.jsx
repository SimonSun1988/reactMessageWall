
import React from 'react'

import MessageForm from './MessageForm.jsx'
import Badges from './Badges.jsx'
import Table from './Table.jsx'

// import AppStore from '../stores/test';

var Container = React.createClass({

    // getInitialState() {
    //     return AppStore.getState();
    // },

    // onChange(state) {
    //     console.log(state)
    //     this.setState(state);
    // },

    render: function (){
        return (
            <div className="row">
                <div className="col s3">
                    <Badges />
                </div>
                <div className="col s9">
                    <MessageForm />
                    <Table />
                </div>
            </div>
        );
    }

});

module.exports = Container;