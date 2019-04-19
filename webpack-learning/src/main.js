import { notifier } from './notification';

require('./main.scss');

const log = notifier.notify;

log('yet another message');
