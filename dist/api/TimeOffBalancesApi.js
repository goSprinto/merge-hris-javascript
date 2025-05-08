"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PaginatedTimeOffBalanceList = _interopRequireDefault(require("../model/PaginatedTimeOffBalanceList"));

var _TimeOffBalance = _interopRequireDefault(require("../model/TimeOffBalance"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TimeOffBalances service.
* @module api/TimeOffBalancesApi
* @version 1.0
*/
var TimeOffBalancesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeOffBalancesApi. 
  * @alias module:api/TimeOffBalancesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeOffBalancesApi(apiClient) {
    _classCallCheck(this, TimeOffBalancesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the timeOffBalancesList operation.
   * @callback module:api/TimeOffBalancesApi~timeOffBalancesListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedTimeOffBalanceList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `TimeOffBalance` objects.
   * @param {String} x_account_token Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
   * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.employee_id If provided, will only return time off balances for this employee.
   * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
   * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
   * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
   * @param {Number} opts.page_size Number of results to return per page.
   * @param {module:model/String} opts.policy_type If provided, will only return TimeOffBalance with this policy type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
   * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
   * @param {String} opts.remote_id The API provider's ID for the given object.
   * @param {module:api/TimeOffBalancesApi~timeOffBalancesListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedTimeOffBalanceList}
   */


  _createClass(TimeOffBalancesApi, [{
    key: "timeOffBalancesList",
    value: function timeOffBalancesList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling timeOffBalancesList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'employee_id': opts['employee_id'],
        'expand': opts['expand'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'page_size': opts['page_size'],
        'policy_type': opts['policy_type'],
        'remote_fields': opts['remote_fields'],
        'remote_id': opts['remote_id']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTimeOffBalanceList["default"];
      return this.apiClient.callApi('/time-off-balances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the timeOffBalancesRetrieve operation.
     * @callback module:api/TimeOffBalancesApi~timeOffBalancesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeOffBalance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `TimeOffBalance` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {module:api/TimeOffBalancesApi~timeOffBalancesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeOffBalance}
     */

  }, {
    key: "timeOffBalancesRetrieve",
    value: function timeOffBalancesRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling timeOffBalancesRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling timeOffBalancesRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['include_remote_data'],
        'remote_fields': opts['remote_fields']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TimeOffBalance["default"];
      return this.apiClient.callApi('/time-off-balances/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TimeOffBalancesApi;
}();

exports["default"] = TimeOffBalancesApi;