[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use `python -m synthtool`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Identity-Aware Proxy: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-iap)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/iap.svg)](https://www.npmjs.org/package/@google-cloud/iap)




iap client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-iap/CHANGELOG.md).

* [Identity-Aware Proxy Node.js Client API Reference][client-docs]
* [Identity-Aware Proxy Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-iap](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-iap)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Identity-Aware Proxy API][enable_api].
1.  [Set up authentication][auth] so you can access the
    API from your local workstation.

### Installing the client library

```bash
npm install @google-cloud/iap
```


### Using the client library

```javascript
// Imports the Google Cloud client library

// remove this line after package is released
// eslint-disable-next-line node/no-missing-require
const {IdentityAwareProxyOAuthServiceClient} = require('@google-cloud/iap');

// const projectId = 'my-project'

// Creates a client
const client = new IdentityAwareProxyOAuthServiceClient();

async function listBrands() {
  const [brands] = await client.listBrands({
    parent: `projects/${projectId}`,
  });
  console.info(brands);
}
listBrands();

```



## Samples

Samples are in the [`samples/`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-iap/samples) directory. Each sample's `README.md` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Identity_aware_proxy_admin_service.create_tunnel_dest_group | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.create_tunnel_dest_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.create_tunnel_dest_group.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.delete_tunnel_dest_group | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.delete_tunnel_dest_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.delete_tunnel_dest_group.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.get_iam_policy.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.get_iap_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.get_iap_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.get_iap_settings.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.get_tunnel_dest_group | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.get_tunnel_dest_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.get_tunnel_dest_group.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.list_tunnel_dest_groups | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.list_tunnel_dest_groups.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.list_tunnel_dest_groups.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.set_iam_policy.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.test_iam_permissions.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.update_iap_settings | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.update_iap_settings.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.update_iap_settings.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.update_tunnel_dest_group | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.update_tunnel_dest_group.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.update_tunnel_dest_group.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_service.validate_iap_attribute_expression | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.validate_iap_attribute_expression.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_admin_service.validate_iap_attribute_expression.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.create_brand | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.create_brand.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.create_brand.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.create_identity_aware_proxy_client | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.create_identity_aware_proxy_client.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.create_identity_aware_proxy_client.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.delete_identity_aware_proxy_client | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.delete_identity_aware_proxy_client.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.delete_identity_aware_proxy_client.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.get_brand | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.get_brand.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.get_brand.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.get_identity_aware_proxy_client | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.get_identity_aware_proxy_client.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.get_identity_aware_proxy_client.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.list_brands | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.list_brands.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.list_brands.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.list_identity_aware_proxy_clients | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.list_identity_aware_proxy_clients.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.list_identity_aware_proxy_clients.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_o_auth_service.reset_identity_aware_proxy_client_secret | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.reset_identity_aware_proxy_client_secret.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1/identity_aware_proxy_o_auth_service.reset_identity_aware_proxy_client_secret.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_v1_beta1.get_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1beta1/identity_aware_proxy_admin_v1_beta1.get_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1beta1/identity_aware_proxy_admin_v1_beta1.get_iam_policy.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_v1_beta1.set_iam_policy | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1beta1/identity_aware_proxy_admin_v1_beta1.set_iam_policy.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1beta1/identity_aware_proxy_admin_v1_beta1.set_iam_policy.js,packages/google-cloud-iap/samples/README.md) |
| Identity_aware_proxy_admin_v1_beta1.test_iam_permissions | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/generated/v1beta1/identity_aware_proxy_admin_v1_beta1.test_iam_permissions.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/generated/v1beta1/identity_aware_proxy_admin_v1_beta1.test_iam_permissions.js,packages/google-cloud-iap/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/master/packages/google-cloud-iap/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-iap/samples/quickstart.js,packages/google-cloud-iap/samples/README.md) |



The [Identity-Aware Proxy Node.js Client API Reference][client-docs] documentation
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
For example, `npm install @google-cloud/iap@legacy-8` installs client libraries
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

[client-docs]: https://cloud.google.com/nodejs/docs/reference/iap/latest
[product-docs]: https://cloud.google.com/iap/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=iap.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/external/set-up-adc-local
