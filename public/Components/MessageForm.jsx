
var React = require('react');
var AppActions = require('../actions/AppActions');

var MessageForm = React.createClass({

    inputChange() {
      console.log('aaa');
    },

    render: function (){
        return (
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={this.inputChange}/>
                    <label for="email" data-error="wrong" data-success="right">Email</label>
                  </div>
                </div>
              </form>
            </div>
        );
    }

});

module.exports = MessageForm;