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
  // [START sqladmin_v1beta4_generated_SqlInstancesService_PromoteReplica_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Cloud SQL read replica instance name.
   */
  // const instance = 'abc123'
  /**
   *  ID of the project that contains the read replica.
   */
  // const project = 'my-project'
  /**
   *  Set to true to invoke a replica failover to the designated DR replica.
   *  As part of replica failover, the promote operation attempts
   *  to add the original primary instance as a replica of the promoted
   *  DR replica when the original primary instance comes back online.
   *  If set to false or not specified, then the original primary
   *  instance becomes an independent Cloud SQL primary instance.
   *  Only applicable to MySQL.
   */
  // const failover = true

  // Imports the Sql library
  const {SqlInstancesServiceClient} = require('@google-cloud/sql').v1beta4;

  // Instantiates a client
  const sqlClient = new SqlInstancesServiceClient();

  async function callPromoteReplica() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await sqlClient.promoteReplica(request);
    console.log(response);
  }

  callPromoteReplica();
  // [END sqladmin_v1beta4_generated_SqlInstancesService_PromoteReplica_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
