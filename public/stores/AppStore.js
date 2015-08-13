var alt = require('../alt');
var AppActions = require('../actions/AppActions');

class AppStore {

    constructor() {

        console.log(this.messages);
        this.messages = [];
        this.badges = [];

        this.bindListeners({
            getMessage: AppActions.GET_MESSAGE,
            handleText: AppActions.GET_TEXT,
            sendMessage: AppActions.SEND_MESSAGE,
            getBadges: AppActions.GET_BADGES
        });
    }

    getMessage(data){
        console.log(data);
        this.messages = data;
    }

    handleText(doc) {
        this.text = doc;
    }

    sendMessage(doc) {

        if(!doc || doc === ''){
            return;
        }

        return this.messages.push(doc);
    }

    getBadges(data) {
        console.log(data);
        this.badges = data;
    }
}

module.exports = alt.createStore(AppStore, 'AppStore');