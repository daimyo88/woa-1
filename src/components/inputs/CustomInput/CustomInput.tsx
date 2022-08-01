import React, { FC } from 'react';
import { useField } from 'formik';

import TextField from '@mui/material/TextField';

interface InputProps {
    type: string,
    name: string,
    isrequired?: string,
    label?: string,
    multiline?: boolean
}

const CustomInput: FC<InputProps> = (props: InputProps) => {

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

export default CustomInput;