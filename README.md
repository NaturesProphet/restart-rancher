[![Build Status](https://travis-ci.org/NaturesProphet/restart-rancher.svg?branch=master)](https://travis-ci.org/NaturesProphet/restart-rancher)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

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