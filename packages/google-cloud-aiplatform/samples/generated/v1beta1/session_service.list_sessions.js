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
  // [START aiplatform_v1beta1_generated_SessionService_ListSessions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the location to list sessions from.
   *  Format:
   *  `projects/{project}/locations/{location}/reasoningEngines/{reasoning_engine}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of sessions to return. The service may return
   *  fewer than this value. If unspecified, at most 100 sessions will be
   *  returned.
   */
  // const pageSize = 1234
  /**
   *  Optional. The
   *  next_page_token google.cloud.aiplatform.v1beta1.ListSessionsResponse.next_page_token 
   *  value returned from a previous list
   *  SessionService.ListSessions google.cloud.aiplatform.v1beta1.SessionService.ListSessions 
   *  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. The standard list filter.
   *  Supported fields:
   *     * `display_name`
   *  Example: `display_name=abc`.
   */
  // const filter = 'abc123'
  /**
   *  Optional. A comma-separated list of fields to order by, sorted in ascending
   *  order. Use "desc" after a field name for descending. Supported fields:
   *    * `create_time`
   *    * `update_time`
   *  Example: `create_time desc`.
   */
  // const orderBy = 'abc123'

  // Imports the Aiplatform library
  const {SessionServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new SessionServiceClient();

  async function callListSessions() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = aiplatformClient.listSessionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListSessions();
  // [END aiplatform_v1beta1_generated_SessionService_ListSessions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
