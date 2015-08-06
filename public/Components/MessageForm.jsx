
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var MessageForm = React.createClass({

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

    inputChange(event) {
      console.log(event.target.value);
      var data = event.target.value;
      // this.setState({text: data});
      AppActions.getText(data);
    },

    onChange(state) {
        this.setState(state);
    },

    render: function (){
        return (
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" onChange={this.inputChange}/>
                    <label for="email" data-error="wrong" data-success="right">Email</label>
                    <h1>{this.state.text}</h1>
                  </div>
                </div>
              </form>
            </div>
        );
    }

});

module.exports = MessageForm;