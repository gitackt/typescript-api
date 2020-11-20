rm -rf ./microservices/tang/src/generated/*
cd microservices/tang && yarn run generate && cd ../../

rm -rf ./microservices/backend/src/generated/*
swagger-codegen generate -i ./settings/openapi.yml -l typescript-angular -o ./microservices/backend/src/generated
rm -rf ./microservices/backend/src/generated/.swagger-codegen
rm -rf ./microservices/backend/src/generated/api
rm ./microservices/backend/src/generated/.gitignore
rm ./microservices/backend/src/generated/.npmignore
rm ./microservices/backend/src/generated/.swagger-codegen-ignore
rm ./microservices/backend/src/generated/api.module.ts
rm ./microservices/backend/src/generated/configuration.ts
rm ./microservices/backend/src/generated/encoder.ts
rm ./microservices/backend/src/generated/git_push.sh
rm ./microservices/backend/src/generated/ng-package.json
rm ./microservices/backend/src/generated/variables.ts
rm ./microservices/backend/src/generated/index.ts
