

import React from 'react';
import withRouter from './withRouter';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CarRow from './CarRow';

class DeleteCar extends React.Component {
    state = {
        cars: []
    }

    componentDidMount = async () => {
        const { data } = await axios.get(`/api/peoplecar/getcars?id=${this.props.params.id}`);
        this.setState({ cars: data })
    }

    onClick = async () => {
        await axios.post(`/api/peoplecar/deletecars?id=${this.props.params.id}`);
        this.props.navigate('/');
    }

    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <table className="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cars.map(c => <CarRow key={c.id} car={c}></CarRow>)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Are you sure you want to delete their cars?</h3>
                    </div>
                    <div className="col-md-6">
                        <Link to='/'>
                            <button className="btn btn-primary btn-lg w-100">No</button>
                        </Link>
                    </div>
                    <div className="col-md-6">

                        <button className="btn btn-danger btn-lg w-100" onClick={this.onClick}>Yes</button>

                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(DeleteCar);
