import React from 'react';

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit = (ev) => {
    ev.preventDefault();

    this.props.onFormSubmit(this.state.searchTerm);
  }

  submitQuery(ev) {
    this.setState({ searchTerm: ev.target.value });
  }

  render() {
    return (
      <div className='ui segment'>
        <h4>Video search</h4>
        <form onSubmit={this.onFormSubmit} className="ui fluid icon input">
          <input 
            type="text" 
            value={this.state.searchTerm} 
            onChange={this.submitQuery.bind(this)} />
          <i aria-hidden="true" className="search circular link icon"></i>
        </form>
      </div>
    );
  }
}

export default SearchBar;