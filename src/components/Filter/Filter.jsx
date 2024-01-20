import PropTypes from 'prop-types';

export const Filter = ({ filter, handleFilterChange }) => {
    return (
        <input value={filter} name="filter" placeholder="Search by name" onChange={handleFilterChange}/>
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    handleFilterChange: PropTypes.func
}