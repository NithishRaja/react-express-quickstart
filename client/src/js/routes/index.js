import React from 'react';
import {Route, Switch} from "react-router-dom";
import Password from './../containers/passwordContainer';

const _routesJSX = <Switch>
                    <Route path="/" exact component={Password}  />
                    <Route path="*" render={() => <h1>not found</h1>} />
                  </Switch>;

export default _routesJSX;
