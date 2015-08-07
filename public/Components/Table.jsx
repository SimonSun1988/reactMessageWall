
import React from 'react'

import AppStore from '../stores/AppStore'

var Table = React.createClass({

    getInitialState() {
        return AppStore.getState();
    },

    componentDidMount() {
        AppStore.listen(this.onChange);
    },

    componentWillUnmount() {
        // 取消事件監聽
        AppStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render: function() {

        let messages = this.state.messages.map(function(message) {
            return (
                <tr><td>{message}</td></tr>
            )
        });

        return (
            <table className="striped">
                <thead>
                    <tr>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {messages}
                </tbody>
            </table>
        )
    }
});

module.exports = Table;