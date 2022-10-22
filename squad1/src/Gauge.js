import React from 'libs/react';
import {
    CircularProgress
} from 'libs/@chakra-ui/react';

const Gauge = () => {

    return (
        // Change the size to 120px
        <CircularProgress value={30} size='120px' />
    )
}

export default Gauge;