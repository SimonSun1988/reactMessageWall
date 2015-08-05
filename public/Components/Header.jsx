/** @jsx React.DOM */

var React = require('react');

var Header = React.createClass({

    render: function (){
        return (
            <header>
                <nav>
                  <div className="nav-wrapper">
                    <div className="col s12">
                      <a className="brand-logo">Logo</a>
                      <ul className="right hide-on-med-and-down">
                      </ul>
                    </div>
                  </div>
                </nav>
            </header>
        );
    }

});

module.exports = Header;