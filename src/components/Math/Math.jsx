import React, { Component } from 'react'
import { TextField, Button , Select } from '@material-ui/core';
import { pStyle, divStyle } from '../TextField/style';


export default class Math extends Component {
    constructor(props){
        super(props);
        this.state={
            first: 0,
            second: 0,
            operator: null,
            result:null
        }
    }
    // const { first, second, operator } = this.state;
    handleResultButton = (event) => {
        event.preventDefault();
    // eslint-disable-next-line no-unused-vars
        let result = this.state.result;
        const first = this.state.first;
        const second = this.state.second;
        const operator =  this.state.operator;
        console.log('first:', typeof first);   
        console.log('second:',second);
        console.log('operator:',operator);
    //const info = {frist: first, second: second, operator: operator};
        // const data = this.state.data;
      //  this.push(info);
        if(operator === '+'){
            result = Number(first) + Number(second) ;
        }else if (operator === '-'){
            result = first - second;
        }else if (operator === '/'){
            result = (second === 0? "infinity": first / second);
        }else if (operator === '*'){
            result = first * second;
        }else{
            result = 'Invalid Operator';
        }

     //   console.log('result:',result)

        alert('Submitted');
        this.setState({
            result: result
        });
        
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          });

     //     this.state.operator.map(opera => indexOff())
         
    }

  render() {
    return (
      <div>

        <center>
            <div style={divStyle}>
                <TextField name='first' placeholder='First Number' 
                onChange={this.handleInput} margin='dense' 
                widht='100%' value={this.state.first}/><br/><br/>

                <TextField name='second' placeholder='Second Number' 
                onChange={this.handleInput} margin='dense' 
                value={this.state.second}/><br/><br/>

                <TextField name='operator' placeholder='Operator' 
                onChange={this.handleInput} margin='dense' 
                value={this.state.operator}/>
                <br/>
                <Select name='operator' onChange={this.handleInput}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='/'>/</option>
                <option value='*'>*</option>
                </Select><br/><br/>
                
                <Button onClick={this.handleResultButton}>
                Click Me!</Button>
                <p style={pStyle}>{this.state.result}</p>
            </div>
        </center>
    </div>
    )
  }
}
