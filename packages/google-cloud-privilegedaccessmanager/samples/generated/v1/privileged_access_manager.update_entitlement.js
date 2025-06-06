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

function main(entitlement, updateMask) {
  // [START privilegedaccessmanager_v1_generated_PrivilegedAccessManager_UpdateEntitlement_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The entitlement resource that is updated.
   */
  // const entitlement = {}
  /**
   *  Required. The list of fields to update. A field is overwritten if, and only
   *  if, it is in the mask. Any immutable fields set in the mask are ignored by
   *  the server. Repeated fields and map fields are only allowed in the last
   *  position of a `paths` string and overwrite the existing values. Hence an
   *  update to a repeated field or a map should contain the entire list of
   *  values. The fields specified in the update_mask are relative to the
   *  resource and not to the request.
   *  (e.g. `MaxRequestDuration`; *not* `entitlement.MaxRequestDuration`)
   *  A value of '*' for this field refers to full replacement of the resource.
   */
  // const updateMask = {}

  // Imports the Privilegedaccessmanager library
  const {PrivilegedAccessManagerClient} = require('@google-cloud/privilegedaccessmanager').v1;

  // Instantiates a client
  const privilegedaccessmanagerClient = new PrivilegedAccessManagerClient();

  async function callUpdateEntitlement() {
    // Construct request
    const request = {
      entitlement,
      updateMask,
    };

    // Run request
    const [operation] = await privilegedaccessmanagerClient.updateEntitlement(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateEntitlement();
  // [END privilegedaccessmanager_v1_generated_PrivilegedAccessManager_UpdateEntitlement_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
