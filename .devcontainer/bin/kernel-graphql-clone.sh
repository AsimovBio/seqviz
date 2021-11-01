#!/usr/bin/env bash
script_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source ${script_dir}/common

clone_repo() {
    cd "${workspaces_dir}"
    repo="${1}"
    if [ ! -d "${repo}" ]; then
        git clone "https://$GH_TOKEN@github.com/AsimovBio/${repo}"
    else
        echo "Already cloned ${repo}"
    fi
}

for repository in kernel-graphql
do
    clone_repo ${repository}
done
