<h1 align="center">
	<img width="360" src="logo.png" alt="Insomnia ULID Generator">
</h1>

<h1 align="center">Insomnia ULID Generator Plugin</h1>

<p align="center">
  <a href="./releases/tag/1.0.0"><img src="https://img.shields.io/badge/version-1.0.0-blue.svg"/></a>
  <a href="https://opensource.org/licenses/Apache"><img src="https://img.shields.io/badge/License-Apache-blue.svg"/></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"/></a>
  <a href="https://github.com/caiocf/insomnia-plugin-ulid-generator/"><img src="https://img.shields.io/github/stars/caiocf/insomnia-plugin-ulid-generator.svg"/></a>
</p>

<p align="center"><h6>Support me</h6></p>

<p align="center">
  <a href="https://www.paypal.com/donate/?business=3YHDFH2J8SHEG&no_recurring=0&currency_code=USD"><img src="https://img.shields.io/badge/paypal-support-blue.svg"/></a>
</p>

This plugin for Insomnia provides a ULID (Universally Unique Lexicographically Sortable Identifier) generator, enabling users to generate ULIDs for use in API testing and development within the Insomnia REST Client.

Refer to the [ULID spec](https://github.com/ulid/spec) for a more detailed ULID specification.

## Installation

To install the plugin:

1. Open Insomnia.
2. Navigate to "Preferences" > "Plugins".
3. Enter `insomnia-plugin-ulid-generator` in the plugin name field.
4. Click "Install Plugin".

<img src="insomnia_install.PNG" alt="Install Plugin">

## How to Use

After installing the plugin:

1. Create or open an existing request in Insomnia.
2. In the request editor, add the `ULID` tag where needed (e.g., in the URL, query parameters, headers, or request body).
3. The `ULID` tag will automatically be replaced with a generated ULID upon sending the request.

<img src="insomnia_use.PNG" alt="Using Insomnia ULID Generator">

## License

This Insomnia plugin is distributed under the Apache License. [See LICENSE](LICENSE.md) for details.