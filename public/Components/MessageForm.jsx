/** @jsx React.DOM */

var React = require('react');

var MessageForm = React.createClass({

    render: function (){
        return (
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email" data-error="wrong" data-success="right">Email</label>
                  </div>
                </div>
              </form>
            </div>
        );
    }

});

module.exports = MessageForm;