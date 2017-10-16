"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require("styled-jsx\\style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require("../components/MyLayout.js");

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require("isomorphic-unfetch");

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\JS TUTORIALS AND PRACTICE\\JS PRACTICE\\next-js-practice\\api-example\\pages\\index.js?entry";


var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("h1", {
    className: "jsx-1632502308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Dummy Data"), _react2.default.createElement("ul", {
    className: "jsx-1632502308",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, props.users.map(function (user) {
    return _react2.default.createElement("li", { key: user.id, className: "jsx-1632502308",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, _react2.default.createElement(_link2.default, { as: "/u/" + user.username, href: "/users?id=" + user.id, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, _react2.default.createElement("a", {
      className: "jsx-1632502308",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, user.username)));
  })), _react2.default.createElement(_style2.default, {
    styleId: "1632502308",
    css: "h1.jsx-1632502308,a.jsx-1632502308{font-family:\"Arial\";}ul.jsx-1632502308{padding:0;}li.jsx-1632502308{list-style:none;margin:5px 0;font-family:\"Arial\";}a.jsx-1632502308{text-decoration:none;color:blue;}a.jsx-1632502308:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmdCLEFBSTZCLEFBSVYsQUFJTSxBQU1LLEFBS1QsVUFkZCxFQWVBLElBWGUsSUFSZixDQWNhLFFBTFMsR0FNdEIsaUJBTEEiLCJmaWxlIjoicGFnZXNcXGluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L0pTIFRVVE9SSUFMUyBBTkQgUFJBQ1RJQ0UvSlMgUFJBQ1RJQ0UvbmV4dC1qcy1wcmFjdGljZS9hcGktZXhhbXBsZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcblxyXG5jb25zdCBJbmRleCA9IHByb3BzID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGgxPkR1bW15IERhdGE8L2gxPlxyXG4gICAgPHVsPlxyXG4gICAgICB7cHJvcHMudXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgPExpbmsgYXM9e2AvdS8ke3VzZXIudXNlcm5hbWV9YH0gaHJlZj17YC91c2Vycz9pZD0ke3VzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPnt1c2VyLnVzZXJuYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBoMSxcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L0xheW91dD5cclxuKTtcclxuXHJcbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB1c2VyczogZGF0YVxyXG4gIH07XHJcbn07XHJcblxyXG48c3R5bGUganN4IGdsb2JhbD57YFxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogcmVkXHJcbiAgfVxyXG5gfTwvc3R5bGU+XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl19 */\n/*@ sourceURL=pages\\index.js?entry */"
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)("http://jsonplaceholder.typicode.com/users");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            users: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));

_react2.default.createElement(_style2.default, {
  styleId: "4042804098",
  css: "body{background:red;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcz9lbnRyeSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RG1CLEFBSUUsZUFBQyIsImZpbGUiOiJwYWdlc1xcaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovSlMgVFVUT1JJQUxTIEFORCBQUkFDVElDRS9KUyBQUkFDVElDRS9uZXh0LWpzLXByYWN0aWNlL2FwaS1leGFtcGxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gcHJvcHMgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDE+RHVtbXkgRGF0YTwvaDE+XHJcbiAgICA8dWw+XHJcbiAgICAgIHtwcm9wcy51c2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17dXNlci5pZH0+XHJcbiAgICAgICAgICA8TGluayBhcz17YC91LyR7dXNlci51c2VybmFtZX1gfSBocmVmPXtgL3VzZXJzP2lkPSR7dXNlci5pZH1gfT5cclxuICAgICAgICAgICAgPGE+e3VzZXIudXNlcm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGgxLFxyXG4gICAgICBhIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvTGF5b3V0PlxyXG4pO1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHVzZXJzOiBkYXRhXHJcbiAgfTtcclxufTtcclxuXHJcbjxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWRcclxuICB9XHJcbmB9PC9zdHlsZT5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXX0= */\n/*@ sourceURL=pages\\index.js?entry */"
});

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkxpbmsiLCJmZXRjaCIsIkluZGV4IiwicHJvcHMiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJpZCIsInVzZXJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sUUFBUSxTQUFSLEFBQVEsYUFBQTt5QkFDWixBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLCtCQUFBLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsV0FDRyxBQUFNLE1BQU4sQUFBWSxJQUFJLGdCQUFBOzJCQUNmLGNBQUEsUUFBSSxLQUFLLEtBQVQsQUFBYyxlQUFkOztrQkFBQTtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxBQUFDLGdDQUFLLFlBQVUsS0FBaEIsQUFBcUIsVUFBWSxxQkFBbUIsS0FBcEQsQUFBeUQ7a0JBQXpEO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBO2lCQUFBOztrQkFBQTtvQkFBQSxBQUFJO0FBQUo7QUFBQSxZQUhXLEFBQ2YsQUFDRSxBQUNFLEFBQVM7QUFObkIsQUFFRSxBQUNHO2FBSEw7U0FEWSxBQUNaO0FBQUE7QUFERjs7QUF5Q0EsTUFBQSxBQUFNLDJGQUFrQixtQkFBQTtXQUFBO2dFQUFBO2NBQUE7dUNBQUE7YUFBQTswQkFBQTtpQkFDSixpQ0FESSxBQUNKLEFBQU07O2FBQWxCO0FBRGdCLHlCQUFBOzBCQUFBO2lCQUVILElBRkcsQUFFSCxBQUFJOzthQUFqQjtBQUZnQiwwQkFBQTs7bUJBQUEsQUFJZixBQUNFO0FBREYsQUFDTDs7YUFMb0I7YUFBQTswQkFBQTs7QUFBQTtjQUFBO0FBQXhCOztBQVNBO1dBQUE7T0FBQSxBQU1BO0FBTkE7O2tCQU1BLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovSlMgVFVUT1JJQUxTIEFORCBQUkFDVElDRS9KUyBQUkFDVElDRS9uZXh0LWpzLXByYWN0aWNlL2FwaS1leGFtcGxlIn0=