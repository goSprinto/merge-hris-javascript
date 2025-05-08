"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DebugModelLogSummary = _interopRequireDefault(require("./DebugModelLogSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DebugModeLog model module.
 * @module model/DebugModeLog
 * @version 1.0
 */
var DebugModeLog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DebugModeLog</code>.
   * @alias module:model/DebugModeLog
   * @param log_id {String} 
   * @param dashboard_view {String} 
   * @param log_summary {module:model/DebugModelLogSummary} 
   */
  function DebugModeLog(log_id, dashboard_view, log_summary) {
    _classCallCheck(this, DebugModeLog);

    DebugModeLog.initialize(this, log_id, dashboard_view, log_summary);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DebugModeLog, null, [{
    key: "initialize",
    value: function initialize(obj, log_id, dashboard_view, log_summary) {
      obj['log_id'] = log_id;
      obj['dashboard_view'] = dashboard_view;
      obj['log_summary'] = log_summary;
    }
    /**
     * Constructs a <code>DebugModeLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DebugModeLog} obj Optional instance to populate.
     * @return {module:model/DebugModeLog} The populated <code>DebugModeLog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DebugModeLog();

        if (data.hasOwnProperty('log_id')) {
          obj['log_id'] = _ApiClient["default"].convertToType(data['log_id'], 'String');
        }

        if (data.hasOwnProperty('dashboard_view')) {
          obj['dashboard_view'] = _ApiClient["default"].convertToType(data['dashboard_view'], 'String');
        }

        if (data.hasOwnProperty('log_summary')) {
          obj['log_summary'] = _DebugModelLogSummary["default"].constructFromObject(data['log_summary']);
        }
      }

      return obj;
    }
  }]);

  return DebugModeLog;
}();
/**
 * @member {String} log_id
 */


DebugModeLog.prototype['log_id'] = undefined;
/**
 * @member {String} dashboard_view
 */

DebugModeLog.prototype['dashboard_view'] = undefined;
/**
 * @member {module:model/DebugModelLogSummary} log_summary
 */

DebugModeLog.prototype['log_summary'] = undefined;
var _default = DebugModeLog;
exports["default"] = _default;