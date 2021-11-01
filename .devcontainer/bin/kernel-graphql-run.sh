#!/usr/bin/env bash
script_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source ${script_dir}/common

cd ${workspaces_dir}/kernel-graphql
TAG=dev docker compose up -d --build
