"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaginatedAccountDetailsAndActionsList = _interopRequireDefault(require("../model/PaginatedAccountDetailsAndActionsList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* LinkedAccounts service.
* @module api/LinkedAccountsApi
* @version 1.0
*/
var LinkedAccountsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LinkedAccountsApi. 
  * @alias module:api/LinkedAccountsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LinkedAccountsApi(apiClient) {
    _classCallCheck(this, LinkedAccountsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the linkedAccountsList operation.
   * @callback module:api/LinkedAccountsApi~linkedAccountsListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedAccountDetailsAndActionsList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List linked accounts for your organization.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.category 
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.end_user_email_address If provided, will only return linked accounts associated with the given email address.
   * @param {String} opts.end_user_organization_name If provided, will only return linked accounts associated with the given organization name.
   * @param {String} opts.end_user_origin_id If provided, will only return linked accounts associated with the given origin ID.
   * @param {String} opts.end_user_origin_ids Comma-separated list of EndUser origin IDs, making it possible to specify multiple EndUsers at once.
   * @param {String} opts.id 
   * @param {String} opts.ids Comma-separated list of LinkedAccount IDs, making it possible to specify multiple LinkedAccounts at once.
   * @param {String} opts.integration_name If provided, will only return linked accounts associated with the given integration name.
   * @param {String} opts.is_test_account If included, will only include test linked accounts. If not included, will only include non-test linked accounts.
   * @param {Number} opts.page_size Number of results to return per page.
   * @param {String} opts.status Filter by status. Options: `COMPLETE`, `INCOMPLETE`, `RELINK_NEEDED`
   * @param {module:api/LinkedAccountsApi~linkedAccountsListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedAccountDetailsAndActionsList}
   */


  _createClass(LinkedAccountsApi, [{
    key: "linkedAccountsList",
    value: function linkedAccountsList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'category': opts['category'],
        'cursor': opts['cursor'],
        'end_user_email_address': opts['end_user_email_address'],
        'end_user_organization_name': opts['end_user_organization_name'],
        'end_user_origin_id': opts['end_user_origin_id'],
        'end_user_origin_ids': opts['end_user_origin_ids'],
        'id': opts['id'],
        'ids': opts['ids'],
        'integration_name': opts['integration_name'],
        'is_test_account': opts['is_test_account'],
        'page_size': opts['page_size'],
        'status': opts['status']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedAccountDetailsAndActionsList["default"];
      return this.apiClient.callApi('/linked-accounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LinkedAccountsApi;
}();

exports["default"] = LinkedAccountsApi;