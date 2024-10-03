import Typography  from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';

interface props {
    label: string,
    icon: React.ReactNode,
    placeholder: string,
    type : string
}

export const InputFiled = ({
    label,
    icon,
    placeholder,
    type
}: props) => {
    return (
        <Stack direction={"column"} gap={".9rem"}>
            <Typography 
                variant='body1' 
                component={"span"} 
            >
                {label} <span style={{color : "red"}}>*</span>
            </Typography>
            <TextField
                id={`input-for-${label}`}
                size="small"
                type={type}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                {icon}
                            </InputAdornment>
                        ),
                    },
                }}
                // variant="outlined"
                placeholder={placeholder}
            />
        </Stack>
    )
}
