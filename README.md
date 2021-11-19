# kernel-universal

Monorepo for Asimov Kernel universal web app

# Codespaces

- [Create a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-token) for use in these situations.
  \*\* Clearly name the access token (ex: `Codespaces`), enable "repo" as the scope, and set a reasonable time limit (e.g. 30 days). Unfortunately it is not possible to only enable read-only access for a personal access token.
- [Create a Codespaces user secret](https://docs.github.com/en/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces#adding-a-secret) called `GH_USER` with your GitHub username and `GH_TOKEN` with the personal access token you created in it. Ensure that you add `AsimovBio/kernel-universal` and `AsimovBio/kernel-graphql` to the list of authorized repositories.
- To start developing open a Terminal
  - If you are using a local IDE run `.devcontainer/bin/kernel-universal-run.sh`
  - If you are using VS Code for the Web run `.devcontainer/bin/kernel-universal-run.sh -g`
- Due to CORS policies that are added when you use port forwarding with GitHub Codespaces, you must make port 3000 public in order to load the application.
  - Go to the Ports tab in VS Code
  - Right click on port 3000 and select "Make Public"
  - Repeat for port 3001
