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

function main(projectId, region, clusterName) {
  // [START dataproc_v1_generated_ClusterController_DeleteCluster_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The ID of the Google Cloud Platform project that the cluster
   *  belongs to.
   */
  // const projectId = 'abc123'
  /**
   *  Required. The Dataproc region in which to handle the request.
   */
  // const region = 'us-central1'
  /**
   *  Required. The cluster name.
   */
  // const clusterName = 'abc123'
  /**
   *  Optional. Specifying the `cluster_uuid` means the RPC should fail
   *  (with error NOT_FOUND) if cluster with specified UUID does not exist.
   */
  // const clusterUuid = 'abc123'
  /**
   *  Optional. A unique ID used to identify the request. If the server
   *  receives two
   *  DeleteClusterRequest (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.DeleteClusterRequest)s
   *  with the same id, then the second request will be ignored and the
   *  first google.longrunning.Operation google.longrunning.Operation  created
   *  and stored in the backend is returned.
   *  It is recommended to always set this value to a
   *  UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).
   *  The ID must contain only letters (a-z, A-Z), numbers (0-9),
   *  underscores (_), and hyphens (-). The maximum length is 40 characters.
   */
  // const requestId = 'abc123'

  // Imports the Dataproc library
  const {ClusterControllerClient} = require('@google-cloud/dataproc').v1;

  // Instantiates a client
  const dataprocClient = new ClusterControllerClient();

  async function callDeleteCluster() {
    // Construct request
    const request = {
      projectId,
      region,
      clusterName,
    };

    // Run request
    const [operation] = await dataprocClient.deleteCluster(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteCluster();
  // [END dataproc_v1_generated_ClusterController_DeleteCluster_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
