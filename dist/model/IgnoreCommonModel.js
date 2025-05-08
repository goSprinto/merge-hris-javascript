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
 * The IgnoreCommonModel model module.
 * @module model/IgnoreCommonModel
 * @version 1.0
 */
var IgnoreCommonModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IgnoreCommonModel</code>.
   * @alias module:model/IgnoreCommonModel
   * @param reason {module:model/ReasonEnum} 
   */
  function IgnoreCommonModel(reason) {
    _classCallCheck(this, IgnoreCommonModel);

    IgnoreCommonModel.initialize(this, reason);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IgnoreCommonModel, null, [{
    key: "initialize",
    value: function initialize(obj, reason) {
      obj['reason'] = reason;
    }
    /**
     * Constructs a <code>IgnoreCommonModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IgnoreCommonModel} obj Optional instance to populate.
     * @return {module:model/IgnoreCommonModel} The populated <code>IgnoreCommonModel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IgnoreCommonModel();

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

  return IgnoreCommonModel;
}();
/**
 * @member {module:model/ReasonEnum} reason
 */


IgnoreCommonModel.prototype['reason'] = undefined;
/**
 * @member {String} message
 */

IgnoreCommonModel.prototype['message'] = undefined;
var _default = IgnoreCommonModel;
exports["default"] = _default;