"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CategoryEnum = _interopRequireDefault(require("./CategoryEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AccountDetails model module.
 * @module model/AccountDetails
 * @version 1.0
 */
var AccountDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AccountDetails</code>.
   * @alias module:model/AccountDetails
   */
  function AccountDetails() {
    _classCallCheck(this, AccountDetails);

    AccountDetails.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AccountDetails, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AccountDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDetails} obj Optional instance to populate.
     * @return {module:model/AccountDetails} The populated <code>AccountDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AccountDetails();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('integration')) {
          obj['integration'] = _ApiClient["default"].convertToType(data['integration'], 'String');
        }

        if (data.hasOwnProperty('integration_slug')) {
          obj['integration_slug'] = _ApiClient["default"].convertToType(data['integration_slug'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], _CategoryEnum["default"]);
        }

        if (data.hasOwnProperty('end_user_origin_id')) {
          obj['end_user_origin_id'] = _ApiClient["default"].convertToType(data['end_user_origin_id'], 'String');
        }

        if (data.hasOwnProperty('end_user_organization_name')) {
          obj['end_user_organization_name'] = _ApiClient["default"].convertToType(data['end_user_organization_name'], 'String');
        }

        if (data.hasOwnProperty('end_user_email_address')) {
          obj['end_user_email_address'] = _ApiClient["default"].convertToType(data['end_user_email_address'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('webhook_listener_url')) {
          obj['webhook_listener_url'] = _ApiClient["default"].convertToType(data['webhook_listener_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AccountDetails;
}();
/**
 * @member {String} id
 */


AccountDetails.prototype['id'] = undefined;
/**
 * @member {String} integration
 */

AccountDetails.prototype['integration'] = undefined;
/**
 * @member {String} integration_slug
 */

AccountDetails.prototype['integration_slug'] = undefined;
/**
 * @member {module:model/CategoryEnum} category
 */

AccountDetails.prototype['category'] = undefined;
/**
 * @member {String} end_user_origin_id
 */

AccountDetails.prototype['end_user_origin_id'] = undefined;
/**
 * @member {String} end_user_organization_name
 */

AccountDetails.prototype['end_user_organization_name'] = undefined;
/**
 * @member {String} end_user_email_address
 */

AccountDetails.prototype['end_user_email_address'] = undefined;
/**
 * @member {String} status
 */

AccountDetails.prototype['status'] = undefined;
/**
 * @member {String} webhook_listener_url
 */

AccountDetails.prototype['webhook_listener_url'] = undefined;
var _default = AccountDetails;
exports["default"] = _default;