openapi-generator generate -g typescript-axios -i ./openapi.yml -o ./api/src/interfaces --additional-properties=modelPropertyNaming=camelCase,supportsES6=true,withInterfaces=true,typescriptThreePlus=true