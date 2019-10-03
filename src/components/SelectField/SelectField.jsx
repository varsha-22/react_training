// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
import RadioGroups from '../RadioGroup/RadioGroups';
// eslint-disable-next-line no-unused-vars
import ButtonDemo from '../Button/ButtonDemo';
// import { String, Object } from 'yup';
// const FormSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   sports: Yup.string()
//     .required('Required')
// });

// //check validity
//  FormSchema.isValid({
//    name:'Varsha',
//    sports:'select'
//  }).then((valid) => valid);

const selectStyle = {
  background: '#F0F3FB',
  border: '1px solid #F0F3FB',
  borderRadius: '4px',
  width: '75%',
  padding: '20px',
  fontSize: '16px',
  color: '#3F3F3F',
  defaultValue:'Select'
  

}

const inputstyle = {
width: "75%",
padding: "12px 20px",
margin: "8px 0",
boxSizing: "border-box",
borderRadius: "4px"
};

class SelectField extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     name: '',
  //      sports :  'select',
  //      cricket : 'group1',
  //      football: 'group2',
  //      isEnabled: false,
  //      formIsValid: true,
  //      errors: {
  //                 minNameLength: "name must be at least 3 characters",
  //                 notEmpty: "name is required",
  //    } 

  //   };
  // }


  // onChangeHandle = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  //   this.state.isEnabled = true;
  // }

 

  renderSwitch() {
    // const { rgrpid1, rgrpid2 } = this.props;

    // console.log(rgrpid1);
    // console.log(rgrpid2);
    console.log(this.props,'ada');
    switch(this.props.sports) {
      case 'cricket':
         return <RadioGroups  name1={this.props.cricket} sport={this.props.sports}/>;
      // eslint-disable-next-line no-unreachable
      break;
      case 'football':
       return <RadioGroups name2={this.props.football} />;
      // eslint-disable-next-line no-unreachable
      break;  
      default:
        return <p></p>;
    }
  }

  // handleButton = (event) => {
  //   if(this.state.name === ''){
  //     alert('Name field is required');
  //   }else{
  //     const username = this.state.value;
  //       alert('Hello , ', username);
  //   }
        
  // }
  
    // selectedValue = (event) => {
    //   this.setState({value: event.target.value});
    //   let val = event.target.value;
    //   let radiobtn = '';
    //   let radiobtn1 = '';
    //   if(val === 'one'){
    //         radiobtn = <RadioGroups/>;
    //   }else if(val === 'two'){
    //     radiobtn1 = <RadioGroups />;
    //   }else{

    //   }

    //   this.setState({radiobtn});
    //   this.setState({radiobtn1});
  
    // }

    render(){
      // eslint-disable-next-line no-unused-vars
      const {  name, onChangeSelect, handleButton, isEnabled, ...rest} = this.props;
      return (
        <div>
        <input type='text' name='name' onChange= {onChangeSelect} style={inputstyle}
        placeholder='Name' value={name}/>
        <select style={selectStyle} onChange={onChangeSelect} name='sports'>
          <option value='select'>Select</option>
          <option value='cricket'>Cricket</option>
          <option value='football'>Football</option>
        </select><br/><br/>
        <div>
        {this.renderSwitch()}
        </div>
        <ButtonDemo isEnabled={isEnabled} onClick={handleButton} />
        </div>
      )
    }
}


// const schema= yup.object().shape({
//     name:yup.string().required('name is reruired')
// });
// schema
// .isValid({
//     name:''
// }).then(formIsValid =>
//     formIsValid);

export default SelectField;
