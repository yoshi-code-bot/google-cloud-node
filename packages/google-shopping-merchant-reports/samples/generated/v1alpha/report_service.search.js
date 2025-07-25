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

function main(parent, query) {
  // [START merchantapi_v1alpha_generated_ReportService_Search_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Id of the account making the call. Must be a standalone account
   *  or an MCA subaccount. Format: accounts/{account}
   */
  // const parent = 'abc123'
  /**
   *  Required. Query that defines a report to be retrieved.
   *  For details on how to construct your query, see the Query Language
   *  guide. For the full list of available tables and fields, see the Available
   *  fields.
   */
  // const query = 'abc123'
  /**
   *  Optional. Number of `ReportRows` to retrieve in a single page. Defaults to
   *  1000. Values above 5000 are coerced to 5000.
   */
  // const pageSize = 1234
  /**
   *  Optional. Token of the page to retrieve. If not specified, the first page
   *  of results is returned. In order to request the next page of results, the
   *  value obtained from `next_page_token` in the previous response should be
   *  used.
   */
  // const pageToken = 'abc123'

  // Imports the Reports library
  const {ReportServiceClient} = require('@google-shopping/reports').v1alpha;

  // Instantiates a client
  const reportsClient = new ReportServiceClient();

  async function callSearch() {
    // Construct request
    const request = {
      parent,
      query,
    };

    // Run request
    const iterable = reportsClient.searchAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callSearch();
  // [END merchantapi_v1alpha_generated_ReportService_Search_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
