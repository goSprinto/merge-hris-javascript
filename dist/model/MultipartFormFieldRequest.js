"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EncodingEnum = _interopRequireDefault(require("./EncodingEnum"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MultipartFormFieldRequest model module.
 * @module model/MultipartFormFieldRequest
 * @version 1.0
 */
var MultipartFormFieldRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MultipartFormFieldRequest</code>.
   * # The MultipartFormField Object ### Description The &#x60;MultipartFormField&#x60; object is used to represent fields in an HTTP request using &#x60;multipart/form-data&#x60;.  ### Usage Example Create a &#x60;MultipartFormField&#x60; to define a multipart form entry.
   * @alias module:model/MultipartFormFieldRequest
   * @param name {String} The name of the form field
   * @param data {String} The data for the form field.
   */
  function MultipartFormFieldRequest(name, data) {
    _classCallCheck(this, MultipartFormFieldRequest);

    MultipartFormFieldRequest.initialize(this, name, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MultipartFormFieldRequest, null, [{
    key: "initialize",
    value: function initialize(obj, name, data) {
      obj['name'] = name;
      obj['data'] = data;
    }
    /**
     * Constructs a <code>MultipartFormFieldRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MultipartFormFieldRequest} obj Optional instance to populate.
     * @return {module:model/MultipartFormFieldRequest} The populated <code>MultipartFormFieldRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MultipartFormFieldRequest();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }

        if (data.hasOwnProperty('encoding')) {
          obj['encoding'] = _ApiClient["default"].convertToType(data['encoding'], _EncodingEnum["default"]);
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MultipartFormFieldRequest;
}();
/**
 * The name of the form field
 * @member {String} name
 */


MultipartFormFieldRequest.prototype['name'] = undefined;
/**
 * The data for the form field.
 * @member {String} data
 */

MultipartFormFieldRequest.prototype['data'] = undefined;
/**
 * The encoding of the value of `data`. Defaults to `RAW` if not defined.
 * @member {module:model/EncodingEnum} encoding
 */

MultipartFormFieldRequest.prototype['encoding'] = undefined;
/**
 * The file name of the form field, if the field is for a file.
 * @member {String} file_name
 */

MultipartFormFieldRequest.prototype['file_name'] = undefined;
/**
 * The MIME type of the file, if the field is for a file.
 * @member {String} content_type
 */

MultipartFormFieldRequest.prototype['content_type'] = undefined;
var _default = MultipartFormFieldRequest;
exports["default"] = _default;