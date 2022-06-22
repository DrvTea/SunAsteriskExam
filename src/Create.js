import { React, Component } from 'react';

export default class Create extends Component {

    constructor() {
        super();
        this.state = {
            cards: [],
            title: "",
            content: ""
        }
    }

    componentDidMount() {
        let cards = localStorage.getItem('cards')

        if (!cards) {
            cards = []
        } else {
            cards = JSON.parse(cards);
        }

        this.setState({ cards: cards })

    }

    handleChanges(event) {
        let name = event.target.name;
        let value = event.target.value;

        if (name === "title") {
            this.setState({ title: value });
        } else {
            this.setState({ content: value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        let card = {
            title: this.state.title,
            content: this.state.content,
            dateCreated: new Date()
        };

        let cards = this.state.cards;

        cards.push(card);

        this.setState({ cards: cards });
        localStorage.setItem("cards", JSON.stringify(cards));

        alert("Submitted");

        window.location.replace("/");
    }

    render() {
        return (
            <>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input name="title" type="text" placeholder="Article Title" onChange={(event) => this.handleChanges(event)} /><br />
                    <textarea name="content" placeholder="Article Content" onChange={(event) => this.handleChanges(event)} /><br />
                    <input type="submit" />
                </form>
            </>
        );
    }
}