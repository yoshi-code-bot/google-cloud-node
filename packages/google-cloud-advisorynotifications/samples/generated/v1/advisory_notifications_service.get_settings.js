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

function main(name) {
  // [START advisorynotifications_v1_generated_AdvisoryNotificationsService_GetSettings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the settings to retrieve.
   *  Format:
   *  organizations/{organization}/locations/{location}/settings or
   *  projects/{projects}/locations/{location}/settings.
   */
  // const name = 'abc123'

  // Imports the Advisorynotifications library
  const {AdvisoryNotificationsServiceClient} = require('@google-cloud/advisorynotifications').v1;

  // Instantiates a client
  const advisorynotificationsClient = new AdvisoryNotificationsServiceClient();

  async function callGetSettings() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await advisorynotificationsClient.getSettings(request);
    console.log(response);
  }

  callGetSettings();
  // [END advisorynotifications_v1_generated_AdvisoryNotificationsService_GetSettings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
