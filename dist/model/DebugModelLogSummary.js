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
 * The DebugModelLogSummary model module.
 * @module model/DebugModelLogSummary
 * @version 1.0
 */
var DebugModelLogSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DebugModelLogSummary</code>.
   * @alias module:model/DebugModelLogSummary
   * @param url {String} 
   * @param method {String} 
   * @param status_code {Number} 
   */
  function DebugModelLogSummary(url, method, status_code) {
    _classCallCheck(this, DebugModelLogSummary);

    DebugModelLogSummary.initialize(this, url, method, status_code);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DebugModelLogSummary, null, [{
    key: "initialize",
    value: function initialize(obj, url, method, status_code) {
      obj['url'] = url;
      obj['method'] = method;
      obj['status_code'] = status_code;
    }
    /**
     * Constructs a <code>DebugModelLogSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebugModelLogSummary} obj Optional instance to populate.
     * @return {module:model/DebugModelLogSummary} The populated <code>DebugModelLogSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DebugModelLogSummary();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('status_code')) {
          obj['status_code'] = _ApiClient["default"].convertToType(data['status_code'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DebugModelLogSummary;
}();
/**
 * @member {String} url
 */


DebugModelLogSummary.prototype['url'] = undefined;
/**
 * @member {String} method
 */

DebugModelLogSummary.prototype['method'] = undefined;
/**
 * @member {Number} status_code
 */

DebugModelLogSummary.prototype['status_code'] = undefined;
var _default = DebugModelLogSummary;
exports["default"] = _default;