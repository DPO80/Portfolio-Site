import React from 'react';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery;'

export default function JavaScriptMedia() {
    const matches = useMediaQuery (
        json2mq({
            minWith:600,
        }),
    );
    
    return <span>{`{ minWidth: 600 } matches: ${matches}`}</span>;
}

