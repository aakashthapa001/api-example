"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactNoSsr = require("react-no-ssr");

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _MyLayout = require("../components/MyLayout");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _Loading = require("../components/Loading");

var _Loading2 = _interopRequireDefault(_Loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\JS TUTORIALS AND PRACTICE\\JS PRACTICE\\next-js-practice\\api-example\\pages\\users.js?entry";


var Post = function Post(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, props.users.name), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.users.email), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, props.users.phone));
};

Post.getInitialProps = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(context) {
    var id, res, user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = context.query.id;
            _context.next = 3;
            return (0, _isomorphicUnfetch2.default)("http://jsonplaceholder.typicode.com/users/" + id);

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            user = _context.sent;
            return _context.abrupt("return", { users: user });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFx1c2Vycy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImZldGNoIiwiTm9TU1IiLCJMYXlvdXQiLCJMb2FkaW5nIiwiUG9zdCIsInByb3BzIiwidXNlcnMiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwicmVzIiwianNvbiIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLElBQU0sT0FBTyxTQUFQLEFBQU8sWUFBQTt5QkFDWCxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQUs7QUFBTDtBQUFBLFdBQUssQUFBTSxNQURiLEFBQ0UsQUFBaUIsQUFDakIsdUJBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsV0FBSSxBQUFNLE1BRlosQUFFRSxBQUFnQixBQUNoQix3QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxXQUFJLEFBQU0sTUFKRCxBQUNYLEFBR0UsQUFBZ0I7QUFKcEI7O0FBUUEsS0FBQSxBQUFLLDhCQUFMO3NGQUF1QixpQkFBQSxBQUFlLFNBQWY7aUJBQUE7a0VBQUE7Z0JBQUE7eUNBQUE7ZUFDYjtBQURhLGlCQUNOLFFBRE0sQUFDRSxNQURGLEFBQ2I7NEJBRGE7bUJBRUgsZ0ZBRkcsQUFFSCxBQUFtRDs7ZUFBL0Q7QUFGZSwyQkFBQTs0QkFBQTttQkFHRixJQUhFLEFBR0YsQUFBSTs7ZUFBakI7QUFIZSw0QkFBQTs2Q0FLZCxFQUFFLE9BTFksQUFLZCxBQUFTOztlQUxLO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBdkI7O3VCQUFBOzRCQUFBO0FBQUE7QUFRQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJ1c2Vycy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9KUyBUVVRPUklBTFMgQU5EIFBSQUNUSUNFL0pTIFBSQUNUSUNFL25leHQtanMtcHJhY3RpY2UvYXBpLWV4YW1wbGUifQ==