import React, { useState } from 'react';

import '../style/simple-grid.scss';
import '../style/transaction-grid.scss';

export default function TransactionsGrid() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className="container grid">
                <h3>The Ledger</h3>
                <div className="row">
                    <div className="col-4">
                        111111211
                    </div>
                    <div className="col-4">
                        2222222
                    </div>
                    <div className="col-4">
                        3333333
                    </div>
                </div>
            </div>

            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}