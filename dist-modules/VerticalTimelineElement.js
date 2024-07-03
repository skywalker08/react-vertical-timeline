"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _reactIntersectionObserver = require("react-intersection-observer");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var VerticalTimelineElement = function VerticalTimelineElement(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? '' : _ref$children,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$contentArrowStyl = _ref.contentArrowStyle,
    contentArrowStyle = _ref$contentArrowStyl === void 0 ? null : _ref$contentArrowStyl,
    _ref$contentStyle = _ref.contentStyle,
    contentStyle = _ref$contentStyle === void 0 ? null : _ref$contentStyle,
    _ref$date = _ref.date,
    date = _ref$date === void 0 ? '' : _ref$date,
    _ref$dateClassName = _ref.dateClassName,
    dateClassName = _ref$dateClassName === void 0 ? '' : _ref$dateClassName,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? null : _ref$icon,
    _ref$iconClassName = _ref.iconClassName,
    iconClassName = _ref$iconClassName === void 0 ? '' : _ref$iconClassName,
    _ref$iconOnClick = _ref.iconOnClick,
    iconOnClick = _ref$iconOnClick === void 0 ? null : _ref$iconOnClick,
    _ref$onTimelineElemen = _ref.onTimelineElementClick,
    onTimelineElementClick = _ref$onTimelineElemen === void 0 ? null : _ref$onTimelineElemen,
    _ref$iconStyle = _ref.iconStyle,
    iconStyle = _ref$iconStyle === void 0 ? null : _ref$iconStyle,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? '' : _ref$id,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? '' : _ref$position,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? null : _ref$style,
    _ref$textClassName = _ref.textClassName,
    textClassName = _ref$textClassName === void 0 ? '' : _ref$textClassName,
    _ref$intersectionObse = _ref.intersectionObserverProps,
    intersectionObserverProps = _ref$intersectionObse === void 0 ? {
      rootMargin: '0px 0px -40px 0px',
      triggerOnce: true
    } : _ref$intersectionObse,
    _ref$visible = _ref.visible,
    visible = _ref$visible === void 0 ? false : _ref$visible,
    _ref$shadowSize = _ref.shadowSize,
    shadowSize = _ref$shadowSize === void 0 ? 'small' : _ref$shadowSize;
  return /*#__PURE__*/_react.default.createElement(_reactIntersectionObserver.InView, intersectionObserverProps, function (_ref2) {
    var inView = _ref2.inView,
      ref = _ref2.ref;
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: ref,
      id: id,
      className: (0, _classnames.default)(className, 'vertical-timeline-element', {
        'vertical-timeline-element--left': position === 'left',
        'vertical-timeline-element--right': position === 'right',
        'vertical-timeline-element--no-children': children === ''
      }),
      style: style
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
      // eslint-disable-line jsx-a11y/no-static-element-interactions
      style: iconStyle,
      onClick: iconOnClick,
      className: (0, _classnames.default)(iconClassName, 'vertical-timeline-element-icon', "shadow-size-".concat(shadowSize),
      // for shadow size
      {
        'bounce-in': inView || visible,
        'is-hidden': !(inView || visible)
      })
    }, icon), /*#__PURE__*/_react.default.createElement("div", {
      style: contentStyle,
      onClick: onTimelineElementClick,
      className: (0, _classnames.default)(textClassName, 'vertical-timeline-element-content', {
        'bounce-in': inView || visible,
        'is-hidden': !(inView || visible)
      })
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: contentArrowStyle,
      className: "vertical-timeline-element-content-arrow"
    }), children, /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _classnames.default)(dateClassName, 'vertical-timeline-element-date')
    }, date))));
  });
};
VerticalTimelineElement.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  className: _propTypes.default.string,
  contentArrowStyle: _propTypes.default.shape({}),
  contentStyle: _propTypes.default.shape({}),
  date: _propTypes.default.node,
  dateClassName: _propTypes.default.string,
  icon: _propTypes.default.element,
  iconClassName: _propTypes.default.string,
  iconStyle: _propTypes.default.shape({}),
  iconOnClick: _propTypes.default.func,
  onTimelineElementClick: _propTypes.default.func,
  id: _propTypes.default.string,
  position: _propTypes.default.string,
  style: _propTypes.default.shape({}),
  textClassName: _propTypes.default.string,
  visible: _propTypes.default.bool,
  shadowSize: _propTypes.default.string,
  intersectionObserverProps: _propTypes.default.shape({
    root: _propTypes.default.object,
    rootMargin: _propTypes.default.string,
    threshold: _propTypes.default.number,
    triggerOnce: _propTypes.default.bool
  })
};
var _default = exports.default = VerticalTimelineElement;