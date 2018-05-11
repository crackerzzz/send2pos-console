import React from 'react';
import TopBar from './TopBar';
import SearchFilter from './SearchFilter';
import SearchResults from './SearchResults';
import SearchService from '../services/SearchService';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    handleSearch = (searchParam) => {
        console.log('Search : ' + searchParam);
        this.setState({ results: SearchService(searchParam) });
    }

    render() {
        return (
            <div>
                <TopBar welcomeMessage="Welcome Shreejwal" />
                <SearchFilter
                    onSearch={this.handleSearch}
                />
                <SearchResults results={this.state.results} />
            </div>
        );
    }
}

export default Main;
