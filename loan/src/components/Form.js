import React, { Component } from 'react';

class Form extends Component {
    state = {  
        amount: '',
        term: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // read the value fron the state
        const {amount, term} = this.state;

        // pass the data to the main component
        this.props.loanInformation(amount, term);
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        
        // update the state
        this.setState({
            [name] : Number(value)
        })
    }

    validatedForm = () => {
        // destructuring
        const {amount, term} = this.state;

        const notValid = !amount || !term;
        return notValid;
    }

    render() { 

        // extract some contnts from the state
       // const {amount} = this.state;
        return ( 
            <form onSubmit ={this.handleSubmit}> 
                <div className="row">
                    <label>Amount</label>
                    <input 
                    onChange={this.handleChange}
                    name="amount" 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Eg: 3000" />
                </div>
                <div>
                    <label>Months to Repay</label>
                    <select 
                    onChange= {this.handleChange}
                    name="term" 
                    className="u-full-width">
                        <option value="">Select</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                    </select>
                </div>
                <div>
                    <input 
                    disabled={this.validatedForm()}
                    type="submit" 
                    value="Calculate" 
                    className="u-full-width button-primary" />
                </div>
            </form>
         );
    }
}
 
export default Form;