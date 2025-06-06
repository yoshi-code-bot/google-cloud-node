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

function main(api) {
  // [START apigeeregistry_v1_generated_Registry_UpdateApi_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The API to update.
   *  The `name` field is used to identify the API to update.
   *  Format: `projects/* /locations/* /apis/*`
   */
  // const api = {}
  /**
   *  The list of fields to be updated. If omitted, all fields are updated that
   *  are set in the request message (fields set to default values are ignored).
   *  If an asterisk "*" is specified, all fields are updated, including fields
   *  that are unspecified/default in the request.
   */
  // const updateMask = {}
  /**
   *  If set to true, and the API is not found, a new API will be created.
   *  In this situation, `update_mask` is ignored.
   */
  // const allowMissing = true

  // Imports the Apigeeregistry library
  const {RegistryClient} = require('@google-cloud/apigee-registry').v1;

  // Instantiates a client
  const apigeeregistryClient = new RegistryClient();

  async function callUpdateApi() {
    // Construct request
    const request = {
      api,
    };

    // Run request
    const response = await apigeeregistryClient.updateApi(request);
    console.log(response);
  }

  callUpdateApi();
  // [END apigeeregistry_v1_generated_Registry_UpdateApi_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
