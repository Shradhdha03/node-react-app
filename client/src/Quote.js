import React from 'react';
class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: []
        };
    }
    componentDidMount() {
        fetch("/api/quotes")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        quotes: result
                    });
                },
                (error) => {
                    this.setState({
                        quotes: []
                    });
                }
            )
    }

    render() {
        const { quotes } = this.state;

        return (
            <div className="row">
                {quotes.map(quote => (
                    <div className="col-md-4 mt-3 mb-3" key={quote.quote}>
                        <div className="card">
                            <div className="card-header">{quote.category}</div>
                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>{quote.quote}</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">{quote.author}</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        );

    }
}
export default Quotes;