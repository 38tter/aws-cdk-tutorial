#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkTutorialStack } from '../lib/aws-cdk-tutorial-stack';

const app = new cdk.App();
new AwsCdkTutorialStack(app, 'AwsCdkTutorialStack');
