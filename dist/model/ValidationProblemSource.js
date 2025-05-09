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
 * The ValidationProblemSource model module.
 * @module model/ValidationProblemSource
 * @version 1.0
 */
var ValidationProblemSource = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationProblemSource</code>.
   * @alias module:model/ValidationProblemSource
   * @param pointer {String} 
   */
  function ValidationProblemSource(pointer) {
    _classCallCheck(this, ValidationProblemSource);

    ValidationProblemSource.initialize(this, pointer);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValidationProblemSource, null, [{
    key: "initialize",
    value: function initialize(obj, pointer) {
      obj['pointer'] = pointer;
    }
    /**
     * Constructs a <code>ValidationProblemSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationProblemSource} obj Optional instance to populate.
     * @return {module:model/ValidationProblemSource} The populated <code>ValidationProblemSource</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationProblemSource();

        if (data.hasOwnProperty('pointer')) {
          obj['pointer'] = _ApiClient["default"].convertToType(data['pointer'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ValidationProblemSource;
}();
/**
 * @member {String} pointer
 */


ValidationProblemSource.prototype['pointer'] = undefined;
var _default = ValidationProblemSource;
exports["default"] = _default;