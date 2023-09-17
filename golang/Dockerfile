# FROM golang:latest

# WORKDIR /app

# COPY go.mod .
# COPY go.sum .

# RUN go mod download

# COPY . .

# RUN go build ./cmd/main.go

# EXPOSE 8080

# CMD [ "./main" ]



FROM golang:alpine3.18

WORKDIR /app

COPY ./go.mod ./
COPY ./go.sum ./

RUN go mod download

RUN go install -mod=mod github.com/githubnemo/CompileDaemon

COPY . .

ENTRYPOINT CompileDaemon -polling -log-prefix=false -build="go build -o main ./cmd" -command="./main" -directory="./"