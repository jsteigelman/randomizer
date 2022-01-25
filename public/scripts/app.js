"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var RandomizerApp = /*#__PURE__*/function (_React$Component) {
  _inherits(RandomizerApp, _React$Component);

  var _super = _createSuper(RandomizerApp);

  function RandomizerApp(props) {
    var _this;

    _classCallCheck(this, RandomizerApp);

    _this = _super.call(this, props);
    _this.handleDeleteItemList = _this.handleDeleteItemList.bind(_assertThisInitialized(_this));
    _this.handleDeleteItem = _this.handleDeleteItem.bind(_assertThisInitialized(_this));
    _this.handleRandomItem = _this.handleRandomItem.bind(_assertThisInitialized(_this));
    _this.handleAddItem = _this.handleAddItem.bind(_assertThisInitialized(_this));
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(RandomizerApp, [{
    key: "handleDeleteItemList",
    value: function handleDeleteItemList() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handleDeleteItem",
    value: function handleDeleteItem(item) {
      console.log('hdp', item);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== item;
          })
        };
      });
    }
  }, {
    key: "handleRandomItem",
    value: function handleRandomItem() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var randomOption = this.state.options[randomNum];
      alert(randomOption);
    }
  }, {
    key: "handleAddItem",
    value: function handleAddItem(item) {
      if (!item) {
        // no input provided
        return 'Please enter valid input (at least one character).';
      } else if (this.state.options.indexOf(item) > -1) {
        // duplicate value provided
        return 'Please enter a unique value (this is a duplicate entry).';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(item) // concat instead of push, because don't want to change original array

        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Randomizer';
      var subtitle = 'Subtitle here';
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        subtitle: subtitle
      }), /*#__PURE__*/React.createElement(Action, {
        hasOptions: this.state.options.length > 1,
        handleRandomItem: this.handleRandomItem
      }), /*#__PURE__*/React.createElement(ItemList, {
        options: this.state.options,
        handleDeleteItemList: this.handleDeleteItemList,
        handleDeleteItem: this.handleDeleteItem
      }), /*#__PURE__*/React.createElement(AddItem, {
        handleAddItem: this.handleAddItem
      }));
    }
  }]);

  return RandomizerApp;
}(React.Component);

RandomizerApp.defaultProps = {
  options: []
};

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), props.subtitle && /*#__PURE__*/React.createElement("h2", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Randomizer'
};

var Action = function Action(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: props.handleRandomItem,
    disabled: !props.hasOptions
  }, "What should I do?"));
};

var ItemList = function ItemList(props) {
  return /*#__PURE__*/React.createElement("div", null, props.options.map(function (option) {
    return /*#__PURE__*/React.createElement(Item, {
      key: option,
      itemText: option,
      handleDeleteItem: props.handleDeleteItem
    });
  }), /*#__PURE__*/React.createElement("button", {
    onClick: props.handleDeleteItemList
  }, "Remove All"));
};

var Item = function Item(props) {
  return /*#__PURE__*/React.createElement("div", null, props.itemText, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(event) {
      props.handleDeleteItem(props.itemText);
    }
  }, "Delete"));
};

var AddItem = /*#__PURE__*/function (_React$Component2) {
  _inherits(AddItem, _React$Component2);

  var _super2 = _createSuper(AddItem);

  function AddItem(props) {
    var _this2;

    _classCallCheck(this, AddItem);

    _this2 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this2), "handleAddItem", function (event) {
      event.preventDefault(); //prevent full page refresh

      var option = event.target.elements.option.value.trim();

      var errorMessage = _this2.props.handleAddItem(option);

      _this2.setState(function () {
        return {
          error: errorMessage
        };
      });

      event.target.elements.option.value = '';
    });

    _this2.handleAddItem = _this2.handleAddItem.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddItem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.handleAddItem
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "option",
        autoComplete: "off"
      }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
    }
  }]);

  return AddItem;
}(React.Component); // const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// }


ReactDOM.render( /*#__PURE__*/React.createElement(RandomizerApp, null), document.getElementById('app'));
