"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DebugModeLog = _interopRequireDefault(require("./DebugModeLog"));

var _Employee = _interopRequireDefault(require("./Employee"));

var _ErrorValidationProblem = _interopRequireDefault(require("./ErrorValidationProblem"));

var _WarningValidationProblem = _interopRequireDefault(require("./WarningValidationProblem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeResponse model module.
 * @module model/EmployeeResponse
 * @version 1.0
 */
var EmployeeResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeResponse</code>.
   * @alias module:model/EmployeeResponse
   * @param model {module:model/Employee} 
   * @param warnings {Array.<module:model/WarningValidationProblem>} 
   * @param errors {Array.<module:model/ErrorValidationProblem>} 
   */
  function EmployeeResponse(model, warnings, errors) {
    _classCallCheck(this, EmployeeResponse);

    EmployeeResponse.initialize(this, model, warnings, errors);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeResponse, null, [{
    key: "initialize",
    value: function initialize(obj, model, warnings, errors) {
      obj['model'] = model;
      obj['warnings'] = warnings;
      obj['errors'] = errors;
    }
    /**
     * Constructs a <code>EmployeeResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeResponse} obj Optional instance to populate.
     * @return {module:model/EmployeeResponse} The populated <code>EmployeeResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeResponse();

        if (data.hasOwnProperty('model')) {
          obj['model'] = _Employee["default"].constructFromObject(data['model']);
        }

        if (data.hasOwnProperty('warnings')) {
          obj['warnings'] = _ApiClient["default"].convertToType(data['warnings'], [_WarningValidationProblem["default"]]);
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_ErrorValidationProblem["default"]]);
        }

        if (data.hasOwnProperty('logs')) {
          obj['logs'] = _ApiClient["default"].convertToType(data['logs'], [_DebugModeLog["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EmployeeResponse;
}();
/**
 * @member {module:model/Employee} model
 */


EmployeeResponse.prototype['model'] = undefined;
/**
 * @member {Array.<module:model/WarningValidationProblem>} warnings
 */

EmployeeResponse.prototype['warnings'] = undefined;
/**
 * @member {Array.<module:model/ErrorValidationProblem>} errors
 */

EmployeeResponse.prototype['errors'] = undefined;
/**
 * @member {Array.<module:model/DebugModeLog>} logs
 */

EmployeeResponse.prototype['logs'] = undefined;
var _default = EmployeeResponse;
exports["default"] = _default;