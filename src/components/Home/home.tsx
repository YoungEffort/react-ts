import { Pagination } from 'antd';
import * as React from 'react';

import './home.scss'

class Home extends React.Component {
    public render() {
        const arr = [1, 2, 3, 4,5,6];
        const listItems = arr.map((numbers, index) => <li key={index} className="home-list">
            <h2>{numbers}</h2>
            <p>{numbers}</p>
            <p>{numbers}</p>
            <a href="#">{numbers}</a>
        </li>);
        function onChange(pageNumber:any) {
            window.console.log('Page: ', pageNumber);
          }
        return (
            <div className="body-base home">
                <ul>{listItems}</ul>
                <Pagination showQuickJumper={true} defaultCurrent={2} total={500} onChange={onChange} />
            </div>
        )
    }
}

export default Home