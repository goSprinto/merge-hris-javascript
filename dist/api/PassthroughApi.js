"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DataPassthroughRequest = _interopRequireDefault(require("../model/DataPassthroughRequest"));

var _RemoteResponse = _interopRequireDefault(require("../model/RemoteResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Passthrough service.
* @module api/PassthroughApi
* @version 1.0
*/
var PassthroughApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PassthroughApi. 
  * @alias module:api/PassthroughApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PassthroughApi(apiClient) {
    _classCallCheck(this, PassthroughApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the passthroughCreate operation.
   * @callback module:api/PassthroughApi~passthroughCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RemoteResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Pull data from an endpoint not currently supported by Merge.
   * @param {String} x_account_token Token identifying the end user.
   * @param {module:model/DataPassthroughRequest} data_passthrough_request 
   * @param {module:api/PassthroughApi~passthroughCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/RemoteResponse}
   */


  _createClass(PassthroughApi, [{
    key: "passthroughCreate",
    value: function passthroughCreate(x_account_token, data_passthrough_request, callback) {
      var postBody = data_passthrough_request; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling passthroughCreate");
      } // verify the required parameter 'data_passthrough_request' is set


      if (data_passthrough_request === undefined || data_passthrough_request === null) {
        throw new Error("Missing the required parameter 'data_passthrough_request' when calling passthroughCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _RemoteResponse["default"];
      return this.apiClient.callApi('/passthrough', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PassthroughApi;
}();

exports["default"] = PassthroughApi;