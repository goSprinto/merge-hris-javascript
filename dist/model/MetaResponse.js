"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LinkedAccountStatus = _interopRequireDefault(require("./LinkedAccountStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MetaResponse model module.
 * @module model/MetaResponse
 * @version 1.0
 */
var MetaResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetaResponse</code>.
   * @alias module:model/MetaResponse
   * @param request_schema {Object.<String, Object>} 
   * @param has_conditional_params {Boolean} 
   * @param has_required_linked_account_params {Boolean} 
   */
  function MetaResponse(request_schema, has_conditional_params, has_required_linked_account_params) {
    _classCallCheck(this, MetaResponse);

    MetaResponse.initialize(this, request_schema, has_conditional_params, has_required_linked_account_params);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MetaResponse, null, [{
    key: "initialize",
    value: function initialize(obj, request_schema, has_conditional_params, has_required_linked_account_params) {
      obj['request_schema'] = request_schema;
      obj['has_conditional_params'] = has_conditional_params;
      obj['has_required_linked_account_params'] = has_required_linked_account_params;
    }
    /**
     * Constructs a <code>MetaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MetaResponse} obj Optional instance to populate.
     * @return {module:model/MetaResponse} The populated <code>MetaResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetaResponse();

        if (data.hasOwnProperty('request_schema')) {
          obj['request_schema'] = _ApiClient["default"].convertToType(data['request_schema'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _LinkedAccountStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('has_conditional_params')) {
          obj['has_conditional_params'] = _ApiClient["default"].convertToType(data['has_conditional_params'], 'Boolean');
        }

        if (data.hasOwnProperty('has_required_linked_account_params')) {
          obj['has_required_linked_account_params'] = _ApiClient["default"].convertToType(data['has_required_linked_account_params'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return MetaResponse;
}();
/**
 * @member {Object.<String, Object>} request_schema
 */


MetaResponse.prototype['request_schema'] = undefined;
/**
 * @member {module:model/LinkedAccountStatus} status
 */

MetaResponse.prototype['status'] = undefined;
/**
 * @member {Boolean} has_conditional_params
 */

MetaResponse.prototype['has_conditional_params'] = undefined;
/**
 * @member {Boolean} has_required_linked_account_params
 */

MetaResponse.prototype['has_required_linked_account_params'] = undefined;
var _default = MetaResponse;
exports["default"] = _default;