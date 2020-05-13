import React, { useState } from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { StyledInput } from './style'

export const InputPassword = props => {

    const [hidden, setHidden] = useState('hidden');
    const [value, setValue] = useState('');
    //const invalidChars = [' ', '@', '*', '!', '%', ';', ':', '.']; // @ * ! % ; : . 

    const toggleHidden = () => hidden ? setHidden(false) : setHidden(true);
    // const handleKey = ({ key }) => {
    //     console.log(key)
    //     return invalidChars.includes(key) ? '' : setValue(value + key)
    // };

    return (

        <StyledInput
            {...props}
            type={hidden ? 'password' : 'text'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoComplete={'off'}

            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleHidden}

                        edge="end"
                    >
                        {hidden ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>,

            }}
            variant="filled" />
    )
}

export const InputText = props => {
    const [value, setValue] = useState('');
    //const invalidChars = [' ', '@', '*', '!', '%', ';', ':', '.']; // @ * ! % ; : . 

    // const handleKey = ({ key }) => invalidChars.includes(key) ? '' : setValue(value + key);

    return (

        <StyledInput
            label={props.label}
            id={props.id}
            autoComplete={'off'}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            variant="filled"

        />

    )

}