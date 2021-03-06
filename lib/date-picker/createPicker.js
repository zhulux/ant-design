'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports["default"] = createPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createPicker(TheCalendar) {
    // use class typescript error
    var CalenderWrapper = _react2["default"].createClass({
        displayName: 'CalenderWrapper',
        getDefaultProps: function getDefaultProps() {
            return {
                prefixCls: 'lud-calendar',
                allowClear: true
            };
        },
        getInitialState: function getInitialState() {
            var props = this.props;
            return {
                value: props.value || props.defaultValue,
                tempValue: undefined
            };
        },
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            if (nextProps.value !== undefined) {
                this.setState({
                    value: nextProps.value,
                    tempValue: nextProps.value
                });
            }
        },
        clearSelection: function clearSelection(e) {
            e.preventDefault();
            e.stopPropagation();
            this.setState({ value: null });
            this.handleChange(null);
        },
        handleChange: function handleChange(value) {
            var props = this.props;
            if (props.value === undefined) {
                this.setState({ value: value });
            }
            props.onChange(value, value && value.format(props.format) || '');
        },
        handleTempChange: function handleTempChange(tempValue) {
            this.setState({ tempValue: tempValue });
        },

        // Clear temp value and trigger onChange when hide DatePicker[showTime] panel
        handleOpenChange: function handleOpenChange(open) {
            var _this = this;

            var _props = this.props,
                showTime = _props.showTime,
                onOpenChange = _props.onOpenChange;

            if (!open) {
                (function () {
                    // tricky code to avoid triggering onChange multiple times
                    // when click `Now` button
                    var tempValue = void 0;
                    _this.setState(function (prevState) {
                        tempValue = prevState.tempValue;
                        return {
                            tempValue: undefined
                        };
                    }, function () {
                        if (showTime && tempValue) {
                            _this.handleChange(tempValue);
                        }
                    });
                })();
            }
            if (onOpenChange) {
                onOpenChange(open);
            }
        },
        render: function render() {
            var _classNames,
                _this2 = this;

            var props = (0, _omit2["default"])(this.props, ['onChange']);
            var prefixCls = props.prefixCls;
            var locale = props.locale;
            var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
            var disabledTime = props.showTime ? props.disabledTime : null;
            var calendarClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-time', props.showTime), (0, _defineProperty3["default"])(_classNames, prefixCls + '-month', _MonthCalendar2["default"] === TheCalendar), _classNames));
            // 需要选择时间时，点击 ok 时才触发 onChange
            var pickerChangeHandler = {};
            var calendarHandler = {};
            if (props.showTime) {
                calendarHandler = {
                    // fix https://github.com/ant-design/ant-design/issues/1902
                    onSelect: function onSelect(value) {
                        _this2.handleTempChange(value);
                    }
                };
            } else {
                pickerChangeHandler = {
                    onChange: this.handleChange
                };
            }
            var calendar = _react2["default"].createElement(TheCalendar, (0, _extends3["default"])({ disabledDate: props.disabledDate, disabledTime: disabledTime, locale: locale.lang, timePicker: props.timePicker, defaultValue: props.defaultPickerValue || (0, _moment2["default"])(), dateInputPlaceholder: placeholder, prefixCls: prefixCls, className: calendarClassName, onOk: props.onOk, format: props.format }, calendarHandler));
            var clearIcon = !props.disabled && props.allowClear && this.state.value ? _react2["default"].createElement(_icon2["default"], { type: 'crosscircle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
            return _react2["default"].createElement(
                'span',
                { className: props.pickerClass, style: props.style },
                _react2["default"].createElement(
                    _Picker2["default"],
                    (0, _extends3["default"])({}, props, pickerChangeHandler, { onOpenChange: this.handleOpenChange, calendar: calendar, value: this.state.tempValue || this.state.value, prefixCls: prefixCls + '-picker-container', style: props.popupStyle }),
                    function (_ref) {
                        var value = _ref.value;

                        return _react2["default"].createElement(
                            'span',
                            null,
                            _react2["default"].createElement('input', { disabled: props.disabled, readOnly: true, value: value && value.format(props.format) || '', placeholder: placeholder, className: props.pickerInputClass }),
                            clearIcon,
                            _react2["default"].createElement('span', { className: prefixCls + '-picker-icon' })
                        );
                    }
                )
            );
        }
    });
    return CalenderWrapper;
}
module.exports = exports['default'];