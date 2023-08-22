import { Component } from "react";
import './ClassState.css';
const VALID_CODE = '123456';

class ClassState extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: false,
      loading: false,
      code: ''
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.code !== VALID_CODE) {
          this.setState({
            loading: false,
            error: true
          });
        }
        this.setState({
          loading: false,
        })
      }, 3000)
    }
  }
  
  
  render() {
    const { name } = this.props
    
    const handleClick = () => {
      this.setState({
        loading: true,
        error: false
      })
    }

    const handleChange = ({ target }) => {
      this.setState({
        code: target.value
      })
    }

    return (
      <div className="content-wrapper">
        <h2>Delete {name}</h2>
        <p>Please, write the security code</p>
        { this.state.loading && (
          <p><b>Loading...</b></p>
        )}
        { this.state.error && (
          <p className="error"><b>Code is invalid</b></p>
        )}
        <input 
          placeholder="Security code" 
          type="text" 
          value={this.state.code}
          onChange={ handleChange }
        />
        <button onClick={handleClick}>Check</button>
      </div>
    );
  }
}

export { ClassState }