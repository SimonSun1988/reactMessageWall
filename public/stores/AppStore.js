var alt = require('../alt');
var AppActions = require('../actions/AppActions');

class AppStore {

    constructor() {

        this.messages = [];

        this.bindListeners({

            handleText: AppActions.GET_TEXT,
            sendMessage: AppActions.SEND_MESSAGE,
        });
    }

    handleText(doc) {
        this.text = doc;
    }

    sendMessage(doc) {

        if(!doc || doc === ''){
            return this.messages;
        }

        return this.messages.push(doc);
    }
}

module.exports = alt.createStore(AppStore, 'AppStore');