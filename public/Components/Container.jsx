/** @jsx React.DOM */

var React = require('react');

var MessageForm = require('./MessageForm.jsx');
var Badges = require('./Badges.jsx');

var Container = React.createClass({

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