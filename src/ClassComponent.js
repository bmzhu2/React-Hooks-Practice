import React from 'react';

class ClassComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      restricted: ['voldemort', 'moriarty', 'maleficent', 'palpatine',]
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.handleTitle();
  }

  componentDidUpdate() {
    this.handleTitle();
    this.handleColor();
  }

  isRestricted() {
    if (this.state.restricted.includes(this.state.name.toLowerCase())) return true;
  }

  handleInput(e) {
    this.setState({ name: e.target.value });
  }

  handleColor() {
    if (this.isRestricted()) {
      document.getElementsByClassName('form')[0].style.backgroundColor = 'red';
      document.title = 'ACCESS DENIED';
    } else {
      document.getElementsByClassName('form')[0].style.backgroundColor = 'white';
    }
  }

  handleTitle() {
    if (!this.state.name) {
      document.title = 'Name Check';
    } else if (this.isRestricted()) {
      document.title = 'ACCESS DENIED';
    } else {
      document.title = this.state.name;
    }
  }

  render() {

    return (

      <section className='form'>
        <header>Checking: {this.state.name}</header>
        <label>Please provide your name
          <input
            value={this.state.name}
            onChange={this.handleInput}
          />
        </label>
      </section>

    )
  }

}

export default ClassComponent;