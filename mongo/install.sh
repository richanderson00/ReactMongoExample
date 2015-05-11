#!/bin/sh
 
echo "Updating brew and installing mongo"

brew update
brew install mongodb

echo "Creating mongo database directory"

mkdir -p data
