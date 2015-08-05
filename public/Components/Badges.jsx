/** @jsx React.DOM */

var React = require('react');

var Badges = React.createClass({

    render: function (){
        return (
            <div className="collection">
              <a href="#!" className="collection-item">Action 1</a>
              <a href="#!" className="collection-item">Action 2</a>
            </div>
        );
    }
});

module.exports = Badges;