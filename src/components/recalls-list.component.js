import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecallItem = props => (
    <tr>
        <td>{props.recallitem.RECALL_DATE}</td>
        <td>{props.recallitem.TITLE}</td>
        <td>{props.recallitem.ISSUE}</td>
        <td>{props.recallitem.MATNR}</td>
        <td>{props.recallitem.DELIVERY_QTY}</td>
        <td>{props.recallitem.ITEM_TYPE}</td>
    </tr>
)

export default class RecallItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {recallitems: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4001/snapp/recallItems')
            .then(response => {
                this.setState({ recallitems: response.data.RecallItems });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    recallitemList() {
        return this.state.recallitems.map(function(currentRecallItem, i){
            return <RecallItem recallitem={currentRecallItem} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>RecallItems List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Recall Date</th>
                            <th>Title</th>
                            <th>Issue</th>
                            <th>MATNR</th>
                            <th>Delivery Quantity</th>
                            <th>Item Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.recallitemList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
