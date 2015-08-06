
var React = require('react');

var MessageForm = require('./MessageForm.jsx');
var Badges = require('./Badges.jsx');

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
                </div>
            </div>
        );
    }

});

module.exports = Container;