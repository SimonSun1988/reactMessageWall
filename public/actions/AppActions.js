
import alt from '../alt';
import request from 'superagent-bluebird-promise';

class AppActions {

    getText(text) {
        this.dispatch(text);
    }

    sendMessage(text) {
        this.dispatch(text);
    }

    getMessage() {

        var that = this;
        request('http://127.0.0.1:10021/data')
            .then(function(res) {
                return that.dispatch(res.body);
            });
    }

    getBadges() {
        var badges = ['tab1','tab2'];
        this.dispatch(badges);
    }
}

module.exports = alt.createActions(AppActions);