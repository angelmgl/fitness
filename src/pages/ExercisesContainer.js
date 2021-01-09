import React from 'react';
import Exercises from './Exercises';
import Loading from '../components/Loading';
import FatalError from './Error500';
import useFetch from '../hooks/useFetch';
import url from './config';

const ExercisesContainer = () => {
    
    const { data, loading, error } = useFetch(`${url}/exercises`);

    if(loading) return <Loading />

    if(error) return <FatalError />
    
    return <Exercises data={data} />
}

export default ExercisesContainer;