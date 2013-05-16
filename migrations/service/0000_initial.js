/**
 * Name of the migration framework version which has generated this file.
 * DO NOT EDIT MANUALLY.
 */
exports.FRAMEWORK_VERSION = '0.1';


/**
 * Time stamp where the migration has been generated.
 * DO NOT EDIT MANUALLY.
 */
exports.TIMESTAMP = 1343887369;


/**
 * Migration version.
 * DO NOT EDIT MANUALLY.
 */
exports.VERSION = 0;


/**
 * Fields on model  at version 0.
 * Notice: DO NOT EDIT MANUALLY.
 */
exports.FIELDS = {
  "heartbeat_timeout": null,
  "metadata": {
    "default_value": {}
  },
  "tags": {
    "default_value": []
  },
  "last_seen": null
};


exports.forward = function(obj) {
  return obj;
};


exports.backward = function(obj) {
  return obj;
};
