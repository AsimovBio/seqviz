#!/usr/bin/env bash
script_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source ${script_dir}/common

while getopts "gl" opt; do
    case "${opt}" in
        g)
            # Force the auth0 config to point to a GitHub preview environment
            ${devcontainer_bin_dir}/configure-auth0.sh -g
            ;;
        l)
            # Force the auth0 config to point to a local preview environment
            ${devcontainer_bin_dir}/configure-auth0.sh -l
            ;;
    esac
done
shift $((OPTIND-1))

cd ${project_dir}
yarn dev
