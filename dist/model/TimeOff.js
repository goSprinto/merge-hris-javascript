"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Utils = _interopRequireDefault(require("../Utils"));

var _Employee = _interopRequireDefault(require("./Employee"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

var _RequestTypeEnum = _interopRequireDefault(require("./RequestTypeEnum"));

var _TimeOffStatusEnum = _interopRequireDefault(require("./TimeOffStatusEnum"));

var _UnitsEnum = _interopRequireDefault(require("./UnitsEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TimeOff model module.
 * @module model/TimeOff
 * @version 1.0
 */
var TimeOff = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeOff</code>.
   * # The TimeOff Object ### Description The &#x60;TimeOff&#x60; object is used to represent a Time Off Request filed by an employee.  ### Usage Example Fetch from the &#x60;LIST TimeOffs&#x60; endpoint and filter by &#x60;ID&#x60; to show all time off requests.
   * @alias module:model/TimeOff
   */
  function TimeOff() {
    _classCallCheck(this, TimeOff);

    TimeOff.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeOff, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TimeOff</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeOff} obj Optional instance to populate.
     * @return {module:model/TimeOff} The populated <code>TimeOff</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeOff();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('employee')) {
          obj['employee'] = (0, _Utils["default"])(data['employee'], _Employee["default"]);
        }

        if (data.hasOwnProperty('approver')) {
          obj['approver'] = (0, _Utils["default"])(data['approver'], _Employee["default"]);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _TimeOffStatusEnum["default"]);
        }

        if (data.hasOwnProperty('employee_note')) {
          obj['employee_note'] = _ApiClient["default"].convertToType(data['employee_note'], 'String');
        }

        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], _UnitsEnum["default"]);
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('request_type')) {
          obj['request_type'] = _ApiClient["default"].convertToType(data['request_type'], _RequestTypeEnum["default"]);
        }

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'Date');
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'Date');
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

  return TimeOff;
}();
/**
 * @member {String} id
 */


TimeOff.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

TimeOff.prototype['remote_id'] = undefined;
/**
 * @member {String} employee
 */

TimeOff.prototype['employee'] = undefined;
/**
 * @member {String} approver
 */

TimeOff.prototype['approver'] = undefined;
/**
 * The status of this time off request.
 * @member {module:model/TimeOffStatusEnum} status
 */

TimeOff.prototype['status'] = undefined;
/**
 * The employee note for this time off request.
 * @member {String} employee_note
 */

TimeOff.prototype['employee_note'] = undefined;
/**
 * The unit of time requested.
 * @member {module:model/UnitsEnum} units
 */

TimeOff.prototype['units'] = undefined;
/**
 * The number of time off units requested.
 * @member {Number} amount
 */

TimeOff.prototype['amount'] = undefined;
/**
 * The type of time off request.
 * @member {module:model/RequestTypeEnum} request_type
 */

TimeOff.prototype['request_type'] = undefined;
/**
 * The day and time of the start of the time requested off.
 * @member {Date} start_time
 */

TimeOff.prototype['start_time'] = undefined;
/**
 * The day and time of the end of the time requested off.
 * @member {Date} end_time
 */

TimeOff.prototype['end_time'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

TimeOff.prototype['remote_data'] = undefined;
/**
 * @member {Boolean} remote_was_deleted
 */

TimeOff.prototype['remote_was_deleted'] = undefined;
var _default = TimeOff;
exports["default"] = _default;