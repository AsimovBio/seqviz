#!/usr/bin/env bash
script_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source ${script_dir}/common

# Left over from default Codespaces configuration - may not be needed.
# oryx build -p virtualenv_name=.venv --log-file /tmp/oryx-build.log --manifest-dir /tmp || echo 'Could not auto-build. Skipping.'

cd ${devcontainer_bin_dir}
./create-default-environment.sh
./configure-auth0.sh
./kernel-graphql-clone.sh
./kernel-graphql-run.sh
./install-yarn-packages.sh
