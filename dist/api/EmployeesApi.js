"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Employee = _interopRequireDefault(require("../model/Employee"));

var _EmployeeEndpointRequest = _interopRequireDefault(require("../model/EmployeeEndpointRequest"));

var _EmployeeResponse = _interopRequireDefault(require("../model/EmployeeResponse"));

var _IgnoreCommonModel = _interopRequireDefault(require("../model/IgnoreCommonModel"));

var _IgnoreCommonModelRequest = _interopRequireDefault(require("../model/IgnoreCommonModelRequest"));

var _MetaResponse = _interopRequireDefault(require("../model/MetaResponse"));

var _PaginatedEmployeeList = _interopRequireDefault(require("../model/PaginatedEmployeeList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Employees service.
* @module api/EmployeesApi
* @version 1.0
*/
var EmployeesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new EmployeesApi. 
  * @alias module:api/EmployeesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function EmployeesApi(apiClient) {
    _classCallCheck(this, EmployeesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the employeesCreate operation.
   * @callback module:api/EmployeesApi~employeesCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/EmployeeResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates an `Employee` object with the given values.
   * @param {String} x_account_token Token identifying the end user.
   * @param {module:model/EmployeeEndpointRequest} employee_endpoint_request 
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.is_debug_mode Whether to include debug fields (such as log file links) in the response.
   * @param {Boolean} opts.run_async Whether or not third-party updates should be run asynchronously.
   * @param {module:api/EmployeesApi~employeesCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/EmployeeResponse}
   */


  _createClass(EmployeesApi, [{
    key: "employeesCreate",
    value: function employeesCreate(x_account_token, employee_endpoint_request, opts, callback) {
      opts = opts || {};
      var postBody = employee_endpoint_request; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling employeesCreate");
      } // verify the required parameter 'employee_endpoint_request' is set


      if (employee_endpoint_request === undefined || employee_endpoint_request === null) {
        throw new Error("Missing the required parameter 'employee_endpoint_request' when calling employeesCreate");
      }

      var pathParams = {};
      var queryParams = {
        'is_debug_mode': opts['is_debug_mode'],
        'run_async': opts['run_async']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _EmployeeResponse["default"];
      return this.apiClient.callApi('/employees', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employeesIgnoreCreate operation.
     * @callback module:api/EmployeesApi~employeesIgnoreCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IgnoreCommonModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The \"reason\" and \"message\" fields in the request body will be stored for audit purposes.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} model_id 
     * @param {module:model/IgnoreCommonModelRequest} ignore_common_model_request 
     * @param {module:api/EmployeesApi~employeesIgnoreCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IgnoreCommonModel}
     */

  }, {
    key: "employeesIgnoreCreate",
    value: function employeesIgnoreCreate(x_account_token, model_id, ignore_common_model_request, callback) {
      var postBody = ignore_common_model_request; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling employeesIgnoreCreate");
      } // verify the required parameter 'model_id' is set


      if (model_id === undefined || model_id === null) {
        throw new Error("Missing the required parameter 'model_id' when calling employeesIgnoreCreate");
      } // verify the required parameter 'ignore_common_model_request' is set


      if (ignore_common_model_request === undefined || ignore_common_model_request === null) {
        throw new Error("Missing the required parameter 'ignore_common_model_request' when calling employeesIgnoreCreate");
      }

      var pathParams = {
        'model_id': model_id
      };
      var queryParams = {};
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = ['application/json', 'application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _IgnoreCommonModel["default"];
      return this.apiClient.callApi('/employees/ignore/{model_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employeesList operation.
     * @callback module:api/EmployeesApi~employeesListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedEmployeeList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `Employee` objects.
     * @param {String} x_account_token Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.company_id If provided, will only return employees for this company.
     * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
     * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {String} opts.display_full_name If provided, will only return employees with this display name.
     * @param {module:model/String} opts.employment_status If provided, will only return employees with this employment status.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {String} opts.first_name If provided, will only return employees with this first name.
     * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Boolean} opts.include_sensitive_fields Whether to include sensitive fields (such as social security numbers) in the response.
     * @param {String} opts.last_name If provided, will only return employees with this last name.
     * @param {String} opts.manager_id If provided, will only return employees for this manager.
     * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
     * @param {Number} opts.page_size Number of results to return per page.
     * @param {String} opts.pay_group_id If provided, will only return employees for this pay group
     * @param {String} opts.personal_email If provided, will only return Employees with this personal email
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {String} opts.remote_id The API provider's ID for the given object.
     * @param {String} opts.team_id If provided, will only return employees for this team.
     * @param {String} opts.work_email If provided, will only return Employees with this work email
     * @param {String} opts.work_location_id If provided, will only return employees for this location.
     * @param {module:api/EmployeesApi~employeesListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedEmployeeList}
     */

  }, {
    key: "employeesList",
    value: function employeesList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling employeesList");
      }

      var pathParams = {};
      var queryParams = {
        'company_id': opts['company_id'],
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'display_full_name': opts['display_full_name'],
        'employment_status': opts['employment_status'],
        'expand': opts['expand'],
        'first_name': opts['first_name'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'include_sensitive_fields': opts['include_sensitive_fields'],
        'last_name': opts['last_name'],
        'manager_id': opts['manager_id'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'page_size': opts['page_size'],
        'pay_group_id': opts['pay_group_id'],
        'personal_email': opts['personal_email'],
        'remote_fields': opts['remote_fields'],
        'remote_id': opts['remote_id'],
        'team_id': opts['team_id'],
        'work_email': opts['work_email'],
        'work_location_id': opts['work_location_id']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedEmployeeList["default"];
      return this.apiClient.callApi('/employees', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employeesMetaPostRetrieve operation.
     * @callback module:api/EmployeesApi~employeesMetaPostRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns metadata for `Employee` POSTs.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:api/EmployeesApi~employeesMetaPostRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaResponse}
     */

  }, {
    key: "employeesMetaPostRetrieve",
    value: function employeesMetaPostRetrieve(x_account_token, callback) {
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling employeesMetaPostRetrieve");
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
      var returnType = _MetaResponse["default"];
      return this.apiClient.callApi('/employees/meta/post', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the employeesRetrieve operation.
     * @callback module:api/EmployeesApi~employeesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Employee} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an `Employee` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Boolean} opts.include_sensitive_fields Whether to include sensitive fields (such as social security numbers) in the response.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {module:api/EmployeesApi~employeesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Employee}
     */

  }, {
    key: "employeesRetrieve",
    value: function employeesRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling employeesRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling employeesRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'expand': opts['expand'],
        'include_remote_data': opts['include_remote_data'],
        'include_sensitive_fields': opts['include_sensitive_fields'],
        'remote_fields': opts['remote_fields']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Employee["default"];
      return this.apiClient.callApi('/employees/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return EmployeesApi;
}();

exports["default"] = EmployeesApi;