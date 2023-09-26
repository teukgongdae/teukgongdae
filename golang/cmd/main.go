package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	amqp "github.com/rabbitmq/amqp091-go"
)

var db *sql.DB

func main() {

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	config.AllowMethods = []string{"GET", "POST", "DELETE", "PUT"}
	config.AllowHeaders = []string{"Content-type"}
	config.AllowCredentials = true
	eg := gin.Default()

	eg.Use(cors.New(config))

	eg.GET("/golang", returnGetHandler)
	eg.POST("/golang/hello", returnPostHandler)

	dbb, _ := sql.Open("mysql", "root:5678@tcp(svc-mysql-golang)/golangdb")
	db = dbb
	defer db.Close()

	if db.Ping() != nil {
		fmt.Println("PING FAIL")
		fmt.Println("PING FAIL")
		fmt.Println("PING FAIL")
	} else {
		fmt.Println("PING SUCCESS")
		fmt.Println("PING SUCCESS")
		fmt.Println("PING SUCCESS")
	}

	conn, err := amqp.Dial("amqp://guest:guest@rabbitmqcluster:5672/")
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println(err.Error())
		fmt.Println(err.Error())
	}
	defer conn.Close()

	fmt.Println("IS RABBITMQ CLOSE? : ", conn.IsClosed())
	fmt.Println("IS RABBITMQ CLOSE? : ", conn.IsClosed())
	fmt.Println("IS RABBITMQ CLOSE? : ", conn.IsClosed())

	ch, err := conn.Channel()
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println(err.Error())
		fmt.Println(err.Error())
	}
	defer ch.Close()

	q, err := ch.QueueDeclare(
		"hello", // name
		false,   // durable
		false,   // delete when unused
		false,   // exclusive
		false,   // no-wait
		nil,     // arguments
	)
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println(err.Error())
		fmt.Println(err.Error())
	}

	go func() {
		for {
			msgs, err := ch.Consume(
				q.Name, // queue
				"",     // consumer
				true,   // auto-ack
				false,  // exclusive
				false,  // no-local
				false,  // no-wait
				nil,    // args
			)
			if err != nil {
				fmt.Println(err.Error())
				fmt.Println(err.Error())
				fmt.Println(err.Error())
			}
			for d := range msgs {
				fmt.Printf("Received a message: %s", d.Body)
			}
		}
	}()

	eg.Run(":8080")
}

func returnGetHandler(c *gin.Context) {
	r, err1 := db.Query("SELECT id, name FROM golang")
	if err1 != nil {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA ERROR : ", err1)
	} else {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA SUCCESS")
	}
	defer r.Close()
	temp := struct {
		ID   int
		NAME string
	}{}
	temps := []struct {
		ID   int
		NAME string
	}{}

	for r.Next() {
		r.Scan(&temp.ID, &temp.NAME)
		temps = append(temps, temp)
	}
	fmt.Println("[GOLANG] DB DATAS ARE THIS : ", temps)

	data := struct {
		TEXT string `json:"java"`
	}{
		"GOLANGDB DATA - (ID, NAME) : (" + strconv.Itoa(temps[0].ID) + ", " + strconv.Itoa(temps[1].ID) + "), (" + temps[0].NAME + ", " + temps[1].NAME + ")",
	}

	marshaledData, _ := json.Marshal(data)

	c.Writer.Write(marshaledData)
}

func returnPostHandler(c *gin.Context) {
	recieveData := struct {
		TEXT string `json:"ask"`
	}{}
	fmt.Println("[GOLANG] RECIEVED FROM MEMBER!")
	c.ShouldBindJSON(&recieveData)

	fmt.Println("RECIEVED DATA : ", recieveData)

	if recieveData.TEXT == "HELLO" {
		sendData := struct {
			TEXT string `json:"answer"`
		}{
			"WORLD",
		}
		marshaledData, _ := json.Marshal(sendData)
		c.Writer.Write(marshaledData)
	} else {
		c.Writer.WriteHeader(http.StatusBadRequest)
	}
}
