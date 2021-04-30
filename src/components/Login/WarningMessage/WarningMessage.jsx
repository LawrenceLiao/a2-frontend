import React from 'react';
import './WarningMessage.scss';


const WarningMessage = ({ content }) => (
  <div className="warning">
    {content}
  </div>
);

export default WarningMessage;
