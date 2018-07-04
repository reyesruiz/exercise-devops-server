## Server

This project is a simple express app built with Node.js.

### Prerequisites

This project requires Node.js and Yarn to be installed in your environment.

* https://nodejs.org/en/
* https://yarnpkg.com/lang/en/

### Installation

After checking out the code repository, run the following command to install dependencies:

`yarn install`

### Configuration

The `.env` file contains the configuration settings for the server application.

#### PORT

The port on which the server listens for incoming HTTP requests.

#### CORS_WHITELIST

Comma-delimited list of origins that may submit HTTP requests.

### API

#### /

This is the only endpoint supported by the application. Method must be GET.

Response body is JSON that conforms to the following interface:

```
{
  message: !String
}
```

### Deployment

Deployment consists of the following steps in the location where the application is to server HTTP requests:

1. Get the code.
2. Install the production dependencies.
3. Configure environment variables.
4. Start the application.

- To get the code, clone the repository.
- To install the production dependencies, run the following command: `yarn install --production`.
- To configure the environment variables, create (or overwrite) the `.env.` file with the appropriate settings.
- To start the application, run the following command: `yarn start`.

### Logging

The application automatically logs incoming HTTP requests using the common Apache format.
