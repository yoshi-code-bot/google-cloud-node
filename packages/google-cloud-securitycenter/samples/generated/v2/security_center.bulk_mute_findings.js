// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START securitycenter_v2_generated_SecurityCenter_BulkMuteFindings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent, at which bulk action needs to be applied. If no
   *  location is specified, findings are updated in global. The following list
   *  shows some examples:
   *  + `organizations/[organization_id]`
   *  + `organizations/[organization_id]/locations/[location_id]`
   *  + `folders/[folder_id]`
   *  + `folders/[folder_id]/locations/[location_id]`
   *  + `projects/[project_id]`
   *  + `projects/[project_id]/locations/[location_id]`
   */
  // const parent = 'abc123'
  /**
   *  Expression that identifies findings that should be updated.
   *  The expression is a list of zero or more restrictions combined
   *  via logical operators `AND` and `OR`. Parentheses are supported, and `OR`
   *  has higher precedence than `AND`.
   *  Restrictions have the form `<field> <operator> <value>` and may have a
   *  `-` character in front of them to indicate negation. The fields map to
   *  those defined in the corresponding resource.
   *  The supported operators are:
   *  * `=` for all value types.
   *  * `>`, `<`, `>=`, `<=` for integer values.
   *  * `:`, meaning substring matching, for strings.
   *  The supported value types are:
   *  * string literals in quotes.
   *  * integer literals without quotes.
   *  * boolean literals `true` and `false` without quotes.
   */
  // const filter = 'abc123'
  /**
   *  Optional. All findings matching the given filter will have their mute state
   *  set to this value. The default value is `MUTED`. Setting this to
   *  `UNDEFINED` will clear the mute state on all matching findings.
   */
  // const muteState = {}

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/securitycenter').v2;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callBulkMuteFindings() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const [operation] = await securitycenterClient.bulkMuteFindings(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callBulkMuteFindings();
  // [END securitycenter_v2_generated_SecurityCenter_BulkMuteFindings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
