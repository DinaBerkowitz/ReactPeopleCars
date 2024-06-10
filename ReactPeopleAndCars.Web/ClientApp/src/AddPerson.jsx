
import React from 'react';
import withRouter from './withRouter';
import axios from 'axios';




class AddPerson extends React.Component {
    state = {
        person: { firstName: '', lastName: '', age: '' }
    };

    onTextChange = e => {
        const copy = this.state.person
        copy[e.target.name] = e.target.value
        this.setState({ person: copy })

    }

    resetTextBoxes = () => {
        this.setState({ person: { firstName: '', lastName: '', age: '' } });
    }

    onSubmitClick = async () => {
        const { firstName, lastName, age } = this.state.person;
        await axios.post('/api/peoplecar/addperson', { firstName: firstName, lastName: lastName, age: age });
        this.props.navigate('/');
        this.resetTextBoxes();

    }

    render() {
        const { firstName, lastName, age } = this.state.person;
        return (
            <>
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <h2>Add a New Person</h2>
                    <input type="text" className="form-control" name="firstName" placeholder="First Name" value={firstName} onChange={this.onTextChange} />
                    <br />
                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" value={lastName} onChange={this.onTextChange} />
                    <br />
                    <input type="text" className="form-control" name="age" placeholder="Age" value={age} onChange={this.onTextChange} />
                    <br />

                    <button className="btn btn-primary w-100" onClick={this.onSubmitClick}>Submit</button>


                </div>
            </>
        )
    }

}
export default withRouter(AddPerson);
