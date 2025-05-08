"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WebhookReceiver = _interopRequireDefault(require("../model/WebhookReceiver"));

var _WebhookReceiverRequest = _interopRequireDefault(require("../model/WebhookReceiverRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WebhookReceivers service.
* @module api/WebhookReceiversApi
* @version 1.0
*/
var WebhookReceiversApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhookReceiversApi. 
  * @alias module:api/WebhookReceiversApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhookReceiversApi(apiClient) {
    _classCallCheck(this, WebhookReceiversApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the webhookReceiversCreate operation.
   * @callback module:api/WebhookReceiversApi~webhookReceiversCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/WebhookReceiver} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a `WebhookReceiver` object with the given values.
   * @param {String} x_account_token Token identifying the end user.
   * @param {module:model/WebhookReceiverRequest} webhook_receiver_request 
   * @param {module:api/WebhookReceiversApi~webhookReceiversCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/WebhookReceiver}
   */


  _createClass(WebhookReceiversApi, [{
    key: "webhookReceiversCreate",
    value: function webhookReceiversCreate(x_account_token, webhook_receiver_request, callback) {
      var postBody = webhook_receiver_request; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling webhookReceiversCreate");
      } // verify the required parameter 'webhook_receiver_request' is set


      if (webhook_receiver_request === undefined || webhook_receiver_request === null) {
        throw new Error("Missing the required parameter 'webhook_receiver_request' when calling webhookReceiversCreate");
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
      var returnType = _WebhookReceiver["default"];
      return this.apiClient.callApi('/webhook-receivers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhookReceiversList operation.
     * @callback module:api/WebhookReceiversApi~webhookReceiversListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/WebhookReceiver>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `WebhookReceiver` objects.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:api/WebhookReceiversApi~webhookReceiversListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/WebhookReceiver>}
     */

  }, {
    key: "webhookReceiversList",
    value: function webhookReceiversList(x_account_token, callback) {
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling webhookReceiversList");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_WebhookReceiver["default"]];
      return this.apiClient.callApi('/webhook-receivers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebhookReceiversApi;
}();

exports["default"] = WebhookReceiversApi;