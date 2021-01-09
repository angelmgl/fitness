import React from 'react';
import ExerciseForm from '../components/ExerciseForm';
import Card from '../components/Card';
import '../components/styles/ExerciseNew.css'

const ExerciseNew = ({ form, onChange, onSubmit }) => {
    return(
        <div className="ExerciseNew_Lateral_Spaces row">
            <div className="col-sm ExerciseNew_Card_Space">
                <Card {...form} />
            </div>
            <div className="col-sm ExerciseNew_Form_Space">
                <ExerciseForm onChange={onChange}
                    form={form} onSubmit={onSubmit} />
            </div>
        </div>
    )
}

export default ExerciseNew;