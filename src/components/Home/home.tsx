import * as React from 'react';

import './home.scss'

class Home extends React.Component {
    public render() {
        const arr = [1, 2, 3, 4,5,6];
        const listItems = arr.map((numbers, index) => <li key={index} className="home-list">
            <h3>{numbers}</h3>
            <p>{numbers}</p>
            <p>{numbers}</p>
            <a href="#">{numbers}</a>
        </li>);
        return (
            <div className="body-base home">
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default Home