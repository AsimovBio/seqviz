#!/usr/bin/env bash
script_dir="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
source ${script_dir}/common

# Default to local
url_shell="http:\/\/localhost:3000"
url_common="http:\/\/localhost:3001"
while getopts "gl" opt; do
    case "${opt}" in 
        g)
            url_shell="https:\/\/${CODESPACE_NAME}-3000.githubpreview.dev"
            url_common="https:\/\/${CODESPACE_NAME}-3001.githubpreview.dev"
            ;;
        l)
            # This is a no-op for now since local is the default
            ;;
    esac
done

update_config() {
    config_file="${project_dir}/${1}"
    if [ -f "${config_file}" ]; then
        # We only replace these keys if they are present
        for config_key in AUTH0_CLIENT_ID AUTH0_CLIENT_SECRET AUTH0_SECRET
        do
            sed -i "s/${config_key}=\$/${config_key}=${!config_key}/g" "${config_file}"
        done

        # Unfortunately we will need to stomp on this configuration everytime as the hostnames will 
        # change when a Codespace is restarted.
        sed -i "s/NEXT_PUBLIC_FEDERATED_URL_SHELL=.*\$/NEXT_PUBLIC_FEDERATED_URL_SHELL=${url_shell}/g" "${config_file}"
        sed -i "s/NEXT_PUBLIC_FEDERATED_URL_COMMON=.*\$/NEXT_PUBLIC_FEDERATED_URL_COMMON=${url_common}/g" "${config_file}"
    else
        echo "${config_file} does not exist, skipping update of Auth0 config"
    fi
}

for config in packages/shell/.env.local
do
    update_config $config
done
