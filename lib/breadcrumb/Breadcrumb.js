'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _BreadcrumbItem = require('./BreadcrumbItem');

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

;
function getBreadcrumbName(route, params) {
    if (!route.breadcrumbName) {
        return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
        return params[key] || replacement;
    });
    return name;
}
function defaultItemRender(route, params, routes, paths) {
    var isLastItem = routes.indexOf(route) === routes.length - 1;
    var name = getBreadcrumbName(route, params);
    return isLastItem ? _react2["default"].createElement(
        'span',
        null,
        name
    ) : _react2["default"].createElement(
        'a',
        { href: '#/' + paths.join('/') },
        name
    );
}

var Breadcrumb = function (_React$Component) {
    (0, _inherits3["default"])(Breadcrumb, _React$Component);

    function Breadcrumb() {
        (0, _classCallCheck3["default"])(this, Breadcrumb);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Breadcrumb.prototype.componentDidMount = function componentDidMount() {
        var props = this.props;
        (0, _warning2["default"])(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead.');
    };

    Breadcrumb.prototype.render = function render() {
        var crumbs = void 0;
        var _props = this.props,
            separator = _props.separator,
            prefixCls = _props.prefixCls,
            routes = _props.routes,
            _props$params = _props.params,
            params = _props$params === undefined ? {} : _props$params,
            children = _props.children,
            _props$itemRender = _props.itemRender,
            itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

        if (routes && routes.length > 0) {
            (function () {
                var paths = [];
                crumbs = routes.map(function (route) {
                    route.path = route.path || '';
                    var path = route.path.replace(/^\//, '');
                    Object.keys(params).forEach(function (key) {
                        path = path.replace(':' + key, params[key]);
                    });
                    if (path) {
                        paths.push(path);
                    }
                    if (route.breadcrumbName) {
                        return _react2["default"].createElement(
                            _BreadcrumbItem2["default"],
                            { separator: separator, key: route.breadcrumbName },
                            itemRender(route, params, routes, paths)
                        );
                    }
                    return null;
                });
            })();
        } else if (children) {
            crumbs = _react2["default"].Children.map(children, function (element, index) {
                return (0, _react.cloneElement)(element, {
                    separator: separator,
                    key: index
                });
            });
        }
        return _react2["default"].createElement(
            'div',
            { className: prefixCls },
            crumbs
        );
    };

    return Breadcrumb;
}(_react2["default"].Component);

exports["default"] = Breadcrumb;

Breadcrumb.defaultProps = {
    prefixCls: 'lud-breadcrumb',
    separator: '/'
};
Breadcrumb.propTypes = {
    prefixCls: _react2["default"].PropTypes.string,
    separator: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.element]),
    routes: _react2["default"].PropTypes.array,
    params: _react2["default"].PropTypes.object,
    linkRender: _react2["default"].PropTypes.func,
    nameRender: _react2["default"].PropTypes.func
};
module.exports = exports['default'];