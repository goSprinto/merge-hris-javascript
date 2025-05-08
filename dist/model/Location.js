"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CountryEnum = _interopRequireDefault(require("./CountryEnum"));

var _LocationTypeEnum = _interopRequireDefault(require("./LocationTypeEnum"));

var _RemoteData = _interopRequireDefault(require("./RemoteData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Location model module.
 * @module model/Location
 * @version 1.0
 */
var Location = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Location</code>.
   * # The Location Object ### Description The &#x60;Location&#x60; object is used to represent a Location for a Company or Employee address. This is shared across many models and is referenced whenever a location is stored.  ### Usage Example Fetch from the &#x60;LIST Locations&#x60; endpoint and filter by &#x60;ID&#x60; to show all office locations.
   * @alias module:model/Location
   */
  function Location() {
    _classCallCheck(this, Location);

    Location.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Location, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Location} obj Optional instance to populate.
     * @return {module:model/Location} The populated <code>Location</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Location();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('remote_id')) {
          obj['remote_id'] = _ApiClient["default"].convertToType(data['remote_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('phone_number')) {
          obj['phone_number'] = _ApiClient["default"].convertToType(data['phone_number'], 'String');
        }

        if (data.hasOwnProperty('street_1')) {
          obj['street_1'] = _ApiClient["default"].convertToType(data['street_1'], 'String');
        }

        if (data.hasOwnProperty('street_2')) {
          obj['street_2'] = _ApiClient["default"].convertToType(data['street_2'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('zip_code')) {
          obj['zip_code'] = _ApiClient["default"].convertToType(data['zip_code'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], _CountryEnum["default"]);
        }

        if (data.hasOwnProperty('location_type')) {
          obj['location_type'] = _ApiClient["default"].convertToType(data['location_type'], _LocationTypeEnum["default"]);
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

  return Location;
}();
/**
 * @member {String} id
 */


Location.prototype['id'] = undefined;
/**
 * The third-party API ID of the matching object.
 * @member {String} remote_id
 */

Location.prototype['remote_id'] = undefined;
/**
 * The location's name.
 * @member {String} name
 */

Location.prototype['name'] = undefined;
/**
 * The location's phone number.
 * @member {String} phone_number
 */

Location.prototype['phone_number'] = undefined;
/**
 * Line 1 of the location's street address.
 * @member {String} street_1
 */

Location.prototype['street_1'] = undefined;
/**
 * Line 2 of the location's street address.
 * @member {String} street_2
 */

Location.prototype['street_2'] = undefined;
/**
 * The location's city.
 * @member {String} city
 */

Location.prototype['city'] = undefined;
/**
 * The location's state. Represents a region if outside of the US.
 * @member {String} state
 */

Location.prototype['state'] = undefined;
/**
 * The location's zip code or postal code.
 * @member {String} zip_code
 */

Location.prototype['zip_code'] = undefined;
/**
 * The location's country.
 * @member {module:model/CountryEnum} country
 */

Location.prototype['country'] = undefined;
/**
 * The location's type. Can be either WORK or HOME
 * @member {module:model/LocationTypeEnum} location_type
 */

Location.prototype['location_type'] = undefined;
/**
 * @member {Array.<module:model/RemoteData>} remote_data
 */

Location.prototype['remote_data'] = undefined;
/**
 * Indicates whether or not this object has been deleted by third party webhooks.
 * @member {Boolean} remote_was_deleted
 */

Location.prototype['remote_was_deleted'] = undefined;
var _default = Location;
exports["default"] = _default;