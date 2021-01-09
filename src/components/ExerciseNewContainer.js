import React, { Component } from 'react';
import FatalError from '../pages/Error500';
import ExerciseNew from '../pages/ExerciseNew';
import Loading from './Loading';
import url from '../pages/config';

class ExerciseNewContainer extends Component {

    state = {
        form: {
            title: '',
            img: '',
            description: '',
            leftColor: '',
            rightColor: ''
        },
        error: null,
        loading: false
    }
    
    

    handleSubmit = async e => {
        this.setState({
            loading: true
        });
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/exercises`, config);
            let json = await res.json();
            console.log(json);

            this.setState({
                loading: false
            });

            this.props.history.push('/exercise');
        } catch (error) {
            this.setState({
                loading: true,
                error
            });
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        if(this.state.loading) return <Loading />
        if(this.state.error) return <FatalError />
        return <ExerciseNew
        form={this.state.form}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit} />
    }
}

export default ExerciseNewContainer;