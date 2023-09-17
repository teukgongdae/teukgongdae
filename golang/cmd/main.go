// DB Name : GATHER
// DB User : root
// DB Password : whtmdgus56

// Table Name : GATHER
// Table Column : id INT, userId INT, title VARCHAR(255), content VARCHAR(255), store VARCHAR(255), targetMoney INT, status INT

// INITIAL DB RECORD : id = 1, userId = 1000, title = "HELLO", content = "WORLD", store = "STORE", targetMoney = 10000, status = 200

// POST Request from GO to JAVA
// path : /hello
// content-type : application/json
// payload : {"message" : "Hello"}
// expect to response 200 status
package main

import (
	"database/sql"
	"fmt"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	fmt.Println("HELLO WORLD")

	db, _ := sql.Open("mysql", "root:whtmdgus56@tcp(mysql)/GATHER")

	_, err1 := db.Exec("INSERT INTO GATHER (id, userId, title, content, store, targetMoney, status) VALUES (1, 1000, 'HELLO', 'WORLD', 'STORE', 10000, 200)")

	if err1 != nil {
		fmt.Println("[GOLANG] INSERTING DB INITIAL DATA ERROR : ", err1)
	} else {
		fmt.Println("[GOLANG] INSERTING DB INITIAL DATA SUCCESS")
	}

	temp := struct {
		ID           int
		USERID       int
		TITLE        string
		CONTENT      string
		STORE        string
		TARGET_MONEY int
		STATUS       int
	}{}

	r, err2 := db.Query("SELECT * FROM GATHER")
	if err2 != nil {
		fmt.Println("[GOLANG] GETTING DB INITIAL DATA ERROR : ", err1)
	} else {
		fmt.Println("[GOLANG] GETTING DB INITIAL DATA SUCCESS")
	}

	for r.Next() {
		r.Scan(&temp.ID, &temp.USERID, &temp.TITLE, &temp.CONTENT, &temp.STORE, &temp.TARGET_MONEY, &temp.STATUS)
		fmt.Println("[GOLANG] INITIAL DATA IS THIS : ", temp)
	}

	// data := map[string]string{"message": "Hello"}

	// marshaledData, _ := json.Marshal(data)

	// response, _ := http.Post("http://java:8888/hello", "application/json", bytes.NewBuffer(marshaledData))

	// if response.StatusCode != 200 {
	// 	fmt.Println("[GOLANG] RESPONSE FROM JAVA IS NOT 200 : STATUS ", response.StatusCode)
	// } else {
	// 	fmt.Println("[GOLANG] RESPONSE FROM JAVA IS SUCCESSFUL")
	// }

	eg := gin.Default()
	eg.Run(":8080")
}
