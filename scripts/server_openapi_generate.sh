rm -rf ./backend/src/generated/*
swagger-codegen generate -i ./settings/openapi.yml -l typescript-angular -o ./backend/src/generated
rm -rf ./backend/src/generated/.swagger-codegen
rm -rf ./backend/src/generated/api
rm ./backend/src/generated/.gitignore
rm ./backend/src/generated/.npmignore
rm ./backend/src/generated/.swagger-codegen-ignore
rm ./backend/src/generated/api.module.ts
rm ./backend/src/generated/configuration.ts
rm ./backend/src/generated/encoder.ts
rm ./backend/src/generated/git_push.sh
rm ./backend/src/generated/ng-package.json
rm ./backend/src/generated/variables.ts
rm ./backend/src/generated/index.ts
