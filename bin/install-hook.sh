#!/bin/bash

# Extract the root directory of git
# Silently fails if git is not installed or file is not ran in a git repo
if ! root="$(git rev-parse --show-toplevel 2> /dev/null)"; then
  exit
fi

cp bin/pre-commit.hook "$root/.git/hooks/pre-commit"
