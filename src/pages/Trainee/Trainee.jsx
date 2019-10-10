//import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal';
import AddDialoge from './components/AddDialoge/AddDialoge';
import { customStyles } from './style';

Modal.setAppElement('#root')


export default class Trainee extends React.Component {
    constructor(props){
        super(props);
           this.state = {
                modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
     
    afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
     
    closeModal() {
        this.setState({modalIsOpen: false});
      }
    
 
    
    useStyles = makeStyles(theme => ({
            button: {
                margin: theme.spacing(1),
              },
    }));
        

    render() {
            const classes = this.useStyles;
        return (
            <div>      
            <Button color="primary" className={classes.button} onClick={this.openModal}>Add Trainee</Button>
            <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}>
            <AddDialoge/>
            </Modal>
            </div>

        );
    }
}