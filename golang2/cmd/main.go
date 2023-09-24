package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"github.com/gin-gonic/gin"
	amqp "github.com/rabbitmq/amqp091-go"
)

func main() {
	eg := gin.Default()

	fmt.Println("GE")
	conn, err := amqp.Dial("amqp://guest:guest@rabbitmqcluster:5672/")
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println(err.Error())
		fmt.Println(err.Error())
	}
	defer conn.Close()

	fmt.Println("CONN IS CLOSED? : ", conn.IsClosed())

	ch, err := conn.Channel()
	if err != nil {
		fmt.Println(err.Error())
		fmt.Println(err.Error())
		fmt.Println(err.Error())
	}
	defer ch.Close()

	fmt.Println("CHANNEL IS CLOSED? : ", ch.IsClosed())

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

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	go func() {
		for {
			time.Sleep(time.Second)
			body := "CURRENT TIME IS : " + time.Now().Format("02일, 03:04:05")
			err = ch.PublishWithContext(ctx,
				"",     // exchange
				q.Name, // routing key
				false,  // mandatory
				false,  // immediate
				amqp.Publishing{
					ContentType: "text/plain",
					Body:        []byte(body),
				})
			if err != nil {
				fmt.Println(err.Error())
				fmt.Println(err.Error())
				fmt.Println(err.Error())
			}
			log.Printf(" [x] Sent %s\n", body)
		}
	}()

	eg.Run(":8080")
}
