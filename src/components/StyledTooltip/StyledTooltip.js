import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const StyledTooltip = styled(({ className, ...props }) => (
    <Tooltip arrow {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.tooltipBackground,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.tooltipBackground,
    },
  }));

export default function St(props) {
    return <StyledTooltip {...props}>{props.children}</StyledTooltip>
}

St.propTypes = {
  enterDelay: PropTypes.number,
  enterNextDelay: PropTypes.number,
  disableTouchListener: PropTypes.bool,
  title: PropTypes.node,
  placement: PropTypes.string
}