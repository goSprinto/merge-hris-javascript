"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Location = _interopRequireDefault(require("../model/Location"));

var _PaginatedLocationList = _interopRequireDefault(require("../model/PaginatedLocationList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Locations service.
* @module api/LocationsApi
* @version 1.0
*/
var LocationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new LocationsApi. 
  * @alias module:api/LocationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LocationsApi(apiClient) {
    _classCallCheck(this, LocationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the locationsList operation.
   * @callback module:api/LocationsApi~locationsListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedLocationList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `Location` objects.
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
   * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
   * @param {String} opts.remote_id The API provider's ID for the given object.
   * @param {module:api/LocationsApi~locationsListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedLocationList}
   */


  _createClass(LocationsApi, [{
    key: "locationsList",
    value: function locationsList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling locationsList");
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
      var returnType = _PaginatedLocationList["default"];
      return this.apiClient.callApi('/locations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the locationsRetrieve operation.
     * @callback module:api/LocationsApi~locationsRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Location} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `Location` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {module:api/LocationsApi~locationsRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Location}
     */

  }, {
    key: "locationsRetrieve",
    value: function locationsRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling locationsRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling locationsRetrieve");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
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
      var returnType = _Location["default"];
      return this.apiClient.callApi('/locations/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LocationsApi;
}();

exports["default"] = LocationsApi;