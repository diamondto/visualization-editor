import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toJS } from 'mobx';
import { Form } from '@tarojs/components/dist-h5/react';

export default class Form1 extends Component {
	render() {
		const { style, children, ...others } = this.props;
		return (
			<Form style={toJS(style)} {...others}>
				{children}
			</Form>
		);
	}
}

Form1.propTypes = {
	reportSubmit: PropTypes.bool,
	style: PropTypes.object
};

Form1.defaultProps = {
	reportSubmit: false,
	style: {}
};
