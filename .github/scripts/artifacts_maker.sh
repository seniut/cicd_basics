#! /bin/bash

set -e

echo "Prepare artifacts"
echo "Parameter ARTIFACTS_NAME = $1"

ls -la

mkdir ~/$1/

mv -v ./* ~/$1/

ls -la ~/$1/