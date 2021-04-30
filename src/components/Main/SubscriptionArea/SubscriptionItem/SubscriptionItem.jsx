import React from 'react';
import {Button} from '@material-ui/core'
import './SubscriptionItem.scss'
const SubscriptionItem = ({title, artist, year, imgUrl}) => {

return(
    <div>
    <span>{title}</span>
    <span>{artist}</span>
    <span>{year}</span>
    <span>
        <img src = {imgUrl} alt = "Avatar"></img>
    </span>
    <span>
        <Button>
            Unsubscribe
        </Button>

    </span>
    </div>
);
};

export default SubscriptionItem;