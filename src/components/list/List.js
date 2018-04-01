import React, { Component } from "react";
import './list.css';

class List extends Component {
    render() {
        const direction = this.props.direction;
        const listItems = this.props.items.map((item) =>
        <li key={item}>{item}</li>
    );

    return (
        <ul className={'directional-list' + ' ' +  direction}>
        {listItems}
        </ul>
    );
    }
}

export default List;
