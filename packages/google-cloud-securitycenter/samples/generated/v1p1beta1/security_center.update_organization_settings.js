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

function main(organizationSettings) {
  // [START securitycenter_v1p1beta1_generated_SecurityCenter_UpdateOrganizationSettings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The organization settings resource to update.
   */
  // const organizationSettings = {}
  /**
   *  The FieldMask to use when updating the settings resource.
   *  If empty all mutable fields will be updated.
   */
  // const updateMask = {}

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/security-center').v1p1beta1;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callUpdateOrganizationSettings() {
    // Construct request
    const request = {
      organizationSettings,
    };

    // Run request
    const response = await securitycenterClient.updateOrganizationSettings(request);
    console.log(response);
  }

  callUpdateOrganizationSettings();
  // [END securitycenter_v1p1beta1_generated_SecurityCenter_UpdateOrganizationSettings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
