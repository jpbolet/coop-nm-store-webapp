import React, { Component } from 'react';
import axios from 'axios';

const ActivitySheetItem = props => (
    <tr className={props.activitysheetitem.is_new ? 'is_new' : ''}>
        <td>{props.activitysheetitem.placement.position}</td>
        <td>{props.activitysheetitem.publication.display_name}</td>
        <td>{props.activitysheetitem.placement.type}</td>
        <td>{props.activitysheetitem.placement.location}</td>
        <td>{props.activitysheetitem.publication.type}</td>
        <td>{props.activitysheetitem.is_new ? "New" : ""}</td>
    </tr>
)

export default class ActivitySheetItemsList extends Component {

    constructor(props) {
        super(props);
        this.state = {activitysheetitems: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4010/activitysheets')
            .then(response => {
                this.setState({ activitysheetitems: response.data.actions });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    activitysheetitemList() {
        return this.state.activitysheetitems.map(function(currentActivitySheetItem, i){
            return <ActivitySheetItem activitysheetitem={currentActivitySheetItem} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Activity Sheet</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Title</th>
                            <th>Placement Type</th>
                            <th>Location</th>
                            <th>Item Type</th>
                            <th>Is New</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.activitysheetitemList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
