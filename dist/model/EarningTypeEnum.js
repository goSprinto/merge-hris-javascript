"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* Enum class EarningTypeEnum.
* @enum {}
* @readonly
*/
var EarningTypeEnum = /*#__PURE__*/function () {
  function EarningTypeEnum() {
    _classCallCheck(this, EarningTypeEnum);

    _defineProperty(this, "SALARY", "SALARY");

    _defineProperty(this, "REIMBURSEMENT", "REIMBURSEMENT");

    _defineProperty(this, "OVERTIME", "OVERTIME");

    _defineProperty(this, "BONUS", "BONUS");
  }

  _createClass(EarningTypeEnum, null, [{
    key: "constructFromObject",
    value:
    /**
    * Returns a <code>EarningTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/EarningTypeEnum} The enum <code>EarningTypeEnum</code> value.
    */
    function constructFromObject(object) {
      return object;
    }
  }]);

  return EarningTypeEnum;
}();

exports["default"] = EarningTypeEnum;