export default class WelcomeNotifier {
    constructor(welcomeMessage) {
        this.welcomeMessage = welcomeMessage;
    }

    showWelcomeNotification() {
        window.alert(this.welcomeMessage);
    }
}
