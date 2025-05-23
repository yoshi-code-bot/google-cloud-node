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
  // [START css_v1_generated_QuotaService_ListQuotaGroups_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The CSS account that owns the collection of method quotas and
   *  resources. In most cases, this is the CSS domain. Format:
   *  accounts/{account}
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of quotas to return in the response, used
   *  for paging. Defaults to 500; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Token (if provided) to retrieve the subsequent page. All other
   *  parameters must match the original call that provided the page token.
   */
  // const pageToken = 'abc123'

  // Imports the Css library
  const {QuotaServiceClient} = require('@google-shopping/css').v1;

  // Instantiates a client
  const cssClient = new QuotaServiceClient();

  async function callListQuotaGroups() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = cssClient.listQuotaGroupsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListQuotaGroups();
  // [END css_v1_generated_QuotaService_ListQuotaGroups_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
