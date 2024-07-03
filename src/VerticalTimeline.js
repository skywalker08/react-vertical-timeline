import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const VerticalTimeline = ({
  animate = true,
  className = '',
  layout = '2-columns',
  lineColor = '#FFF',
  lineWidth = 2,
  children,
}) => {
  if (typeof window === 'object') {
    document.documentElement.style.setProperty('--line-color', lineColor);
    document.documentElement.style.setProperty('--line-width', `${lineWidth}px`);
  }
  return (
    <div
      className={classNames(className, 'vertical-timeline', {
        'vertical-timeline--animate': animate,
        'vertical-timeline--two-columns': layout === '2-columns',
        'vertical-timeline--one-column-left':
          layout === '1-column' || layout === '1-column-left',
        'vertical-timeline--one-column-right': layout === '1-column-right',
      })}
    >
      {children}
    </div>
  );
};

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool,
  layout: PropTypes.oneOf([
    '1-column-left',
    '1-column',
    '2-columns',
    '1-column-right',
  ]),
  lineColor: PropTypes.string,
  lineWidth: PropTypes.number,
};

export default VerticalTimeline;
