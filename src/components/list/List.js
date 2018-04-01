import React, { Component } from "react";
import './list.css';

class List extends Component {
    render() {
        const data = [{"name":"List item 1"},{"name":"List item 2"},{"name":"List item 3"}];
        const direction = this.props.direction;
        var listItems = data.map(function(d, idx){
            return (<li key={idx}>{d.name}</li>)
        })
        return (
            <ul className={'directional-list' + ' ' +  direction}>
                {listItems}
            </ul>
        );
    }
}



export default List;
