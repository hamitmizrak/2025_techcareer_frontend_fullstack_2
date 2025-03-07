# Tsc compiler
#npm install
#tsc

#node_modules, dist için
#npm run dev:setup

#Eğer node_modules kuruluysa
#npm run dev:start

# docker container run -d --name mongodb-container  -p 27000:27017 \
#             -e MONGO_INITDB_ROOT_USERNAME=root \
#             -e MONGO_INITDB_ROOT_PASSWORD=rootroot \
#             mongo

# Mongo_env (Install)
mongo_setup() {
    mongosh --version
    # Geriye Say
    ./bashscript_countdown.sh
    MONGO_LOCALHOST="Mongo Localhost veya 127.0.0.1"

    echo -e "\e[36m\n###### ${MONGO_LOCALHOST} ######  \e[0m"
    echo -e "\e[33mMongo Localhost oluşturulsun mu ? e/h\e[0m"
    read -p "" mongoSetup
    if [[ $mongoSetup == "e" || $mongoSetup == "E" ]]; then
        echo -e "\e[32mMongo Localhost Setup ...\e[0m"

        # Geriye Sayım
        ./bashscript_countdown.sh
        mongosh <<EOF

use blogDB
db.getUsers()

db.createUser({
user: "root",
pwd: "rootroot",
roles:[
  {
    role: "readWrite",db:"blogDB"
  }
]
})

db.getUsers()
db.posts.insertOne({
    header: "İlk Blog Yazım",
    content: "Bu benim ilk blog yazımın içeriğidir.",
    author: "Hamit Mızrak.",
    tags: "java,jsp",
})
EOF
        echo -e "\e[32m.Mongo Localhost Setup kurulumu tamamlandı!\e[0m"
    else
        echo -e "\e[31mMongo Localhost Setup kurulumu iptal edildi.\e[0m"
    fi
}

# Fonksiyonu çalıştır
mongo_setup