#! /bin/bash

set -e

ls

PATH_TO_FILES="sql_db/*"
for file in $PATH_TO_FILES; do
      if [[ ${file: -4} == ".sql" ]]
      then
        echo "All files with .sql extension"
        exit 0
      else
        echo "ERROR: ${file} is not .sql"
        exit 1
      fi
done;
