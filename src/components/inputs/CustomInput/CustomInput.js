import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import TextField from '@mui/material/TextField';

export default function CustomInput(props) {
    const [field, meta] = useField(props);
    const inputProps = {
        label: props.label,
        type: props.type,
        name: props.name,
        multiline: props.multiline
    }

    return (
        <TextField 
            id={props.name}
            error= {!!meta.error} 
            fullWidth
            {...field}
            {...inputProps} 
            minRows="3"
            helperText={meta.error}
            variant="filled"
            color="secondary"
        />         
    )
}

CustomInput.propTypes = {
    field: PropTypes.object,
    meta: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    multiline: PropTypes.bool
}