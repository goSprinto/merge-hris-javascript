"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmployeePayrollRun = _interopRequireDefault(require("../model/EmployeePayrollRun"));

var _PaginatedEmployeePayrollRunList = _interopRequireDefault(require("../model/PaginatedEmployeePayrollRunList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* EmployeePayrollRuns service.
* @module api/EmployeePayrollRunsApi
* @version 1.0
*/
var EmployeePayrollRunsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmployeePayrollRunsApi. 
  * @alias module:api/EmployeePayrollRunsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmployeePayrollRunsApi(apiClient) {
    _classCallCheck(this, EmployeePayrollRunsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the employeePayrollRunsList operation.
   * @callback module:api/EmployeePayrollRunsApi~employeePayrollRunsListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedEmployeePayrollRunList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `EmployeePayrollRun` objects.
   * @param {String} x_account_token Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
   * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.employee_id If provided, will only return employee payroll runs for this employee.
   * @param {Date} opts.ended_after If provided, will only return employee payroll runs ended after this datetime.
   * @param {Date} opts.ended_before If provided, will only return employee payroll runs ended before this datetime.
   * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
   * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
   * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
   * @param {Number} opts.page_size Number of results to return per page.
   * @param {String} opts.payroll_run_id If provided, will only return employee payroll runs for this employee.
   * @param {String} opts.remote_id The API provider's ID for the given object.
   * @param {Date} opts.started_after If provided, will only return employee payroll runs started after this datetime.
   * @param {Date} opts.started_before If provided, will only return employee payroll runs started before this datetime.
   * @param {module:api/EmployeePayrollRunsApi~employeePayrollRunsListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedEmployeePayrollRunList}
   */


  _createClass(EmployeePayrollRunsApi, [{
    key: "employeePayrollRunsList",
    value: function employeePayrollRunsList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling employeePayrollRunsList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'employee_id': opts['employee_id'],
        'ended_after': opts['ended_after'],
        'ended_before': opts['ended_before'],
        'expand': opts['expand'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'page_size': opts['page_size'],
        'payroll_run_id': opts['payroll_run_id'],
        'remote_id': opts['remote_id'],
        'started_after': opts['started_after'],
        'started_before': opts['started_before']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedEmployeePayrollRunList["default"];
      return this.apiClient.callApi('/employee-payroll-runs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employeePayrollRunsRetrieve operation.
     * @callback module:api/EmployeePayrollRunsApi~employeePayrollRunsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmployeePayrollRun} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `EmployeePayrollRun` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/EmployeePayrollRunsApi~employeePayrollRunsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmployeePayrollRun}
     */

  }, {
    key: "employeePayrollRunsRetrieve",
    value: function employeePayrollRunsRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling employeePayrollRunsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeePayrollRunsRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['include_remote_data']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EmployeePayrollRun["default"];
      return this.apiClient.callApi('/employee-payroll-runs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmployeePayrollRunsApi;
}();

exports["default"] = EmployeePayrollRunsApi;