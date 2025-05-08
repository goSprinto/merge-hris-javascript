"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeeRequest = _interopRequireDefault(require("./EmployeeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EmployeeEndpointRequest model module.
 * @module model/EmployeeEndpointRequest
 * @version 1.0
 */
var EmployeeEndpointRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmployeeEndpointRequest</code>.
   * @alias module:model/EmployeeEndpointRequest
   * @param model {module:model/EmployeeRequest} 
   */
  function EmployeeEndpointRequest(model) {
    _classCallCheck(this, EmployeeEndpointRequest);

    EmployeeEndpointRequest.initialize(this, model);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmployeeEndpointRequest, null, [{
    key: "initialize",
    value: function initialize(obj, model) {
      obj['model'] = model;
    }
    /**
     * Constructs a <code>EmployeeEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmployeeEndpointRequest} obj Optional instance to populate.
     * @return {module:model/EmployeeEndpointRequest} The populated <code>EmployeeEndpointRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmployeeEndpointRequest();

        if (data.hasOwnProperty('model')) {
          obj['model'] = _EmployeeRequest["default"].constructFromObject(data['model']);
        }
      }

      return obj;
    }
  }]);

  return EmployeeEndpointRequest;
}();
/**
 * @member {module:model/EmployeeRequest} model
 */


EmployeeEndpointRequest.prototype['model'] = undefined;
var _default = EmployeeEndpointRequest;
exports["default"] = _default;