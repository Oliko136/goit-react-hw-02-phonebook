import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
    const items = contacts.map(({ id, name, number }) =>
        <li key={id}>{name}: {number} <button type='button' onClick={() => deleteContact(id)}>Delete</button></li>);

        return (
            <ul>
                {items}
            </ul>
        )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    deleteContact: PropTypes.func.isRequired
}

