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

function main() {
  // [START artifactregistry_v1_generated_ArtifactRegistry_ListVersions_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the parent resource whose versions will be listed.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of versions to return. Maximum page size is 1,000.
   */
  // const pageSize = 1234
  /**
   *  The next_page_token value returned from a previous list request, if any.
   */
  // const pageToken = 'abc123'
  /**
   *  The view that should be returned in the response.
   */
  // const view = {}
  /**
   *  Optional. The field to order the results by.
   */
  // const orderBy = 'abc123'
  /**
   *  Optional. An expression for filtering the results of the request. Filter
   *  rules are case insensitive. The fields eligible for filtering are:
   *    * `name`
   *    * `annotations`
   *   Examples of using a filter:
   *   To filter the results of your request to versions with the name
   *   `my-version` in project `my-project` in the `us-central` region, in
   *   repository `my-repo`, append the following filter expression to your
   *   request:
   *    * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my-version"`
   *   You can also use wildcards to match any number of characters before or
   *   after the value:
   *    * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version"`
   *    * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/my*"`
   *    * `name="projects/my-project/locations/us-central1/repositories/my-repo/packages/my-package/versions/*version*"`
   *   To filter the results of your request to versions with the annotation
   *   key-value pair `external_link`: `external_link_value`, append the
   *   following filter expression to your request:
   *    * `"annotations.external_link:external_link_value"`
   *   To filter just for a specific annotation key `external_link`, append the
   *   following filter expression to your request:
   *    * `"annotations.external_link"`
   *   If the annotation key or value contains special characters, you can escape
   *   them by surrounding the value with backticks. For example, to filter the
   *   results of your request to versions with the annotation key-value pair
   *   `external.link`:`https://example.com/my-version`, append the following
   *   filter expression to your request:
   *    * `` "annotations.`external.link`:`https://example.com/my-version`" ``
   *   You can also filter with annotations with a wildcard to
   *   match any number of characters before or after the value:
   *    * `` "annotations.*_link:`*example.com*`" ``
   */
  // const filter = 'abc123'

  // Imports the Artifactregistry library
  const {ArtifactRegistryClient} = require('@google-cloud/artifact-registry').v1;

  // Instantiates a client
  const artifactregistryClient = new ArtifactRegistryClient();

  async function callListVersions() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = artifactregistryClient.listVersionsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListVersions();
  // [END artifactregistry_v1_generated_ArtifactRegistry_ListVersions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
