# JS Web Env
Experiments in a node environment.

## Development
1. [Install Docker](https://www.docker.com/community-edition#/download).
2. Run: `./start`.
3. Access server at [http://localhost:80](http://localhost:80).

## Notes

### Docker Image Construction

#### Layout

- `/site` - all files provided by this project should be mounted somewhere in this directory. Project specification files and shell files needed to run the project inside the Docker container are also located here.
  - `./public` - public assets and other compiled files that will be viewable by the public.
  - `./src` - source files that are compiled/processed before use elsewhere.

### nodemon `legacyWatch`

Even with Docker for Windows beta, nodemon requires the `legacyWatch` option to properly poll for changes in a mounted volume.

### Not Using `package.json` `scripts`

Making modifications to `package.json` is expensive in terms of build time via Docker. To save time adding/testing node-related scripts, these have been added to the `site` mounted directory and `/site/node_modules/.bin` has been added to the Docker image's `$PATH`.
