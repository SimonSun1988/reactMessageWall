
import alt from '../alt';

class AppActions {

    getText(text) {
        this.dispatch(text);
    }

    sendMessage(text) {
        this.dispatch(text);
    }

    getMessage() {
        // request('http://127.0.0.1:10021/data', function(data) {
        //     return that.dispatch(data);
        // });
        // $.get('http://127.0.0.1:10021/data', function(data) {
        //     return that.dispatch(data);
        // });
        this.dispatch(['Simon', 'Webber', 'Wayne']);
    }
}

module.exports = alt.createActions(AppActions);