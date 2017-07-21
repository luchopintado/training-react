import React, { Component } from 'react';

class SearchBar extends Component {

    constructor (props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
               <input
                    value={this.state.term}
                    onChange={evt => {this.onInputChange(evt.target.value)}}
                    type="text"
                    className="form-control"
                />
            </div>
        );
    }
}

export default SearchBar;
