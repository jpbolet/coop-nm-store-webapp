import React, { Component } from 'react';
import axios from 'axios';

const CreditItem = props => (
    <tr>
        <td>{props.credititem.TITLE}</td>
        <td>{props.credititem.ISSUE}</td>
        <td>{props.credititem.MATNR}</td>
        <td>{props.credititem.CREDITED_QTY}</td>
        <td>{props.credititem.NET_VALUE}</td>
        <td>{props.credititem.REJECT_REASON}</td>
        <td>{props.credititem.RECHARGE_FLAG}</td>
        <td>{props.credititem.ITEM_TYPE == "MG" ? "Magazine" : "Newspaper"}</td>
    </tr>
)

export default class CreditItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {credititems: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4001/snapp/creditItems')
            .then(response => {
                this.setState({ credititems: response.data.CreditItems });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    credititemList() {
        return this.state.credititems.map(function(currentCreditItem, i){
            return <CreditItem credititem={currentCreditItem} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Credit Items</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Issue</th>
                            <th>MATNR</th>
                            <th>Credited qty</th>
                            <th>Net Value</th>
                            <th>Rejected Reason</th>
                            <th>Recharge Flag</th>
                            <th>Item Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.credititemList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
