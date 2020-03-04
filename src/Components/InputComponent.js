import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

export const InputComponent = ({ size,label,type,onChange }) => {
        return (
            <React.Fragment>
                <form autoComplete="off">
                 <TextField
                  size={size} 
                  type={type} 
                  label={label}
                  onChange={onChange}
                  variant="outlined" />
                </form>
            </React.Fragment>
        )
}


InputComponent.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string
}
