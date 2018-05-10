import React from 'react';
import TopBar from './TopBar';
import SearchFilter from './SearchFilter';
import SearchResults from './SearchResults';
import SearchService from '../services/SearchService';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSearch = (searchParam) => console.log('Search : ' + SearchService(searchParam));

    render() {
        return (
            <div>
                <TopBar welcomeMessage="Welcome Shreejwal" />
                <SearchFilter onSearch={this.handleSearch} />
                <SearchResults />
            </div>
        );
    }
}

export default Main;
