"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CategoriesEnum = _interopRequireDefault(require("./CategoriesEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EndUserDetailsRequest model module.
 * @module model/EndUserDetailsRequest
 * @version 1.0
 */
var EndUserDetailsRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndUserDetailsRequest</code>.
   * @alias module:model/EndUserDetailsRequest
   * @param end_user_email_address {String} 
   * @param end_user_organization_name {String} 
   * @param end_user_origin_id {String} 
   * @param categories {Array.<module:model/CategoriesEnum>} 
   */
  function EndUserDetailsRequest(end_user_email_address, end_user_organization_name, end_user_origin_id, categories) {
    _classCallCheck(this, EndUserDetailsRequest);

    EndUserDetailsRequest.initialize(this, end_user_email_address, end_user_organization_name, end_user_origin_id, categories);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndUserDetailsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, end_user_email_address, end_user_organization_name, end_user_origin_id, categories) {
      obj['end_user_email_address'] = end_user_email_address;
      obj['end_user_organization_name'] = end_user_organization_name;
      obj['end_user_origin_id'] = end_user_origin_id;
      obj['categories'] = categories;
    }
    /**
     * Constructs a <code>EndUserDetailsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndUserDetailsRequest} obj Optional instance to populate.
     * @return {module:model/EndUserDetailsRequest} The populated <code>EndUserDetailsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndUserDetailsRequest();

        if (data.hasOwnProperty('end_user_email_address')) {
          obj['end_user_email_address'] = _ApiClient["default"].convertToType(data['end_user_email_address'], 'String');
        }

        if (data.hasOwnProperty('end_user_organization_name')) {
          obj['end_user_organization_name'] = _ApiClient["default"].convertToType(data['end_user_organization_name'], 'String');
        }

        if (data.hasOwnProperty('end_user_origin_id')) {
          obj['end_user_origin_id'] = _ApiClient["default"].convertToType(data['end_user_origin_id'], 'String');
        }

        if (data.hasOwnProperty('categories')) {
          obj['categories'] = _ApiClient["default"].convertToType(data['categories'], [_CategoriesEnum["default"]]);
        }

        if (data.hasOwnProperty('integration')) {
          obj['integration'] = _ApiClient["default"].convertToType(data['integration'], 'String');
        }

        if (data.hasOwnProperty('link_expiry_mins')) {
          obj['link_expiry_mins'] = _ApiClient["default"].convertToType(data['link_expiry_mins'], 'Number');
        }

        if (data.hasOwnProperty('should_create_magic_link_url')) {
          obj['should_create_magic_link_url'] = _ApiClient["default"].convertToType(data['should_create_magic_link_url'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EndUserDetailsRequest;
}();
/**
 * @member {String} end_user_email_address
 */


EndUserDetailsRequest.prototype['end_user_email_address'] = undefined;
/**
 * @member {String} end_user_organization_name
 */

EndUserDetailsRequest.prototype['end_user_organization_name'] = undefined;
/**
 * @member {String} end_user_origin_id
 */

EndUserDetailsRequest.prototype['end_user_origin_id'] = undefined;
/**
 * @member {Array.<module:model/CategoriesEnum>} categories
 */

EndUserDetailsRequest.prototype['categories'] = undefined;
/**
 * The slug of a specific pre-selected integration for this linking flow token, for examples of slugs see https://www.merge.dev/docs/basics/integration-metadata
 * @member {String} integration
 */

EndUserDetailsRequest.prototype['integration'] = undefined;
/**
 * An integer number of minutes between [30, 720 or 10080 if for a Magic Link URL] for how long this token is valid. Defaults to 30
 * @member {Number} link_expiry_mins
 * @default 30
 */

EndUserDetailsRequest.prototype['link_expiry_mins'] = 30;
/**
 * Whether to generate a Magic Link URL. Defaults to false
 * @member {Boolean} should_create_magic_link_url
 * @default false
 */

EndUserDetailsRequest.prototype['should_create_magic_link_url'] = false;
var _default = EndUserDetailsRequest;
exports["default"] = _default;