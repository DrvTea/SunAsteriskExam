import { React, Component } from "react";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        let cards = localStorage.getItem('cards');
        console.log(cards);
        if (cards) {
            this.setState({ cards: cards });
        } else {
            this.setState({ cards: [] });
        }
    }

    render() {
        let cards = this.state.cards;
        
        return (
            <>
                <nav>
                    <a href="/create">Create New Article</a>
                </nav>
                {/* {cards.forEach(entry => {
                    <div>Card</div>
                })} */}
                {this.state?.cards.map((entry, key) => {
                    return (<div key={key}>
                        <h2>{entry.title}</h2>
                        <h2>{entry.content}</h2>
                    </div>);
                })}
            </>
        );
    }
}