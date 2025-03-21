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

function main(dataStore, query) {
  // [START discoveryengine_v1beta_generated_CompletionService_CompleteQuery_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent data store resource name for which the completion is
   *  performed, such as
   *  `projects/* /locations/global/collections/default_collection/dataStores/default_data_store`.
   */
  // const dataStore = 'abc123'
  /**
   *  Required. The typeahead input used to fetch suggestions. Maximum length is
   *  128 characters.
   */
  // const query = 'abc123'
  /**
   *  Specifies the autocomplete data model. This overrides any model specified
   *  in the Configuration > Autocomplete section of the Cloud console. Currently
   *  supported values:
   *  * `document` - Using suggestions generated from user-imported documents.
   *  * `search-history` - Using suggestions generated from the past history of
   *  SearchService.Search google.cloud.discoveryengine.v1beta.SearchService.Search 
   *  API calls. Do not use it when there is no traffic for Search API.
   *  * `user-event` - Using suggestions generated from user-imported search
   *  events.
   *  * `document-completable` - Using suggestions taken directly from
   *  user-imported document fields marked as completable.
   *  Default values:
   *  * `document` is the default model for regular dataStores.
   *  * `search-history` is the default model for site search dataStores.
   */
  // const queryModel = 'abc123'
  /**
   *  A unique identifier for tracking visitors. For example, this could be
   *  implemented with an HTTP cookie, which should be able to uniquely identify
   *  a visitor on a single device. This unique identifier should not change if
   *  the visitor logs in or out of the website.
   *  This field should NOT have a fixed value such as `unknown_visitor`.
   *  This should be the same identifier as
   *  UserEvent.user_pseudo_id google.cloud.discoveryengine.v1beta.UserEvent.user_pseudo_id 
   *  and
   *  SearchRequest.user_pseudo_id google.cloud.discoveryengine.v1beta.SearchRequest.user_pseudo_id.
   *  The field must be a UTF-8 encoded string with a length limit of 128
   *  characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
   */
  // const userPseudoId = 'abc123'
  /**
   *  Indicates if tail suggestions should be returned if there are no
   *  suggestions that match the full query. Even if set to true, if there are
   *  suggestions that match the full query, those are returned and no
   *  tail suggestions are returned.
   */
  // const includeTailSuggestions = true

  // Imports the Discoveryengine library
  const {CompletionServiceClient} = require('@google-cloud/discoveryengine').v1beta;

  // Instantiates a client
  const discoveryengineClient = new CompletionServiceClient();

  async function callCompleteQuery() {
    // Construct request
    const request = {
      dataStore,
      query,
    };

    // Run request
    const response = await discoveryengineClient.completeQuery(request);
    console.log(response);
  }

  callCompleteQuery();
  // [END discoveryengine_v1beta_generated_CompletionService_CompleteQuery_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
