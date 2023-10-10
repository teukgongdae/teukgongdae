package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

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

	eg.GET("/golang/spaces", spaceInfoHandler)
	eg.POST("/golang/hello", returnPostHandler)

	dbb, _ := sql.Open("mysql", "root:5678@tcp(svc-mysql-golang)/spacedb")
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

func spaceInfoHandler(c *gin.Context) {

	// INSERT INTO space (userName, title, tag1, tag2, tag3, price, isPeriodic, days, startTime, endTime) VALUES
	// ("최윤석", "스타벅스", "카페", "개인공간", "낮에만사용", 1234, 1, 127, 1800, 2400 ),
	r, err1 := db.Query("SELECT id, userName, title, tag1, tag2, tag3, price, isPeriodic, date, days, startTime, endTime, status FROM space")
	if err1 != nil {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA ERROR : ", err1)
	} else {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA SUCCESS")
	}
	defer r.Close()
	temp := struct {
		ID          int
		USER_NAME   string
		TITLE       string
		TAG1        string
		TAG2        string
		TAG3        string
		PRICE       int
		IS_PERIODIC int
		DATE        string
		DAYS        int
		START_TIME  int
		END_TIME    int
		STATUS      int
	}{}
	temps := []struct {
		ID          int
		USER_NAME   string
		TITLE       string
		TAG1        string
		TAG2        string
		TAG3        string
		PRICE       int
		IS_PERIODIC int
		DATE        string
		DAYS        int
		START_TIME  int
		END_TIME    int
		STATUS      int
	}{}

	for r.Next() {
		r.Scan(&temp.ID, &temp.USER_NAME, &temp.TITLE, &temp.TAG1, &temp.TAG2, &temp.TAG3, &temp.PRICE, &temp.IS_PERIODIC, &temp.DATE, &temp.DAYS, &temp.START_TIME, &temp.END_TIME, &temp.STATUS)
		temps = append(temps, temp)
	}
	fmt.Println("[GOLANG] DB DATAS ARE THIS : ", temps)

	marshaledData, _ := json.Marshal(temps)

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
