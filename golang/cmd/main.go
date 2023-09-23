package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
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

	eg.GET("/golang/hello", returnGetHandler)
	eg.POST("/golang/hello", returnPostHandler)

	db, _ = sql.Open("mysql", "root:1234@tcp(svc-mysql-member)/memberdb")

	eg.Run(":8080")
}

func returnGetHandler(c *gin.Context) {
	r, err1 := db.Query("SELECT id, age FROM member")

	if err1 != nil {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA ERROR : ", err1)
	} else {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA SUCCESS")
	}

	temp := struct {
		ID  string
		AGE string
	}{}
	temps := []struct {
		ID  string
		AGE string
	}{}

	for r.Next() {
		r.Scan(&temp.ID, &temp.AGE)
		temps = append(temps, temp)
	}
	fmt.Println("[GOLANG] DB DATAS ARE THIS : ", temps)

	data := struct {
		TEXT string `json:"java"`
	}{
		"DB Stored DATA - (ID, AGE) : " + temps[0].ID + ", " + temps[0].AGE,
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
	fmt.Println("RECIEVED DATA : ", recieveData)
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
