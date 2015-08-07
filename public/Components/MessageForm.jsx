
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
      // console.log(event.target.value);
      var data = event.target.value;
      // this.setState({text: data});
      AppActions.getText(data);
    },

    sendText() {
        var data = this.state.text;
        console.log(data);

        AppActions.sendMessage(data);

        this.setState({text: ''});
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
                            <input id="text" type="text" onChange={this.inputChange} value={this.state.text}/>
                            <label for="text" data-error="wrong" data-success="right">Message</label>
                        </div>
                        <div>
                            <h3>{this.state.text}</h3>
                        </div>
                    </div>
                </form>
                <a className="waves-effect waves-light btn" onClick={this.sendText}>送出</a>
            </div>
        );
    }

});

module.exports = MessageForm;