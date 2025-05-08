"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Company = _interopRequireDefault(require("../model/Company"));

var _PaginatedCompanyList = _interopRequireDefault(require("../model/PaginatedCompanyList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Companies service.
* @module api/CompaniesApi
* @version 1.0
*/
var CompaniesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CompaniesApi. 
  * @alias module:api/CompaniesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CompaniesApi(apiClient) {
    _classCallCheck(this, CompaniesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the companiesList operation.
   * @callback module:api/CompaniesApi~companiesListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedCompanyList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `Company` objects.
   * @param {String} x_account_token Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
   * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
   * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
   * @param {Number} opts.page_size Number of results to return per page.
   * @param {String} opts.remote_id The API provider's ID for the given object.
   * @param {module:api/CompaniesApi~companiesListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedCompanyList}
   */


  _createClass(CompaniesApi, [{
    key: "companiesList",
    value: function companiesList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling companiesList");
      }

      var pathParams = {};
      var queryParams = {
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
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
      var returnType = _PaginatedCompanyList["default"];
      return this.apiClient.callApi('/companies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the companiesRetrieve operation.
     * @callback module:api/CompaniesApi~companiesRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Company} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `Company` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:api/CompaniesApi~companiesRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Company}
     */

  }, {
    key: "companiesRetrieve",
    value: function companiesRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling companiesRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling companiesRetrieve");
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
      var returnType = _Company["default"];
      return this.apiClient.callApi('/companies/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CompaniesApi;
}();

exports["default"] = CompaniesApi;