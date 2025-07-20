# selyo-api-v2

# Development

## creating new 
```sh
MODULE=collection && \
nest g service $MODULE --no-spec && \
nest g controller $MODULE --no-spec && \
nest g interface $MODULE --no-spec && \
touch src/$MODULE/$MODULE.repository.ts
```