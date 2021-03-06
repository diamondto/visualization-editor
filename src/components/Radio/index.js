import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Radio } from '@tarojs/components/dist-h5/react';

export default class Radio1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Radio style={toJS(style)} {...others}>
				{children}
			</Radio>
		);
	}
}

Radio1.propTypes = {
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	style: PropTypes.object
};

Radio1.defaultProps = {
	checked: false,
	disabled: false,
	style: {}
};
