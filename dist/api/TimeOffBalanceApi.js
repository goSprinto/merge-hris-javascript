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
* TimeOffBalance service.
* @module api/TimeOffBalanceApi
* @version 1.0
*/
var TimeOffBalanceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeOffBalanceApi. 
  * @alias module:api/TimeOffBalanceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeOffBalanceApi(apiClient) {
    _classCallCheck(this, TimeOffBalanceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the timeOffBalanceList operation.
   * @callback module:api/TimeOffBalanceApi~timeOffBalanceListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedTimeOffBalanceList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `TimeOffBalance` objects.
   * @param {String} xAccountToken Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.createdAfter If provided, will only return objects created after this datetime.
   * @param {Date} opts.createdBefore If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.employeeId If provided, will only return time off balances for this employee.
   * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
   * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modifiedAfter If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modifiedBefore If provided, will only return objects modified before this datetime.
   * @param {Number} opts.pageSize Number of results to return per page.
   * @param {module:model/String} opts.policyType If provided, will only return TimeOffBalance with this policy type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
   * @param {String} opts.remoteId The API provider's ID for the given object.
   * @param {module:api/TimeOffBalanceApi~timeOffBalanceListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedTimeOffBalanceList}
   */


  _createClass(TimeOffBalanceApi, [{
    key: "timeOffBalanceList",
    value: function timeOffBalanceList(xAccountToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffBalanceList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['createdAfter'],
        'created_before': opts['createdBefore'],
        'cursor': opts['cursor'],
        'employee_id': opts['employeeId'],
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData'],
        'modified_after': opts['modifiedAfter'],
        'modified_before': opts['modifiedBefore'],
        'page_size': opts['pageSize'],
        'policy_type': opts['policyType'],
        'remote_id': opts['remoteId']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTimeOffBalanceList["default"];
      return this.apiClient.callApi('/time-off-balance', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the timeOffBalanceRetrieve operation.
     * @callback module:api/TimeOffBalanceApi~timeOffBalanceRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeOffBalance} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `TimeOffBalance` object with the given `id`.
     * @param {String} xAccountToken Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.includeRemoteData Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/TimeOffBalanceApi~timeOffBalanceRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeOffBalance}
     */

  }, {
    key: "timeOffBalanceRetrieve",
    value: function timeOffBalanceRetrieve(xAccountToken, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xAccountToken' is set

      if (xAccountToken === undefined || xAccountToken === null) {
        throw new Error("Missing the required parameter 'xAccountToken' when calling timeOffBalanceRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling timeOffBalanceRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['includeRemoteData']
      };
      var headerParams = {
        'X-Account-Token': xAccountToken
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TimeOffBalance["default"];
      return this.apiClient.callApi('/time-off-balance/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TimeOffBalanceApi;
}();

exports["default"] = TimeOffBalanceApi;