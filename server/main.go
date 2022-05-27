package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type AnimeTitleInfo struct {
	ID              string `json:"id"`
	AnimeName       string `json:"anime_name"`
	СontentType     string `json:"content_type"`
	AnimeYear       string `json:"anime_year"`
	AnimeType       string `json:"anime_type"`
	AnimePreriewImg string `json:"anime_preview_img"`
}

var titles []AnimeTitleInfo

func getAnimeAll(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	//params := mux.Vars(r)
	for _, item := range titles {
		json.NewEncoder(w).Encode(item)
	}
}

func getAnime(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	for _, item := range titles {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	/*json.NewEncoder(w).Encode(&AnimeTitleInfo{})*/
}

func main() {
	r := mux.NewRouter()
	titles = append(titles, AnimeTitleInfo{ID: "1", AnimeName: "Стальной алхимик: Братство", AnimeType: "Аниме", AnimeYear: "2009", AnimePreriewImg: "https://nyaa.shikimori.one/system/animes/original/6325.jpg?1633690005"})
	titles = append(titles, AnimeTitleInfo{ID: "2", AnimeName: "Наруто", AnimeType: "Аниме", AnimeYear: "2002", AnimePreriewImg: "https://nyaa.shikimori.one/system/animes/original/20.jpg?1633690219"})
	titles = append(titles, AnimeTitleInfo{ID: "3", AnimeName: "Жозе, тигр и рыба", AnimeType: "Фильм", AnimeYear: "2020", AnimePreriewImg: "https://moe.shikimori.one/system/animes/preview/40787.jpg"})
	r.HandleFunc("/anime", getAnimeAll).Methods("GET")
	r.HandleFunc("/anime/{id}", getAnime).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", r))
}
