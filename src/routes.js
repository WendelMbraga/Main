import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Frase from './pages/Frase';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Frase} />
                
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;