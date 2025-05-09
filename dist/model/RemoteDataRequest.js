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
 * The RemoteDataRequest model module.
 * @module model/RemoteDataRequest
 * @version 1.0
 */
var RemoteDataRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RemoteDataRequest</code>.
   * @alias module:model/RemoteDataRequest
   * @param path {String} 
   */
  function RemoteDataRequest(path) {
    _classCallCheck(this, RemoteDataRequest);

    RemoteDataRequest.initialize(this, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RemoteDataRequest, null, [{
    key: "initialize",
    value: function initialize(obj, path) {
      obj['path'] = path;
    }
    /**
     * Constructs a <code>RemoteDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RemoteDataRequest} obj Optional instance to populate.
     * @return {module:model/RemoteDataRequest} The populated <code>RemoteDataRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RemoteDataRequest();

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], {
            'String': Object
          });
        }
      }

      return obj;
    }
  }]);

  return RemoteDataRequest;
}();
/**
 * @member {String} path
 */


RemoteDataRequest.prototype['path'] = undefined;
/**
 * @member {Object.<String, Object>} data
 */

RemoteDataRequest.prototype['data'] = undefined;
var _default = RemoteDataRequest;
exports["default"] = _default;