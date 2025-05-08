"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Deduction = _interopRequireDefault(require("../model/Deduction"));

var _PaginatedDeductionList = _interopRequireDefault(require("../model/PaginatedDeductionList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Deductions service.
* @module api/DeductionsApi
* @version 1.0
*/
var DeductionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DeductionsApi. 
  * @alias module:api/DeductionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DeductionsApi(apiClient) {
    _classCallCheck(this, DeductionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deductionsList operation.
   * @callback module:api/DeductionsApi~deductionsListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedDeductionList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `Deduction` objects.
   * @param {String} x_account_token Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
   * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.employee_payroll_run_id If provided, will only return deductions for this employee payroll run.
   * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
   * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
   * @param {Number} opts.page_size Number of results to return per page.
   * @param {String} opts.remote_id The API provider's ID for the given object.
   * @param {module:api/DeductionsApi~deductionsListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedDeductionList}
   */


  _createClass(DeductionsApi, [{
    key: "deductionsList",
    value: function deductionsList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling deductionsList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'employee_payroll_run_id': opts['employee_payroll_run_id'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'page_size': opts['page_size'],
        'remote_id': opts['remote_id']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedDeductionList["default"];
      return this.apiClient.callApi('/deductions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deductionsRetrieve operation.
     * @callback module:api/DeductionsApi~deductionsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deduction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `Deduction` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/DeductionsApi~deductionsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deduction}
     */

  }, {
    key: "deductionsRetrieve",
    value: function deductionsRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling deductionsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deductionsRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'include_remote_data': opts['include_remote_data']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Deduction["default"];
      return this.apiClient.callApi('/deductions/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DeductionsApi;
}();

exports["default"] = DeductionsApi;