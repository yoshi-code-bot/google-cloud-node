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

function main(groundingConfig) {
  // [START discoveryengine_v1_generated_GroundedGenerationService_CheckGrounding_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the grounding config, such as
   *  `projects/* /locations/global/groundingConfigs/default_grounding_config`.
   */
  // const groundingConfig = 'abc123'
  /**
   *  Answer candidate to check. It can have a maximum length of 4096 tokens.
   */
  // const answerCandidate = 'abc123'
  /**
   *  List of facts for the grounding check.
   *  We support up to 200 facts.
   */
  // const facts = [1,2,3,4]
  /**
   *  Configuration of the grounding check.
   */
  // const groundingSpec = {}
  /**
   *  The user labels applied to a resource must meet the following requirements:
   *  * Each resource can have multiple labels, up to a maximum of 64.
   *  * Each label must be a key-value pair.
   *  * Keys have a minimum length of 1 character and a maximum length of 63
   *    characters and cannot be empty. Values can be empty and have a maximum
   *    length of 63 characters.
   *  * Keys and values can contain only lowercase letters, numeric characters,
   *    underscores, and dashes. All characters must use UTF-8 encoding, and
   *    international characters are allowed.
   *  * The key portion of a label must be unique. However, you can use the same
   *    key with multiple resources.
   *  * Keys must start with a lowercase letter or international character.
   *  See Google Cloud
   *  Document (https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   *  for more details.
   */
  // const userLabels = [1,2,3,4]

  // Imports the Discoveryengine library
  const {GroundedGenerationServiceClient} = require('@google-cloud/discoveryengine').v1;

  // Instantiates a client
  const discoveryengineClient = new GroundedGenerationServiceClient();

  async function callCheckGrounding() {
    // Construct request
    const request = {
      groundingConfig,
    };

    // Run request
    const response = await discoveryengineClient.checkGrounding(request);
    console.log(response);
  }

  callCheckGrounding();
  // [END discoveryengine_v1_generated_GroundedGenerationService_CheckGrounding_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
