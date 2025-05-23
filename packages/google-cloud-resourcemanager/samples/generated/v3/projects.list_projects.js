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
  // [START cloudresourcemanager_v3_generated_Projects_ListProjects_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the parent resource whose projects are being listed.
   *  Only children of this parent resource are listed; descendants are not
   *  listed.
   *  If the parent is a folder, use the value `folders/{folder_id}`. If the
   *  parent is an organization, use the value `organizations/{org_id}`.
   */
  // const parent = 'abc123'
  /**
   *  Optional. A pagination token returned from a previous call to
   *  ListProjects  google.cloud.resourcemanager.v3.Projects.ListProjects  that
   *  indicates from where listing should continue.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The maximum number of projects to return in the response.
   *  The server can return fewer projects than requested.
   *  If unspecified, server picks an appropriate default.
   */
  // const pageSize = 1234
  /**
   *  Optional. Indicate that projects in the `DELETE_REQUESTED` state should
   *  also be returned. Normally only `ACTIVE` projects are returned.
   */
  // const showDeleted = true

  // Imports the Resourcemanager library
  const {ProjectsClient} = require('@google-cloud/resource-manager').v3;

  // Instantiates a client
  const resourcemanagerClient = new ProjectsClient();

  async function callListProjects() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = resourcemanagerClient.listProjectsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListProjects();
  // [END cloudresourcemanager_v3_generated_Projects_ListProjects_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
