import React from 'react';
import SubscriptionItem from './SubscriptionItem/SubscriptionItem';
import './SubscriptionArea.scss'


const SubscriptionArea = ({subscriptions}) => {

return(
    <div>
        <ul>
            <div className="head">
                <span>Title</span>
                <span>Artist</span>
                <span>Year</span>
                <span>Avatar</span>
                <span>Action</span>
            </div>
            {
              subscriptions.map((subscription) => {
                  return <SubscriptionItem key={subscription.title} {...subscription}/>
              })  
            }
        </ul>
    </div>
);

};

export default SubscriptionArea;