[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Cloud Tasks: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tasks)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/tasks.svg)](https://www.npmjs.org/package/@google-cloud/tasks)




Cloud Tasks API client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tasks/CHANGELOG.md).

* [Cloud Tasks Node.js Client API Reference][client-docs]
* [Cloud Tasks Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-tasks](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tasks)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)

* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Cloud Tasks API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/tasks
```




## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-tasks/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_tasks.create_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.create_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.create_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.create_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.create_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.create_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.delete_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.delete_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.delete_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.delete_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.delete_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.delete_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_iam_policy.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.get_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.list_queues | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.list_queues.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.list_queues.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.list_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.list_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.list_tasks.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.pause_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.pause_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.pause_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.purge_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.purge_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.purge_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.resume_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.resume_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.resume_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.run_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.run_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.run_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.set_iam_policy.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.test_iam_permissions.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.update_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.update_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2/cloud_tasks.update_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.acknowledge_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.acknowledge_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.acknowledge_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.buffer_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.buffer_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.buffer_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.cancel_lease | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.cancel_lease.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.cancel_lease.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.create_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.create_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.create_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.create_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.create_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.create_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.delete_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.delete_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.delete_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.delete_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.delete_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.delete_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_iam_policy.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.get_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.lease_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.lease_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.lease_tasks.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.list_queues | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.list_queues.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.list_queues.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.list_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.list_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.list_tasks.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.pause_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.pause_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.pause_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.purge_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.purge_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.purge_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.renew_lease | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.renew_lease.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.renew_lease.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.resume_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.resume_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.resume_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.run_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.run_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.run_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.set_iam_policy.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.test_iam_permissions.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.update_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.update_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.update_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.upload_queue_yaml | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.upload_queue_yaml.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta2/cloud_tasks.upload_queue_yaml.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.buffer_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.buffer_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.buffer_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.create_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.create_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.create_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.create_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.create_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.create_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.delete_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.delete_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.delete_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.delete_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.delete_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.delete_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_iam_policy.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.get_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.get_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.list_queues | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.list_queues.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.list_queues.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.list_tasks | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.list_tasks.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.list_tasks.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.pause_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.pause_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.pause_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.purge_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.purge_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.purge_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.resume_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.resume_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.resume_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.run_task | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.run_task.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.run_task.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.set_iam_policy.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.test_iam_permissions.js,packages/google-cloud-tasks/samples/README.md) |
| Cloud_tasks.update_queue | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.update_queue.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/generated/v2beta3/cloud_tasks.update_queue.js,packages/google-cloud-tasks/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-tasks/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-tasks/samples/quickstart.js,packages/google-cloud-tasks/samples/README.md) |



The [Cloud Tasks Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention `legacy-(version)`.
For example, `npm install @google-cloud/tasks@legacy-8` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/master/CONTRIBUTING.md).

Please note that this `README.md`, the `samples/README.md`,
and a variety of configuration files in this repository (including `.nycrc` and `tsconfig.json`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/master/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/tasks/latest
[product-docs]: https://cloud.google.com/tasks/docs/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=cloudtasks.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started
