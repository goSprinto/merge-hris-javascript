"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BenefitPlanTypeEnum = _interopRequireDefault(require("./BenefitPlanTypeEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BenefitRequest model module.
 * @module model/BenefitRequest
 * @version 1.0
 */
var BenefitRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BenefitRequest</code>.
   * # The Benefit Object ### Description The &#x60;Benefit&#x60; object is used to represent a Benefit for an employee.  ### Usage Example Fetch from the &#x60;LIST Benefits&#x60; endpoint and filter by &#x60;ID&#x60; to show all benefits.
   * @alias module:model/BenefitRequest
   */
  function BenefitRequest() {
    _classCallCheck(this, BenefitRequest);

    BenefitRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BenefitRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BenefitRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BenefitRequest} obj Optional instance to populate.
     * @return {module:model/BenefitRequest} The populated <code>BenefitRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BenefitRequest();

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = _ApiClient["default"].convertToType(data['employee'], 'String');
        }

        if (data.hasOwnProperty('provider_name')) {
          obj['provider_name'] = _ApiClient["default"].convertToType(data['provider_name'], 'String');
        }

        if (data.hasOwnProperty('benefit_plan_type')) {
          obj['benefit_plan_type'] = _ApiClient["default"].convertToType(data['benefit_plan_type'], _BenefitPlanTypeEnum["default"]);
        }

        if (data.hasOwnProperty('employee_contribution')) {
          obj['employee_contribution'] = _ApiClient["default"].convertToType(data['employee_contribution'], 'Number');
        }

        if (data.hasOwnProperty('company_contribution')) {
          obj['company_contribution'] = _ApiClient["default"].convertToType(data['company_contribution'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BenefitRequest;
}();
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */


BenefitRequest.prototype['remote_id'] = undefined;
/**
 * The employee on the plan.
 * @member {String} employee
 */

BenefitRequest.prototype['employee'] = undefined;
/**
 * The name of the benefit provider.
 * @member {String} provider_name
 */

BenefitRequest.prototype['provider_name'] = undefined;
/**
 * The type of benefit plan
 * @member {module:model/BenefitPlanTypeEnum} benefit_plan_type
 */

BenefitRequest.prototype['benefit_plan_type'] = undefined;
/**
 * The employee's contribution.
 * @member {Number} employee_contribution
 */

BenefitRequest.prototype['employee_contribution'] = undefined;
/**
 * The company's contribution.
 * @member {Number} company_contribution
 */

BenefitRequest.prototype['company_contribution'] = undefined;
var _default = BenefitRequest;
exports["default"] = _default;