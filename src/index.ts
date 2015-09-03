import { bootstrap, bind } from 'angular2/angular2';
import { routerInjectables as ROUTER_BINDINGS } from 'angular2/router';

import { App } from './components/app/app';

const APP_BINDINGS = [ ROUTER_BINDINGS ]

bootstrap(App, [
    APP_BINDINGS
]);