[![Build Status](https://travis-ci.org/NaturesProphet/restart-rancher.svg?branch=master)](https://travis-ci.org/NaturesProphet/restart-rancher)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=alert_status)](https://sonarcloud.io/dashboard?id=restart-rancher)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=bugs)](https://sonarcloud.io/dashboard?id=restart-rancher)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=code_smells)](https://sonarcloud.io/dashboard?id=restart-rancher)[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=restart-rancher)[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=ncloc)](https://sonarcloud.io/dashboard?id=restart-rancher)[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=security_rating)](https://sonarcloud.io/dashboard?id=restart-rancher)[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=restart-rancher)[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=restart-rancher&metric=sqale_index)](https://sonarcloud.io/dashboard?id=restart-rancher)

# RESTART-RANCHER

This is a simple tool made for restart a service in Rancher using his api.

# Installation

you can add it to your node projects simple by typing:
```bash
npm install restart-rancher --save
```

# Configuration

Set or parse this environment variables to get it ready:
```bash
PROJECT_ID
SERVICE_ID
RANCHER_SECRET_KEY
RANCHER_ACCESS_KEY
RANCHER_URL
```

# Usage

just import it to the project at any part of the code!
```bash
const restart = require('restart-rancher');
```