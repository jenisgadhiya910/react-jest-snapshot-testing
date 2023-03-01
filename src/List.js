import React, { Component } from 'react';

export default class List extends Component {
    render() {

        const listItems = this.props.items ? this.props.items.map((item, index) => (
            <li key={index}>{item}</li>
        )) : [];

        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}