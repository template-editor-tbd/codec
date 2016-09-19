import Bottle from 'Bottlejs';
import WelcomeNotifier from 'WelcomeNotifier/WelcomeNotifier';
import config from 'config';

const bottle = new Bottle();

bottle.factory('welcome_notifier', container => new WelcomeNotifier(
    container.config.welcome_notifier.message
));

bottle.constant('config', config);

export default bottle.container;
