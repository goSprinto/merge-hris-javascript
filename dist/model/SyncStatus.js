"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SyncStatusStatusEnum = _interopRequireDefault(require("./SyncStatusStatusEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SyncStatus model module.
 * @module model/SyncStatus
 * @version 1.0
 */
var SyncStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SyncStatus</code>.
   * # The SyncStatus Object ### Description The &#x60;SyncStatus&#x60; object is used to represent the syncing state of an account  ### Usage Example View the &#x60;SyncStatus&#x60; for an account to see how recently its models were synced.
   * @alias module:model/SyncStatus
   * @param model_name {String} 
   * @param model_id {String} 
   * @param last_sync_start {Date} 
   * @param next_sync_start {Date} 
   * @param status {module:model/SyncStatusStatusEnum} 
   * @param is_initial_sync {Boolean} 
   */
  function SyncStatus(model_name, model_id, last_sync_start, next_sync_start, status, is_initial_sync) {
    _classCallCheck(this, SyncStatus);

    SyncStatus.initialize(this, model_name, model_id, last_sync_start, next_sync_start, status, is_initial_sync);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SyncStatus, null, [{
    key: "initialize",
    value: function initialize(obj, model_name, model_id, last_sync_start, next_sync_start, status, is_initial_sync) {
      obj['model_name'] = model_name;
      obj['model_id'] = model_id;
      obj['last_sync_start'] = last_sync_start;
      obj['next_sync_start'] = next_sync_start;
      obj['status'] = status;
      obj['is_initial_sync'] = is_initial_sync;
    }
    /**
     * Constructs a <code>SyncStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncStatus} obj Optional instance to populate.
     * @return {module:model/SyncStatus} The populated <code>SyncStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SyncStatus();

        if (data.hasOwnProperty('model_name')) {
          obj['model_name'] = _ApiClient["default"].convertToType(data['model_name'], 'String');
        }

        if (data.hasOwnProperty('model_id')) {
          obj['model_id'] = _ApiClient["default"].convertToType(data['model_id'], 'String');
        }

        if (data.hasOwnProperty('last_sync_start')) {
          obj['last_sync_start'] = _ApiClient["default"].convertToType(data['last_sync_start'], 'Date');
        }

        if (data.hasOwnProperty('next_sync_start')) {
          obj['next_sync_start'] = _ApiClient["default"].convertToType(data['next_sync_start'], 'Date');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], _SyncStatusStatusEnum["default"]);
        }

        if (data.hasOwnProperty('is_initial_sync')) {
          obj['is_initial_sync'] = _ApiClient["default"].convertToType(data['is_initial_sync'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SyncStatus;
}();
/**
 * @member {String} model_name
 */


SyncStatus.prototype['model_name'] = undefined;
/**
 * @member {String} model_id
 */

SyncStatus.prototype['model_id'] = undefined;
/**
 * @member {Date} last_sync_start
 */

SyncStatus.prototype['last_sync_start'] = undefined;
/**
 * @member {Date} next_sync_start
 */

SyncStatus.prototype['next_sync_start'] = undefined;
/**
 * @member {module:model/SyncStatusStatusEnum} status
 */

SyncStatus.prototype['status'] = undefined;
/**
 * @member {Boolean} is_initial_sync
 */

SyncStatus.prototype['is_initial_sync'] = undefined;
var _default = SyncStatus;
exports["default"] = _default;