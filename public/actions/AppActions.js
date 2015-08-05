// var alt = require('../alt');
import alt from '../alt';

class AppActions {
    // this.dispatch('errorMessage');
    getText(text) {
        this.dispatch(text);
    }
}

module.exports = alt.createActions(AppActions);