import React from 'react';
import ReactDom from 'react-dom';
import { Paper, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class SearchBar extends React.Component {
  state = {
    searchTerm: ''
  };

  handleChange = ev => {
    this.setState({
      searchTerm: ev.target.value
    });
  };

  handleSubmit = ev => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    ev.preventDefault();
  };

  render() {
    return (
      <Paper elevation={6} style={{ padding: '25px' }}>
        <form onSubmit={this.handleSubmit}>
          <TextField fullWidth label="Search..." onChange={this.handleChange} />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
