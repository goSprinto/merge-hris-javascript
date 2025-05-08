"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BankInfo = _interopRequireDefault(require("../model/BankInfo"));

var _PaginatedBankInfoList = _interopRequireDefault(require("../model/PaginatedBankInfoList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* BankInfo service.
* @module api/BankInfoApi
* @version 1.0
*/
var BankInfoApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BankInfoApi. 
  * @alias module:api/BankInfoApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BankInfoApi(apiClient) {
    _classCallCheck(this, BankInfoApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the bankInfoList operation.
   * @callback module:api/BankInfoApi~bankInfoListCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedBankInfoList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a list of `BankInfo` objects.
   * @param {String} x_account_token Token identifying the end user.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.account_type If provided, will only return BankInfo's with this account type. Options: ('SAVINGS', 'CHECKING')
   * @param {String} opts.bank_name If provided, will only return BankInfo's with this bank name.
   * @param {Date} opts.created_after If provided, will only return objects created after this datetime.
   * @param {Date} opts.created_before If provided, will only return objects created before this datetime.
   * @param {String} opts.cursor The pagination cursor value.
   * @param {String} opts.employee_id If provided, will only return bank accounts for this employee.
   * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
   * @param {Boolean} opts.include_deleted_data Whether to include data that was marked as deleted by third party webhooks.
   * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
   * @param {Date} opts.modified_after If provided, will only return objects modified after this datetime.
   * @param {Date} opts.modified_before If provided, will only return objects modified before this datetime.
   * @param {module:model/String} opts.order_by Overrides the default ordering for this endpoint.
   * @param {Number} opts.page_size Number of results to return per page.
   * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
   * @param {String} opts.remote_id The API provider's ID for the given object.
   * @param {module:api/BankInfoApi~bankInfoListCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedBankInfoList}
   */


  _createClass(BankInfoApi, [{
    key: "bankInfoList",
    value: function bankInfoList(x_account_token, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling bankInfoList");
      }

      var pathParams = {};
      var queryParams = {
        'account_type': opts['account_type'],
        'bank_name': opts['bank_name'],
        'created_after': opts['created_after'],
        'created_before': opts['created_before'],
        'cursor': opts['cursor'],
        'employee_id': opts['employee_id'],
        'expand': opts['expand'],
        'include_deleted_data': opts['include_deleted_data'],
        'include_remote_data': opts['include_remote_data'],
        'modified_after': opts['modified_after'],
        'modified_before': opts['modified_before'],
        'order_by': opts['order_by'],
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
      var returnType = _PaginatedBankInfoList["default"];
      return this.apiClient.callApi('/bank-info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the bankInfoRetrieve operation.
     * @callback module:api/BankInfoApi~bankInfoRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BankInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `BankInfo` object with the given `id`.
     * @param {String} x_account_token Token identifying the end user.
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.expand Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     * @param {Boolean} opts.include_remote_data Whether to include the original data Merge fetched from the third-party to produce these models.
     * @param {module:model/String} opts.remote_fields Which fields should be returned in non-normalized form.
     * @param {module:api/BankInfoApi~bankInfoRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BankInfo}
     */

  }, {
    key: "bankInfoRetrieve",
    value: function bankInfoRetrieve(x_account_token, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'x_account_token' is set

      if (x_account_token === undefined || x_account_token === null) {
        throw new Error("Missing the required parameter 'x_account_token' when calling bankInfoRetrieve");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bankInfoRetrieve");
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
      var returnType = _BankInfo["default"];
      return this.apiClient.callApi('/bank-info/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BankInfoApi;
}();

exports["default"] = BankInfoApi;