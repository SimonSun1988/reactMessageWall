var alt = require('../alt');
var AppActions = require('../actions/AppActions');

class AppStore {

    constructor() {

        this.bindListeners({

            handleText: AppActions.GET_TEXT,
        });
    }

    handleText(doc) {
        this.text = doc;
    }
}

module.exports = alt.createStore(AppStore, 'AppStore');