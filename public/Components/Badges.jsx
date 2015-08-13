
var React = require('react');

import AppStore from '../stores/AppStore'
var AppActions = require('../actions/AppActions');

var Badges = React.createClass({

    getInitialState() {
        return AppStore.getState();
    },

    componentWillMount() {
        AppActions.getBadges();
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

    render: function (){

        let badges = this.state.badges.map(function(badge) {
            return (
                <a className="collection-item">{badge}</a>
            )
        });

        return (
            <div className="collection">
              <a href="#!" className="collection-item">Action 1</a>
              <a href="#!" className="collection-item">Action 2</a>
              {badges}
            </div>
        );
    }
});

module.exports = Badges;