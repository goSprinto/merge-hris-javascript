"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MetaResponse = _interopRequireDefault(require("../model/MetaResponse"));

var _PaginatedTimeOffList = _interopRequireDefault(require("../model/PaginatedTimeOffList"));

var _TimeOff = _interopRequireDefault(require("../model/TimeOff"));

var _TimeOffEndpointRequest = _interopRequireDefault(require("../model/TimeOffEndpointRequest"));

var _TimeOffResponse = _interopRequireDefault(require("../model/TimeOffResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TimeOff service.
* @module api/TimeOffApi
* @version 1.0
*/
var TimeOffApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeOffApi. 
  * @alias module:api/TimeOffApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeOffApi(apiClient) {
    _classCallCheck(this, TimeOffApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the timeOffCreate operation.
   * @callback module:api/TimeOffApi~timeOffCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TimeOffResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Creates a `TimeOff` object with the given values.
   * @param {String} x_account_token Token identifying the end user.
   * @param {module:model/TimeOffEndpointRequest} time_off_endpoint_request 
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.is_debug_mode Whether to include debug fields (such as log file links) in the response.
   * @param {Boolean} opts.run_async Whether or not third-party updates should be run asynchronously.
   * @param {module:api/TimeOffApi~timeOffCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TimeOffResponse}
   */


  _createClass(TimeOffApi, [{
    key: "timeOffCreate",
    value: function timeOffCreate(x_account_token, time_off_endpoint_request, opts, callback) {
      opts = opts || {};
      var postBody = time_off_endpoint_request; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling timeOffCreate");
      } // verify the required parameter 'time_off_endpoint_request' is set


      if (time_off_endpoint_request === undefined || time_off_endpoint_request === null) {
        throw new Error("Missing the required parameter 'time_off_endpoint_request' when calling timeOffCreate");
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
      var returnType = _TimeOffResponse["default"];
      return this.apiClient.callApi('/time-off', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the timeOffList operation.
     * @callback module:api/TimeOffApi~timeOffListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTimeOffList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of `TimeOff` objects.
     * @param {String} x_account_token Token identifying the end user.
     * @param {Object} opts Optional parameters
     * @param {String} opts.approver_id If provided, will only return time off for this approver.
     * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
     * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
     * @param {String} opts.cursor The pagination cursor value.
     * @param {String} opts.employee_id If provided, will only return time off for this employee.
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
     * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
     * @param {Number} opts.page_size Number of results to return per page.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {String} opts.remote_id The API provider's ID for the given object.
     * @param {module:model/String} opts.request_type If provided, will only return TimeOff with this request type. Options: ('VACATION', 'SICK', 'PERSONAL', 'JURY_DUTY', 'VOLUNTEER', 'BEREAVEMENT')
     * @param {module:model/String} opts.status If provided, will only return TimeOff with this status. Options: ('REQUESTED', 'APPROVED', 'DECLINED', 'CANCELLED', 'DELETED')
     * @param {module:api/TimeOffApi~timeOffListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTimeOffList}
     */

  }, {
    key: "timeOffList",
    value: function timeOffList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling timeOffList");
      }

      var pathParams = {};
      var queryParams = {
        'approver_id': opts['approver_id'],
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
        'remote_fields': opts['remote_fields'],
        'remote_id': opts['remote_id'],
        'request_type': opts['request_type'],
        'status': opts['status']
      };
      var headerParams = {
        'X-Account-Token': x_account_token
      };
      var formParams = {};
      var authNames = ['tokenAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTimeOffList["default"];
      return this.apiClient.callApi('/time-off', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the timeOffMetaPostRetrieve operation.
     * @callback module:api/TimeOffApi~timeOffMetaPostRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MetaResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns metadata for `TimeOff` POSTs.
     * @param {String} x_account_token Token identifying the end user.
     * @param {module:api/TimeOffApi~timeOffMetaPostRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MetaResponse}
     */

  }, {
    key: "timeOffMetaPostRetrieve",
    value: function timeOffMetaPostRetrieve(x_account_token, callback) {
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling timeOffMetaPostRetrieve");
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
      return this.apiClient.callApi('/time-off/meta/post', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the timeOffRetrieve operation.
     * @callback module:api/TimeOffApi~timeOffRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeOff} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `TimeOff` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {module:api/TimeOffApi~timeOffRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeOff}
     */

  }, {
    key: "timeOffRetrieve",
    value: function timeOffRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling timeOffRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling timeOffRetrieve");
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
      var returnType = _TimeOff["default"];
      return this.apiClient.callApi('/time-off/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TimeOffApi;
}();

exports["default"] = TimeOffApi;