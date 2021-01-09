import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExercisesContainer from '../pages/ExercisesContainer';
import ExerciseNewContainer from './ExerciseNewContainer';
import NotFound from '../pages/NotFound';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/exercise" component={ExercisesContainer} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route component={NotFound}/>
        </Switch>
    </Router>
)

export default App;
