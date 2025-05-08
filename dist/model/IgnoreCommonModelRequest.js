"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReasonEnum = _interopRequireDefault(require("./ReasonEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IgnoreCommonModelRequest model module.
 * @module model/IgnoreCommonModelRequest
 * @version 1.0
 */
var IgnoreCommonModelRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IgnoreCommonModelRequest</code>.
   * @alias module:model/IgnoreCommonModelRequest
   * @param reason {module:model/ReasonEnum} 
   */
  function IgnoreCommonModelRequest(reason) {
    _classCallCheck(this, IgnoreCommonModelRequest);

    IgnoreCommonModelRequest.initialize(this, reason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IgnoreCommonModelRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reason) {
      obj['reason'] = reason;
    }
    /**
     * Constructs a <code>IgnoreCommonModelRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IgnoreCommonModelRequest} obj Optional instance to populate.
     * @return {module:model/IgnoreCommonModelRequest} The populated <code>IgnoreCommonModelRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IgnoreCommonModelRequest();

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], _ReasonEnum["default"]);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IgnoreCommonModelRequest;
}();
/**
 * @member {module:model/ReasonEnum} reason
 */


IgnoreCommonModelRequest.prototype['reason'] = undefined;
/**
 * @member {String} message
 */

IgnoreCommonModelRequest.prototype['message'] = undefined;
var _default = IgnoreCommonModelRequest;
exports["default"] = _default;