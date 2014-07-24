CleverStack Subscription Module
====================
[![NPM version](https://badge.fury.io/js/clever-subscription.png)](http://badge.fury.io/js/clever-subscription) [![GitHub version](https://badge.fury.io/gh/cleverstack%2Fclever-subscription.png)](http://badge.fury.io/gh/cleverstack%2Fclever-subscription) [![Dependency Status](https://david-dm.org/CleverStack/clever-subscription.png)](https://david-dm.org/CleverStack/clever-subscription) [![devDependency Status](https://david-dm.org/CleverStack/clever-subscription/dev-status.png)](https://david-dm.org/CleverStack/clever-subscription#info=devDependencies) [![Code Climate](https://codeclimate.com/github/CleverStack/clever-subscription.png)](https://codeclimate.com/github/CleverStack/clever-subscription) 
[![Build Status](https://secure.travis-ci.org/CleverStack/clever-subscription.png?branch=master)](https://travis-ci.org/CleverStack/clever-subscription) 
[![Coverage](https://codeclimate.com/github/CleverStack/clever-subscription/coverage.png)](https://codeclimate.com/github/CleverStack/clever-subscription) [![NPM downloads](http://img.shields.io/npm/dm/clever-subscription.png)](https://www.npmjs.org/package/clever-subscription) 
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) 

![CleverStack NodeJS ORM Module](http://cleverstack.github.io/assets/img/logos/node-seed-logo-clean.png "CleverStack NodeJS ORM Module")
<blockquote>
This CleverStack Module provides an easy path to providing Subscription based services (SaaS Style), it depends on the clever-auth and clever-roles module.
</blockquote>

## Documentation

See [cleverstack.io](http://cleverstack.io/documentation/#backend) for more detailed information on the Node seed or visit the [Getting Started Guide](http://cleverstack.io/getting-started/)

## Install 
1. From your project folder run `clever install clever-subscription`

2. In the config file for your desired environment (ie. backend/config/local.json), update the clever-subscription object with the details for your database.

3. From your project's `backend` folder, run `NODE_ENV=local grunt db`.
The database tables for your modules should now be installed and seeded with data!
