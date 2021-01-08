import React, { Component } from 'react';
import ExerciseForm from './ExerciseForm';
import Card from './Card';

class ExerciseNew extends Component {

    state = {
        form: {
            title: '',
            img: '',
            description: '',
            leftColor: '',
            rightColor: ''
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
        return(
            <div className="row">
                <div className="col-sm mt-3">
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm">
                    <ExerciseForm onChange={this.handleChange}
                        form={this.state.form} />
                </div>
            </div>
        )
    }
}

export default ExerciseNew;