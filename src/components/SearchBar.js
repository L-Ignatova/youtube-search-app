import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: this.props.defaultQuery };

  onFormSubmit = (ev) => {
    ev.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className='ui segment'>
        <h4>Video search</h4>
        <form onSubmit={this.onFormSubmit} className="ui fluid icon input">
          <input 
            type="text" 
            value={this.state.searchTerm} 
            onChange={(ev) => this.setState({ searchTerm: ev.target.value })} 
          />
          <i aria-hidden="true" className="search circular link icon"></i>
        </form>
      </div>
    );
  }
}

export default SearchBar;