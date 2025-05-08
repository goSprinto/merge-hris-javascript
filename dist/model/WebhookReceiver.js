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
 * The WebhookReceiver model module.
 * @module model/WebhookReceiver
 * @version 1.0
 */
var WebhookReceiver = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookReceiver</code>.
   * @alias module:model/WebhookReceiver
   * @param event {String} 
   * @param is_active {Boolean} 
   */
  function WebhookReceiver(event, is_active) {
    _classCallCheck(this, WebhookReceiver);

    WebhookReceiver.initialize(this, event, is_active);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookReceiver, null, [{
    key: "initialize",
    value: function initialize(obj, event, is_active) {
      obj['event'] = event;
      obj['is_active'] = is_active;
    }
    /**
     * Constructs a <code>WebhookReceiver</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookReceiver} obj Optional instance to populate.
     * @return {module:model/WebhookReceiver} The populated <code>WebhookReceiver</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookReceiver();

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('is_active')) {
          obj['is_active'] = _ApiClient["default"].convertToType(data['is_active'], 'Boolean');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WebhookReceiver;
}();
/**
 * @member {String} event
 */


WebhookReceiver.prototype['event'] = undefined;
/**
 * @member {Boolean} is_active
 */

WebhookReceiver.prototype['is_active'] = undefined;
/**
 * @member {String} key
 */

WebhookReceiver.prototype['key'] = undefined;
var _default = WebhookReceiver;
exports["default"] = _default;