import * as React from 'react';

import './home.scss'

class Home extends React.Component {
    public render() {
        const arr = [1, 2, 3, 4, 5];
        const listItems = arr.map((numbers,index) => <li key={index}>{numbers}</li>);
        return (
            <div className="body-base">
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default Home