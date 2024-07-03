"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var VerticalTimeline = function VerticalTimeline(_ref) {
  var _ref$animate = _ref.animate,
    animate = _ref$animate === void 0 ? true : _ref$animate,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$layout = _ref.layout,
    layout = _ref$layout === void 0 ? '2-columns' : _ref$layout,
    _ref$lineColor = _ref.lineColor,
    lineColor = _ref$lineColor === void 0 ? '#FFF' : _ref$lineColor,
    _ref$lineWidth = _ref.lineWidth,
    lineWidth = _ref$lineWidth === void 0 ? 2 : _ref$lineWidth,
    children = _ref.children;
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
    document.documentElement.style.setProperty('--line-color', lineColor);
    document.documentElement.style.setProperty('--line-width', "".concat(lineWidth, "px"));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(className, 'vertical-timeline', {
      'vertical-timeline--animate': animate,
      'vertical-timeline--two-columns': layout === '2-columns',
      'vertical-timeline--one-column-left': layout === '1-column' || layout === '1-column-left',
      'vertical-timeline--one-column-right': layout === '1-column-right'
    })
  }, children);
};
VerticalTimeline.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  className: _propTypes.default.string,
  animate: _propTypes.default.bool,
  layout: _propTypes.default.oneOf(['1-column-left', '1-column', '2-columns', '1-column-right']),
  lineColor: _propTypes.default.string,
  lineWidth: _propTypes.default.number
};
var _default = exports.default = VerticalTimeline;