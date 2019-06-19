import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeliveryNote = props => (
    <tr>
        <td>{props.deliverynote.DELIVERY_DATE}</td>
        <td>{props.deliverynote.TITLE}</td>
        <td>{props.deliverynote.ISSUE}</td>
        <td>{props.deliverynote.BARCODE}</td>
        <td>{props.deliverynote.BARCODE_ISSUE_EXTENSION}</td>
        <td>{props.deliverynote.ALLOCATION_QTY}</td>
        <td>{props.deliverynote.DELIVERY_QTY}</td>
    </tr>
)

export default class DeliveryNotesList extends Component {

    constructor(props) {
        super(props);
        this.state = {deliverynotes: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4001/snapp/deliveryItems')
            .then(response => {
                this.setState({ deliverynotes: response.data.DeliveryItems });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    deliverynoteList() {
        return this.state.deliverynotes.map(function(currentDeliveryNote, i){
            return <DeliveryNote deliverynote={currentDeliveryNote} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>DeliveryNotes List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Delivery Date</th>
                            <th>Title</th>
                            <th>Issue</th>
                            <th>Barcode</th>
                            <th>extn.</th>
                            <th>Allocation Quantity</th>
                            <th>Delivery Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.deliverynoteList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
