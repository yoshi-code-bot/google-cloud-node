# Changelog

## [2.1.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v2.0.1...kms-inventory-v2.1.0) (2025-07-09)


### Features

* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6419](https://github.com/googleapis/google-cloud-node/issues/6419)) ([f8a324c](https://github.com/googleapis/google-cloud-node/commit/f8a324ca5c3bc0f730e4ed67d9407c44f2414936))
* [Many APIs] add methods from gax to cache proto root and process custom error details ([#6421](https://github.com/googleapis/google-cloud-node/issues/6421)) ([0cba45c](https://github.com/googleapis/google-cloud-node/commit/0cba45c3abc98d4f1ffdf75da3610e6e52267737))
* Add protobufjs 2023 edition support ([#6303](https://github.com/googleapis/google-cloud-node/issues/6303)) ([4a0cba1](https://github.com/googleapis/google-cloud-node/commit/4a0cba1e41a9aeb9c15ad31487ef013c8277cfef))

## [2.0.1](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v2.0.0...kms-inventory-v2.0.1) (2025-03-19)


### Bug Fixes

* [Many APIs] await/catch promises, and update listOperationsAsync return type ([#6186](https://github.com/googleapis/google-cloud-node/issues/6186)) ([dcfc7b4](https://github.com/googleapis/google-cloud-node/commit/dcfc7b492a2ac3fb86b93ae1375bac1c5153d049))

## [2.0.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v1.5.0...kms-inventory-v2.0.0) (2025-03-18)


### ⚠ BREAKING CHANGES

* upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096))

### Features

* [Many APIs] add request/response debug logging to gapics ([#6140](https://github.com/googleapis/google-cloud-node/issues/6140)) ([2f96b1f](https://github.com/googleapis/google-cloud-node/commit/2f96b1f95dd6b7cb89871b56e5ea5aadf5454292))
* Adding a state field for AutokeyConfig ([c043c2e](https://github.com/googleapis/google-cloud-node/commit/c043c2edab6efc9980bceffcf0db888ef8fe41d4))


### Miscellaneous Chores

* Upgrade to Node 18 ([#6096](https://github.com/googleapis/google-cloud-node/issues/6096)) ([eadae64](https://github.com/googleapis/google-cloud-node/commit/eadae64d54e07aa2c65097ea52e65008d4e87436))

## [1.5.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v1.4.0...kms-inventory-v1.5.0) (2024-06-21)


### Features

* [kmsinventory] support Key Access Justifications policy configuration ([#5480](https://github.com/googleapis/google-cloud-node/issues/5480)) ([83da16f](https://github.com/googleapis/google-cloud-node/commit/83da16fbfb5fc37d689b72ef9d6f607d7167ae95))

## [1.4.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v1.3.0...kms-inventory-v1.4.0) (2024-05-21)


### Features

* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5351](https://github.com/googleapis/google-cloud-node/issues/5351)) ([01f48fc](https://github.com/googleapis/google-cloud-node/commit/01f48fce63ec4ddf801d59ee2b8c0db9f6fb8372))
* [Many APIs] update Nodejs generator to send API versions in headers for GAPICs ([#5354](https://github.com/googleapis/google-cloud-node/issues/5354)) ([a9784ed](https://github.com/googleapis/google-cloud-node/commit/a9784ed3db6ee96d171762308bbbcd57390b6866))

## [1.3.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v1.2.0...kms-inventory-v1.3.0) (2024-05-08)


### Features

* [kmsinventory] add client library for KMS Autokey service, which enables automated KMS key provision and management ([#5314](https://github.com/googleapis/google-cloud-node/issues/5314)) ([a6da262](https://github.com/googleapis/google-cloud-node/commit/a6da26277bac24fa82392cadb7602f61b64e67fb))

## [1.2.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v1.1.0...kms-inventory-v1.2.0) (2024-03-29)


### Features

* [Many APIs] add several fields to manage state of database encryption update ([#5189](https://github.com/googleapis/google-cloud-node/issues/5189)) ([64b5a75](https://github.com/googleapis/google-cloud-node/commit/64b5a759caa979837199086c2d546a565ad2b3b1))

## [1.1.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v1.0.1...kms-inventory-v1.1.0) (2024-02-09)


### Features

* Trusted Private Cloud support, use the universeDomain parameter  ([#5025](https://github.com/googleapis/google-cloud-node/issues/5025)) ([7244cab](https://github.com/googleapis/google-cloud-node/commit/7244cab107973bef57c5ea84ae77c51718126822))

## [1.0.1](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v1.0.0...kms-inventory-v1.0.1) (2023-09-06)


### Bug Fixes

* [Many APIs] simplify logic for HTTP/1.1 REST fallback option ([#4586](https://github.com/googleapis/google-cloud-node/issues/4586)) ([4b18686](https://github.com/googleapis/google-cloud-node/commit/4b186867323b8b15469bf5e1cb890bf703b531b3))

## [1.0.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v0.2.0...kms-inventory-v1.0.0) (2023-08-06)


### ⚠ BREAKING CHANGES

* migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443))

### Bug Fixes

* [Many APIs] fix typings for IAM methods ([#4462](https://github.com/googleapis/google-cloud-node/issues/4462)) ([6df8854](https://github.com/googleapis/google-cloud-node/commit/6df8854fdfbf62e6374f79d785f142b2f2e6cfae))


### Miscellaneous Chores

* Migrate to Node 14 ([#4443](https://github.com/googleapis/google-cloud-node/issues/4443)) ([2260f12](https://github.com/googleapis/google-cloud-node/commit/2260f12543d171bda95345e53475f5f0fdc45770))

## [0.2.0](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v0.1.1...kms-inventory-v0.2.0) (2023-07-24)


### Features

* [kmsinventory] add resource_types to SearchAllResources, to allow filtering by resource type ([#4420](https://github.com/googleapis/google-cloud-node/issues/4420)) ([90d9a44](https://github.com/googleapis/google-cloud-node/commit/90d9a44b9ba3fb6dbb90f2ff6315f7898776b910))

## [0.1.1](https://github.com/googleapis/google-cloud-node/compare/kms-inventory-v0.1.0...kms-inventory-v0.1.1) (2023-04-13)


### Bug Fixes

* Minify JSON and JS files, and remove .map files ([#4143](https://github.com/googleapis/google-cloud-node/issues/4143)) ([170f7d5](https://github.com/googleapis/google-cloud-node/commit/170f7d57b8fd344d182a8e758867b8124722eebc))

## 0.1.0 (2023-03-02)


### Features

* Add initial files for google.cloud.kms.inventory.v1 ([#4011](https://github.com/googleapis/google-cloud-node/issues/4011)) ([44756d7](https://github.com/googleapis/google-cloud-node/commit/44756d7c15642a065628cd4a598198a56584dbff))
