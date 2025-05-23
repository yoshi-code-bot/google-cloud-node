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
  // [START cloudfunctions_v2_generated_FunctionService_ListRuntimes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The project and location from which the runtimes should be
   *  listed, specified in the format `projects/* /locations/*`
   */
  // const parent = 'abc123'
  /**
   *  The filter for Runtimes that match the filter expression,
   *  following the syntax outlined in https://google.aip.dev/160.
   */
  // const filter = 'abc123'

  // Imports the Functions library
  const {FunctionServiceClient} = require('@google-cloud/functions').v2;

  // Instantiates a client
  const functionsClient = new FunctionServiceClient();

  async function callListRuntimes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const response = await functionsClient.listRuntimes(request);
    console.log(response);
  }

  callListRuntimes();
  // [END cloudfunctions_v2_generated_FunctionService_ListRuntimes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
