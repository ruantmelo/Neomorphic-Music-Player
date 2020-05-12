import React from 'react';
import { Link as MLink } from 'react-router-dom';



const Link = ({ to, children }) => (
    <MLink to={to}>{children}</MLink>
)

export default Link;