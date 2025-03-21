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

function main(parent, transferConfig) {
  // [START bigquerydatatransfer_v1_generated_DataTransferService_CreateTransferConfig_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The BigQuery project id where the transfer configuration should
   *  be created. Must be in the format
   *  projects/{project_id}/locations/{location_id} or projects/{project_id}. If
   *  specified location and location of the destination bigquery dataset do not
   *  match - the request will fail.
   */
  // const parent = 'abc123'
  /**
   *  Required. Data transfer configuration to create.
   */
  // const transferConfig = {}
  /**
   *  Optional version info. This parameter replaces `authorization_code` which
   *  is no longer used in any data sources. This is required only if
   *  `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials
   *  are needed, as indicated by `CheckValidCreds`. In order to obtain version
   *  info, make a request to the following URL:
   *  <pre class="prettyprint" suppresswarning="true">
   *  https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=<var>client_id</var>&scope=<var>data_source_scopes</var>
   *  </pre>
   *  * The <var>client_id</var> is the OAuth client_id of the data source as
   *  returned by ListDataSources method.
   *  * <var>data_source_scopes</var> are the scopes returned by ListDataSources
   *  method.
   *  Note that this should not be set when `service_account_name` is used to
   *  create the transfer config.
   */
  // const versionInfo = 'abc123'
  /**
   *  Optional service account email. If this field is set, the transfer config
   *  will be created with this service account's credentials. It requires that
   *  the requesting user calling this API has permissions to act as this service
   *  account.
   *  Note that not all data sources support service account credentials when
   *  creating a transfer config. For the latest list of data sources, read about
   *  using service
   *  accounts (https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).
   */
  // const serviceAccountName = 'abc123'

  // Imports the Datatransfer library
  const {DataTransferServiceClient} = require('@google-cloud/bigquery-data-transfer').v1;

  // Instantiates a client
  const datatransferClient = new DataTransferServiceClient();

  async function callCreateTransferConfig() {
    // Construct request
    const request = {
      parent,
      transferConfig,
    };

    // Run request
    const response = await datatransferClient.createTransferConfig(request);
    console.log(response);
  }

  callCreateTransferConfig();
  // [END bigquerydatatransfer_v1_generated_DataTransferService_CreateTransferConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
