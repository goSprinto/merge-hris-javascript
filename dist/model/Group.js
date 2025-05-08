"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupTypeEnum = _interopRequireDefault(require("./GroupTypeEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Group model module.
 * @module model/Group
 * @version 1.0
 */
var Group = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Group</code>.
   * # The Group Object ### Description The &#x60;Group&#x60; object is used to represent Group information that employees belong to. This is often referenced with an Employee object.  Please note: The teams object will fulfill most use cases. The Groups object is for power-users that want all types of groups at a company and the optionality of pulling multiple groups for an employee.  ### Usage Example Fetch from the &#x60;LIST Employee&#x60; endpoint and expand groups to view an employee&#39;s groups.
   * @alias module:model/Group
   */
  function Group() {
    _classCallCheck(this, Group);

    Group.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Group, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Group} obj Optional instance to populate.
     * @return {module:model/Group} The populated <code>Group</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Group();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('parent_group')) {
          obj['parent_group'] = _ApiClient["default"].convertToType(data['parent_group'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], _GroupTypeEnum["default"]);
        }

        if (data.hasOwnProperty('remote_data')) {
          obj['remote_data'] = _ApiClient["default"].convertToType(data['remote_data'], [_RemoteData["default"]]);
        }

        if (data.hasOwnProperty('remote_was_deleted')) {
          obj['remote_was_deleted'] = _ApiClient["default"].convertToType(data['remote_was_deleted'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Group;
}();
/**
 * @member {String} id
 */


Group.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Group.prototype['remote_id'] = undefined;
/**
 * The parent group for this group.
 * @member {String} parent_group
 */

Group.prototype['parent_group'] = undefined;
/**
 * The group name.
 * @member {String} name
 */

Group.prototype['name'] = undefined;
/**
 * The group type
 * @member {module:model/GroupTypeEnum} type
 */

Group.prototype['type'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Group.prototype['remote_data'] = undefined;
/**
 * Indicates whether or not this object has been deleted by third party webhooks.
 * @member {Boolean} remote_was_deleted
 */

Group.prototype['remote_was_deleted'] = undefined;
var _default = Group;
exports["default"] = _default;