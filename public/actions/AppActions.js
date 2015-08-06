
import alt from '../alt';

class AppActions {

    getText(text) {
        this.dispatch(text);
    }
}

module.exports = alt.createActions(AppActions);