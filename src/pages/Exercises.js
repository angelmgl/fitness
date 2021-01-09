import React from 'react';
import Welcome from '../components/Welcome';
import ExerciseList from '../components/ExerciseList';
import LoadMore from '../components/LoadMore';

const Exercises = ({ data }) => (
        <>
            <Welcome username="Angel" />
            <ExerciseList exercises={data} />
            <LoadMore />
        </>
);

export default Exercises;