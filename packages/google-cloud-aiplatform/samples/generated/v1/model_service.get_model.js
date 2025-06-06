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
  // [START aiplatform_v1_generated_ModelService_GetModel_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Model resource.
   *  Format: `projects/{project}/locations/{location}/models/{model}`
   *  In order to retrieve a specific version of the model, also provide
   *  the version ID or version alias.
   *    Example: `projects/{project}/locations/{location}/models/{model}@2`
   *               or
   *             `projects/{project}/locations/{location}/models/{model}@golden`
   *  If no version ID or alias is specified, the "default" version will be
   *  returned. The "default" version alias is created for the first version of
   *  the model, and can be moved to other versions later on. There will be
   *  exactly one default version.
   */
  // const name = 'abc123'

  // Imports the Aiplatform library
  const {ModelServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new ModelServiceClient();

  async function callGetModel() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await aiplatformClient.getModel(request);
    console.log(response);
  }

  callGetModel();
  // [END aiplatform_v1_generated_ModelService_GetModel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
