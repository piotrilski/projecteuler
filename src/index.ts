import { bootstrap, bind } from 'angular2/angular2';

import { HTTP_BINDINGS, FORM_BINDINGS } from 'angular2/angular2';
import { routerInjectables as ROUTER_BINDINGS } from 'angular2/router';

import { APP_SERVICES_BINDINGS } from './services/services';

import { App } from './components/app/app';

const APP_BINDINGS = [ 
    ROUTER_BINDINGS,
    APP_SERVICES_BINDINGS 
]

bootstrap(App, APP_BINDINGS);