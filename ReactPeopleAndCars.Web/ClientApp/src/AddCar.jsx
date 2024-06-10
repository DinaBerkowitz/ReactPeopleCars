

import React from 'react';
import withRouter from './withRouter';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddCar extends React.Component {

    state = {
        car: {make: '', model: '', year: ''}
    }

    onTextChange = e => {
        const copy = this.state.car
        copy[e.target.name] = e.target.value
        this.setState({ car: copy })
    }

    onSubmitClick = async () => {
        const { make, model, year } = this.state.car;
        await axios.post('/api/peoplecar/addcar', { personId: this.props.params.id, make: make, model: model, year: year });
        this.setState({
            car: { make: '', model: '', year: ''}
        });
       this.props.navigate('/');
    }
    render() {
        const { make, model, year } = this.state.car;
        return (
            <>
                <div className="col-md-6 offset-md-3 card bg-light p-4">
                    <input type="text" className="form-control" name="make" placeholder="Make" value={make} onChange={this.onTextChange} />
                    <br />
                    <input type="text" className="form-control" name="model" placeholder="Model" value={model} onChange={this.onTextChange} />
                    <br />
                    <input type="text" className="form-control" name="year" placeholder="Year" value={year} onChange={this.onTextChange} />
                    <br />

                    <button className="btn btn-primary btn-lg btn-block" onClick={this.onSubmitClick}>Submit</button>

                </div>
            </>
        )
    }
}

export default withRouter(AddCar);
