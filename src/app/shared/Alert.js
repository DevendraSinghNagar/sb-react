import React from 'react'
// import PropTypes from 'prop-types'

const Alert = ({ alert }) => {
    const handlerCapitalize = (word) => word.slice(0, 1).toUpperCase().concat(word.slice(1));

    return (
        <div className='col-12'>
            {alert && <div className={`alert alert-dismissible fade show alert-${alert.type}`} role="alert">
                <strong>{handlerCapitalize(alert.type)}!</strong> {alert.message}
            </div>}
        </div>
    )
}

// Alert.propTypes = {
//     type: PropTypes.string.isRequired,
//     message: PropTypes.string
// }

export default Alert
