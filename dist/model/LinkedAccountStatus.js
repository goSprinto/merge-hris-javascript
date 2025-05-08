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

/**
 * The LinkedAccountStatus model module.
 * @module model/LinkedAccountStatus
 * @version 1.0
 */
var LinkedAccountStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LinkedAccountStatus</code>.
   * @alias module:model/LinkedAccountStatus
   * @param linked_account_status {String} 
   * @param can_make_request {Boolean} 
   */
  function LinkedAccountStatus(linked_account_status, can_make_request) {
    _classCallCheck(this, LinkedAccountStatus);

    LinkedAccountStatus.initialize(this, linked_account_status, can_make_request);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LinkedAccountStatus, null, [{
    key: "initialize",
    value: function initialize(obj, linked_account_status, can_make_request) {
      obj['linked_account_status'] = linked_account_status;
      obj['can_make_request'] = can_make_request;
    }
    /**
     * Constructs a <code>LinkedAccountStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkedAccountStatus} obj Optional instance to populate.
     * @return {module:model/LinkedAccountStatus} The populated <code>LinkedAccountStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LinkedAccountStatus();

        if (data.hasOwnProperty('linked_account_status')) {
          obj['linked_account_status'] = _ApiClient["default"].convertToType(data['linked_account_status'], 'String');
        }

        if (data.hasOwnProperty('can_make_request')) {
          obj['can_make_request'] = _ApiClient["default"].convertToType(data['can_make_request'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return LinkedAccountStatus;
}();
/**
 * @member {String} linked_account_status
 */


LinkedAccountStatus.prototype['linked_account_status'] = undefined;
/**
 * @member {Boolean} can_make_request
 */

LinkedAccountStatus.prototype['can_make_request'] = undefined;
var _default = LinkedAccountStatus;
exports["default"] = _default;