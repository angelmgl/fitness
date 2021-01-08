import React, { Component } from 'react';

class ExerciseForm extends Component {

    state = {}

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {

        const { onChange, form } = this.props;

        return (
            <div className="container mt-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="title" 
                            name="title"
                            onChange={onChange}
                            value={form.title}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="description" 
                            name="description"
                            onChange={onChange}
                            value={form.description}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="img" 
                            name="img"
                            onChange={onChange}
                            value={form.img}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col">
                            <input 
                                type="color" 
                                className="form-control" 
                                placeholder="leftColor" 
                                name="leftColor"
                                onChange={onChange}
                                value={form.leftColor}
                            />
                        </div>
                        <div className="col">
                            <input 
                                type="color" 
                                className="form-control"
                                placeholder="rightColor" 
                                name="rightColor"
                                onChange={onChange}
                                value={form.rightColor}
                            />    
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="btn btn-primary float-right mt-3"
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ExerciseForm;