import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';


class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = { conut: 0 }
    }

    increment() {
        this.setState({ conut: this.state.conut + 1 })
    }

    decrement() {
        this.setState({ conut: this.state.conut - 1 })
    }

    render() {
        return (
            <section>
                <div>
                    <div id="text">
                        <h2 id="h2">Cou<span id="offset">nter[{this.state.conut}]</span></h2>
                    </div>
                </div>
                <a class="rss2" onClick={() => this.increment()}>+</a>
                <a class="rss1" onClick={() => this.decrement()}>-</a>
            </section>

        );
    }
}

ReactDOM.render(
    <Counter />,
    document.querySelector('#root')
);