#!/bin/sh

mongoimport --db test --collection restaurants --drop --file dataset.json
