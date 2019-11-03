import React from 'react';
import styled from 'styled-components';

import {dateTime, full} from '../utils/date-format';
import {colors} from '../styles/vars';

const StyledDate = styled.time`
    color: ${colors.accent};
    display: block;
    font-size: 0.9em;
    margin: 0.5em 0 0;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`;

const Date = ({children}) => <StyledDate dateTime={dateTime(children)}>{full(children)}</StyledDate>;

export default Date;
