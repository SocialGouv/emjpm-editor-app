import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';
import { useThemeUI } from 'theme-ui';

import { getStyle } from './style';

export const Select = (props) => {
  const context = useThemeUI();
  return <ReactSelect styles={getStyle(props, context)} {...props} />;
};

Select.propTypes = {
  hasError: PropTypes.bool,
  size: PropTypes.string,
};

Select.defaultProps = {
  hasError: false,
  size: 'large',
};
