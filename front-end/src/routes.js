import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CharacterCounter from './pages/CharacterCounter';
import Portifolio from './pages/portifolio';
import HomePage from './pages/HomePage'

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Portifolio} />
            </Switch>
        </BrowserRouter>
    );
}
