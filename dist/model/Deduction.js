"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Deduction model module.
 * @module model/Deduction
 * @version 1.0
 */
var Deduction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Deduction</code>.
   * # The Deduction Object ### Description The &#x60;Deduction&#x60; object is used to represent a deduction for a given employee&#39;s payroll run. One run could include several deductions.  ### Usage Example Fetch from the &#x60;LIST Deductions&#x60; endpoint and filter by &#x60;ID&#x60; to show all deductions.
   * @alias module:model/Deduction
   */
  function Deduction() {
    _classCallCheck(this, Deduction);

    Deduction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Deduction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Deduction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Deduction} obj Optional instance to populate.
     * @return {module:model/Deduction} The populated <code>Deduction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Deduction();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('employee_payroll_run')) {
          obj['employee_payroll_run'] = _ApiClient["default"].convertToType(data['employee_payroll_run'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('employee_deduction')) {
          obj['employee_deduction'] = _ApiClient["default"].convertToType(data['employee_deduction'], 'Number');
        }

        if (data.hasOwnProperty('company_deduction')) {
          obj['company_deduction'] = _ApiClient["default"].convertToType(data['company_deduction'], 'Number');
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }

        if (data.hasOwnProperty('remote_was_deleted')) {
          obj['remote_was_deleted'] = _ApiClient["default"].convertToType(data['remote_was_deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Deduction;
}();
/**
 * @member {String} id
 */


Deduction.prototype['id'] = undefined;
/**
 * @member {String} employee_payroll_run
 */

Deduction.prototype['employee_payroll_run'] = undefined;
/**
 * The deduction's name.
 * @member {String} name
 */

Deduction.prototype['name'] = undefined;
/**
 * The amount the employee is deducting.
 * @member {Number} employee_deduction
 */

Deduction.prototype['employee_deduction'] = undefined;
/**
 * The amount the company is deducting.
 * @member {Number} company_deduction
 */

Deduction.prototype['company_deduction'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Deduction.prototype['remote_data'] = undefined;
/**
 * Indicates whether or not this object has been deleted by third party webhooks.
 * @member {Boolean} remote_was_deleted
 */

Deduction.prototype['remote_was_deleted'] = undefined;
var _default = Deduction;
exports["default"] = _default;