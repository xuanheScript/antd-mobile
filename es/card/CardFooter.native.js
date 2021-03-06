import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import { Text, View } from 'react-native';

var CardFooter = function (_React$Component) {
    _inherits(CardFooter, _React$Component);

    function CardFooter() {
        _classCallCheck(this, CardFooter);

        return _possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
    }

    _createClass(CardFooter, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                content = _a.content,
                extra = _a.extra,
                styles = _a.styles,
                style = _a.style,
                restProps = __rest(_a, ["content", "extra", "styles", "style"]);
            var contentDom = content !== undefined && React.isValidElement(content) ? React.createElement(
                View,
                { style: { flex: 1 } },
                content
            ) : React.createElement(
                Text,
                { style: styles.footerContent },
                content
            );
            var extraDom = extra !== undefined && React.isValidElement(extra) ? React.createElement(
                View,
                { style: { flex: 1 } },
                extra
            ) : React.createElement(
                Text,
                { style: [styles.footerExtra] },
                extra
            );
            return React.createElement(
                View,
                _extends({ style: [styles.footerWrap, style] }, restProps),
                contentDom,
                extra ? extraDom : null
            );
        }
    }]);

    return CardFooter;
}(React.Component);

export default CardFooter;

CardFooter.defaultProps = {
    style: {}
};