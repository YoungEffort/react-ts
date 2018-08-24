import * as React from 'react';
import './footer.scss'

class Footer extends React.Component {
    public render() {
        return (
            <footer>
                <div style={{position: 'relative',top: '16px'}}>
                    <p>All Rights Reserved</p>
                    <p>
                        <span>版权所有</span> | <span>探索未知</span>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer