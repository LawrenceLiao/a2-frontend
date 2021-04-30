/* eslint-disable no-undef */
import React, { useState, useEffect} from 'react';
import {
  Grid,
} from '@material-ui/core';
import * as apiUtils from '../../utils/apiUtils';
import UserArea from './UserArea/UserArea';
import SubscriptionArea from './SubscriptionArea/SubscriptionArea'

const Main = () => {

const [subscriptions, setSubscriptions] = useState([]);

const fetchData = async () => {
    const email = localStorage.getItem('email');
    const subscriptionResponse = await apiUtils.getListOfSubscription({email});
    if(subscriptionResponse.status === 200) {
        setSubscriptions(subscriptionResponse.data);
    }
};
useEffect(() => {
  fetchData();
}, [])

return(
    <Grid>
      <div>
        <UserArea />
        <hr/>
        <SubscriptionArea subscriptions={subscriptions}/>
      </div>
    </Grid>
    );
};

  export default Main;