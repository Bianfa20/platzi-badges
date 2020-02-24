import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import RaM from '../pages/RaM';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Badges}></Route>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgeNew}></Route>
                    <Route exact path="/ram" component={RaM}></Route>
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;