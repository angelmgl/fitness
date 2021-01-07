import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Exercises from '../pages/Exercises';
import ExerciseNew from './ExerciseNew';
import NotFound from '../pages/NotFound';

function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/exercise" component={Exercises} />
                <Route exact path="/exercise/new" component={ExerciseNew} />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}

export default App;