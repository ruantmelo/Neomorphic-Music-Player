import React, { useState, useContext } from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { inputStyles } from './style'
import { ThemeContext } from '../../styles/themes';
import { makeStyles } from '@material-ui/core/styles';

export const InputPassword = props => {

    const [hidden, setHidden] = useState('hidden');
    const [value, setValue] = useState('');
    const { theme } = useContext(ThemeContext);
    //const invalidChars = [' ', '@', '*', '!', '%', ';', ':', '.']; // @ * ! % ; : . 

    const itClasses = makeStyles(inputStyles[theme.name])()

    const toggleHidden = () => hidden ? setHidden(false) : setHidden(true);
    // const handleKey = ({ key }) => {
    //     console.log(key)
    //     return invalidChars.includes(key) ? '' : setValue(value + key)
    // };

    return (
        <TextField
            label={props.label}
            id={props.id}
            classes={{ root: itClasses.root }}
            type={hidden ? 'password' : 'text'}
            value={value}
            autoComplete={'off'}

            onChange={(e) => setValue(e.target.value)}

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



            variant="filled"
        />
    )
}

export const InputText = props => {
    const [value, setValue] = useState('');
    const { theme } = useContext(ThemeContext);
    const itClasses = makeStyles(inputStyles[theme.name])()
    const invalidChars = [' ', '@', '*', '!', '%', ';', ':', '.']; // @ * ! % ; : . 

    // const handleKey = ({ key }) => invalidChars.includes(key) ? '' : setValue(value + key);

    return (
        <TextField
            label={props.label}
            id={props.id}
            autoComplete={'off'}
            onChange={(e) => setValue(e.target.value)}
            classes={{ root: itClasses.root }}
            value={value}
            variant="filled"

        />
    )

}