import React, { Component } from 'react';
import axios from 'axios';

const ActivitySheetItem = props => (
    <tr className={props.activitysheetitem.is_new ? 'coop-blue' : ''}>
        <td>{props.activitysheetitem.placement.position}</td>
        <td>{props.activitysheetitem.publication.display_name}</td>
        <td>{props.activitysheetitem.placement.type}</td>
        <td>{props.activitysheetitem.placement.location}</td>
        <td>{props.activitysheetitem.publication.type}</td>
        <td>{props.activitysheetitem.is_new ? "I'm New!" : ""}</td>
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
                this.setState({
                                activitysheetitems: response.data.actions,
                                weekly_news: response.data.weekly_news,
                                week: response.data.week,
                                range_start_date: response.data.range_start_date.substring(0,10),
                                range_end_date: response.data.range_end_date.substring(0,10)
                              });
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
                <b>Week { this.state.week }</b><p>{this.state.range_start_date} until {this.state.range_end_date}</p>
                <div className='weekly-news'><b>Weekly News</b>
                <p>{ this.state.weekly_news }</p></div>
                <div className='coop-blue'><b>New Title</b><p>All new titles that should come in this week will now be highlighted in blue. If indicated, simply place the new title in the slot designated and return any titles specified at the end of the sheet</p></div>



                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Title</th>
                            <th>Placement Type</th>
                            <th>Location</th>
                            <th>Item Type</th>
                            <th>New</th>
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
