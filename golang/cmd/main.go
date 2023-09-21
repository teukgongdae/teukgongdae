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

func main() {
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	config.AllowMethods = []string{"GET", "POST", "DELETE", "PUT"}
	config.AllowHeaders = []string{"Content-type"}
	config.AllowCredentials = true

	eg := gin.Default()

	eg.Use(cors.New(config))

	eg.GET("/api/hello", returnGetHandler)
	eg.POST("/api/hello", returnPostHandler)

	db, _ := sql.Open("mysql", "root:tgd_member@tcp(svc-mysql-member)/memberdb")

	r, err1 := db.Query("SELECT id, age FROM member")

	if err1 != nil {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA ERROR : ", err1)
	} else {
		fmt.Println("[GOLANG] SELECTING DB INITIAL DATA SUCCESS")
	}

	temp := struct {
		ID  int
		AGE int
	}{}
	temps := []struct {
		ID  int
		AGE int
	}{}

	for r.Next() {
		r.Scan(&temp.ID, &temp.AGE)
		temps = append(temps, temp)
	}
	fmt.Println("[GOLANG] DB DATAS ARE THIS : ", temps)

	eg.Run(":8080")
}

func returnGetHandler(c *gin.Context) {
	data := struct {
		TEXT string `json:"java"`
	}{
		"spring",
	}
	fmt.Println(c.Request.RemoteAddr)
	fmt.Println(c.Request.RequestURI)
	fmt.Println(c.Request.URL)
	fmt.Println(c.Request.URL.Host)

	marshaledData, _ := json.Marshal(data)
	c.Writer.Write(marshaledData)
}

func returnPostHandler(c *gin.Context) {
	recieveData := struct {
		TEXT string `json:"ask"`
	}{}

	c.ShouldBindJSON(recieveData)

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
