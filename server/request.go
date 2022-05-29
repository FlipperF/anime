package request

import (
	"database/sql"
	"fmt"

	_ "github.com/julienschmidt/httprouter"
	_ "github.com/lib/pq"
)

type animeContentList struct {
	id                int
	anime_name        string
	content_type      int
	anime_type        string
	anime_year        string
	anime_preview_img string
}

var db *sql.DB
var err error

func request() {

	ConnectDB()

	rows, err := db.Query("select * from anime_list")
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	products := []animeContentList{}

	for rows.Next() {
		p := animeContentList{}
		err := rows.Scan(&p.id, &p.anime_name, &p.content_type, &p.anime_type, &p.anime_year, &p.anime_preview_img)
		if err != nil {
			fmt.Println(err)
			continue
		}
		products = append(products, p)
		fmt.Println(p.anime_name)
	}

	fmt.Println(products)

	fmt.Println("Работает...")
	var a string
	fmt.Scan(&a)

}

func ConnectDB() {
	var err error
	db, err = sql.Open("postgres", "user=postgres password=600600 dbname=postgres sslmode=disable")

	if err != nil {
		panic(err)
	}
	//defer db.Close()
}
