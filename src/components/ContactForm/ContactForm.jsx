import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
    name: '',
    number: ''
}

export class ContactForm extends Component {
    state = {...INITIAL_STATE}
    
    contactNameId = nanoid();
    contactNumberId = nanoid();

    handleChange = ({target}) => {
        const { name, value } = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({ ...this.state });
        this.reset();
    }

    reset() {
        this.setState({ ...INITIAL_STATE });
    }

    render() {
        const { contactNameId, contactNumberId, handleChange, handleSubmit } = this;
        const { name, number } = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={contactNameId}>Name</label>
                    <input value={name} onChange={handleChange} id={contactNameId} type="text" name="name" placeholder="name" required />
                </div>
                
                <div>
                    <label htmlFor={contactNumberId}>Number</label>
                    <input value={number} onChange={handleChange} id={contactNumberId} type="tel" name="number" placeholder="number" required />
                </div>
            
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
    
