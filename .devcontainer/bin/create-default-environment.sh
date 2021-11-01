#!/usr/bin/env bash
script_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source ${script_dir}/common

copy_local_example() {
    example_src="${project_dir}/${1}.example" 
    example_dest="${project_dir}/${1}"
    if [ ! -f "${example_dest}" ]; then
        cp "${example_src}" "${example_dest}"
    else
        echo "${example_dest} already exists, will not overwrite"
    fi
}

for example in packages/shell/.env.local
do
    copy_local_example $example
done
