# TikTok Link Anonymizer

This is a [React](https://reactjs.org) app (written in
[TypeScript](https://www.typescriptlang.org)) that converts a TikTok link
embedded with user tracking into one without tracking.

The form submits user input to an endpoint that is responsible for the actual
anonymization and returning that result to the React app. This endpoint is
fulfilled by an [AWS API Gateway](https://aws.amazon.com/api-gateway) endpoint
which invokes my own
[AWS Lambda function](https://aws.amazon.com/lambda) [*anonymize-tiktok-link-lambda*](https://github.com/danieltorrecillas/anonymize-tiktok-link-lambda).

## Form Input

The "Original" input accepts *only* a string matching regular expression
pattern `https://www.tiktok.com/.+`.

## Form Output

This app expects a "good" response from the anonymization endpoint to be one
that has an HTTP status code 200-299 with JSON structure:

```json
{
  "url": "https://www.tiktok.com/@thetalkingbook/video/7053083465318878511"
}
```

where **the value for `url` is what is populated in the "Anonymized" input.**

This app expects an error response from the anonymization endpoint to be one
that has an HTTP status code outside 200-299 with JSON structure:

```json
{
  "errorMessage": "Could not find a video for that link. Please double check and try again."
}
```

where **the value for `errorMessage` is what is populated in an error dialog.**

## Project Installation

This project uses [npm](https://www.npmjs.com) for dependency management. An
`install` at the root of the project gets you installed:

```text
$ npm install
```

This project also uses a `.env` file to define the URL for the anonymization
endpoint. There is some one-time setup:

1. Copy `.env.sample` and name it `.env`:

```text
$ cp .env.sample .env
```

2. In `.env`, edit the values for `REACT_APP_API_URL_PRD`
   and `REACT_APP_API_URL_DEV`
   to be the URLs for the anonymization endpoint.

## Project Testing

This project uses [jest](https://jestjs.io) and
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
for testing. A `test` at the root of the project runs tests:

```text
$ npm test
```

## Running the Project Locally

A `start` at the root of the project runs the app in development mode:

```text
$ npm start
```

Open http://localhost:3000 to view the app in the browser.

The page will automatically reload if you make changes to the code. You will see
any build errors or lint warnings in the console.

## Project Building

This project can be built in two different ways:

1. With environment variable `REACT_APP_STAGE` being set to `development`:

```text
$ npm run build:development
```

2. With environment variable `REACT_APP_STAGE` being set to `production`:

```text
$ npm run build:production
```

Both ways produce a production grade app to the `build` folder.

With the `REACT_APP_STAGE` environment variable being set, you can program
dynamic behavior.
For example:

```typescript
const apiUrl = process.env.REACT_APP_STAGE === 'production' ? process.env.REACT_APP_API_URL_PRD! : process.env.REACT_APP_API_URL_DEV!
```

See [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables)
for more information.

## Project Deployment

After a `npm run build:production` or `npm run build:development` command,
upload `/build` to your favorite web server. Done.

### Optional Deployment Script to AWS

There is a script to enable deployment of the app to an [AWS S3](https://aws.amazon.com/s3)
bucket followed by creating an
[invalidation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html)
of an associated [AWS Cloudfront distribution](https://aws.amazon.cloudfrcom/cloudfront).

#### AWS Prerequisites

1. You have two S3 buckets (one designated for development use and the other for
   production use).
2. You have two Cloudfront distributions (one that serves each S3 bucket)
3. You have access set up so that the AWS CLI can upload to each S3 bucket and
   create invalidations for each Cloudfront distribution.

#### Deployment Script Prerequisites

1. You have [bash](https://www.gnu.org/software/bash) or a `bash` compatible
   shell installed on your local machine.
2. You have
   the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html)
   [installed](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
   on your local machine.
3. You have the AWS
   CLI [configured](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
   for your AWS account.

#### Deployment Script First Time Setup

[`deploy.sample`](deploy.sample) is the above-mentioned script. There is some
one-time setup:

1. Copy `deploy.sample` and name it `deploy`:

```text
$ cp deploy.sample deploy
```

2. In `deploy`, edit
   - `prdS3Uri` to be the URI for your production S3 bucket
   - `devS3Uri` to be the URI for your development S3 bucket
   - `prdDistributionId` to be the ID for your production Cloudfront
   distribution
   - `devDistributionId` to be the ID for your development Cloudfront
   distribution

#### Run Deployment Script

In the root of the project:

```text
$ ./deploy <build> <dev|prd>
```

Invoke `./deploy` without arguments for more information.
