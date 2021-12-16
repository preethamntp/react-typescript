import React from 'react'
import { keyframes } from '@emotion/react';
import { SxProps, Theme } from '@mui/system';
import Box, { BoxProps } from '@mui/material/Box';

const spinner = keyframes({
    from: {
        transform: 'rotate(0deg)',
    },
    to: {
        transform: 'rotate(360deg)',    
    }
})

const style: SxProps<Theme> = {
    width: ({ spacing }) => spacing(20),
    height: ({ spacing }) => spacing(20),
    borderWidth: ({ spacing }) => spacing(1),
    borderRadius: ({ spacing }) => spacing(50),
    borderStyle: 'solid',
    borderLeftColor: 'blue',
    borderTopColor: 'red',
    animation: `${spinner}  2s linear infinite`
}


function CircularLoader(props: BoxProps) {
    return <Box sx={style} {...props} />
}

export default CircularLoader
