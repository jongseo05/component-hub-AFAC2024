import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Input_field.css';

export default function BasicTextFields() {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);

        if (value.length < 5) {
            setError('Input must be at least 5 characters long');
        } else {
            setError('');
        }
    };

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '400px' } }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={inputValue}
                onChange={handleChange}
                InputProps={{
                    className: `input_field ${error ? 'input_field_error' : 'input_field_success'}`
                }}
            />
            {error && <div className="error_message">{error}</div>}
        </Box>
    );
}