"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("server.ts");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Import/Require Modules
// Modülleri içe aktarma işlemi gerçekleştiriliyor.
// Node.js uygulamalarında farklı paketleri kullanarak uygulamayı genişletiyoruz.
// Import Express (Express:  Node.js için esnek bir web uygulama çatısını inşa eder)
// Express, HTTP isteklerini(request) işleyecek ve istemciye(server) yanıt dönecektir.
// tsconfig.json ("module": "commonjs",)
// DİKKAT: index.js dosyasında `require("express")` kullanılır. (CommonJS modül yapısı)
// DİKKAT: index.ts dosyasında `import express from "express"` kullanılır. (ES Module yapısı)
// Express modülünü içe aktarıyoruz
const express = require("express");
// Import the path module (Dosya ve dizin yolları ile çalışmak için)
const path = require("path");
// Mongoose (MongoDB bağlantısı ve şema oluşturma için)
const mongoose = require("mongoose");
// dotenv (Çevresel değişkenleri .env dosyasından almayı sağlar)
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // .env dosyasındaki değişkenleri process.env içine yükler
// CSRF (Cross-Site Request Forgery saldırılarına karşı koruma sağlar)
const csrf = require("csurf");
const cookieParser = require("cookie-parser"); // CSRF için cookie-parser gerekli olabilir
// Helmet: Güvenlik odaklı HTTP başlıklarını ayarlar
// - XSS, Clickjacking(iframe içinde) gibi saldırılara karşı koruma sağlar.
const helmet = require("helmet");
// Winston: Log yönetimi için gelişmiş bir kütüphane
// - Hata bilgilerini, uyarıları ve bilgi loglarını yönetmek için kullanılır.
// - Morgan'a göre daha gelişmiş özelliklere sahiptir.
const winston = require("winston"); // Winston logger'ı ekle
// Express için Log
const morgan = require("morgan");
// Swagger UI (API dokümantasyonu oluşturmak için kullanılır)
// - swaggerJsDoc: OpenAPI dokümantasyonu oluşturur
// - swaggerUi: Swagger UI üzerinden API endpointlerini görselleştirmek için kullanılır
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// bodyParser Import
// bodyParser, Express uygulamalarında gelen HTTP isteklerinin gövdesini (body) ayrıştırmak için kullanılır.
// JSON, URL-encoded form verileri gibi farklı veri türlerini işleyebilir.
const bodyParser = require("body-parser");
// Create an Express.JS application
// Express uygulamasını başlatıyoruz.
// Express, web sunucusu olarak çalışacak olan temel framework'ümüzdür.
const app = express();
// Port
// Uygulamanın çalışacağı portu belirliyoruz.
// process.env.LOCALHOST_PORT değeri varsa onu kullan, yoksa varsayılan olarak 1111 portunu kullan.
// Çevresel değişkenler kullanılarak portun esnek olması sağlanır.
const PORT = process.env.LOCALHOST_PORT || 1111;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Winston logger yapılandırması
// Winston, hata kayıtlarını ve bilgi loglarını yönetmek için kullanılan güçlü bir loglama kütüphanesidir.
// Log seviyeleri: error, warn, info, http, verbose, debug, silly gibi farklı seviyelere sahiptir.
const logger = winston.createLogger({
    // Log seviyesini belirtiyoruz. Varsayılan olarak "info" seviyesinden başlayarak log kayıtları tutulacak.
    level: "info",
    // Log formatını JSON olarak ayarlıyoruz.
    // Bu sayede loglar yapılandırılmış bir biçimde saklanabilir ve işlenebilir.
    format: winston.format.json(),
    // Logları saklamak için kullanılan "transports" (taşıyıcılar) belirleniyor.
    transports: [
        // Hata loglarını (error seviyesindeki) ayrı bir dosyaya kaydetme
        new winston.transports.File({
            filename: "../logs/winston_error.log", // Hata loglarının kaydedileceği dosya
            level: "error", // Sadece "error" seviyesindeki loglar kaydedilecek
        }),
        // Tüm seviyelerdeki logları tek bir dosyaya kaydetme
        new winston.transports.File({
            filename: "../logs/winston_combined.log", // Tüm loglar buraya kaydedilecek
        }),
    ],
});
// Geliştirme ortamında (development) çalışırken logların konsola yazdırılması
if (process.env.NODE_ENV !== "production") {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(), // Daha okunabilir bir format kullanıyoruz
    }));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Morgan Aktifleştirmek
// Morgan'ı Express.js uygulamasında kullanalım.
//app.use(morgan('dev')); //dev: kısa ve renkli loglar göster
app.use(morgan("combined")); //dev: uzun ve renkli loglar göster
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mongo DB Bağlantısı
// username:  hamitmizrak
// password:  <password>
// mongodb+srv://hamitmizrak:<password>@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster
/*
mongosh

use mydb  // Veritabanınızı kullanın
db.getUsers()

VEYA

use admin
db.getUsers()

db.createUser({
  user: "blogAdmin",
  pwd: "BlogPass123",
  roles: [
    { role: "readWrite", db: "blogDB" } // blogDB üzerinde okuma ve yazma yetkisi
  ]
})
 */
// Localhostta MongoDB yüklüyse)
// Bu proje için docker-compose üzerinden 27017 porta sahip mongodb kurdum
//import dotenv from 'dotenv';
//dotenv.config();
// 1.YOL (LOCALHOST)
// .env dosyasındaki bilgilerden bağlantı URL'si oluşturuluyor
const _1_databaseLocalUrl = process.env.MONGO_USERNAME && process.env.MONGO_PASSWORD
    ? `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@127.0.0.1:${process.env.MONGO_PORT}/blogDB`
    : "mongodb://blogAdmin:BlogPass123@127.0.0.1:27017/blogDB";
// docker container run -d --name mongodb-container  -p 27000:27017 \
//              -e MONGO_INITDB_ROOT_USERNAME=root \
//              -e MONGO_INITDB_ROOT_PASSWORD=rootroot \
//              mongo
// 2.YOL (DOCKER IN LOCALHOST)
const _2_databaseDockerUrl = "mongodb://localhost:27000/blogDB";
// MongoDB Cloud (username,password)
// 3.YOL (CLOUD)
const _3_databaseCloudUrl = "mongodb+srv://hamitmizrak:<password>@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster";
// 4.YOL (.dotenv) Sadece
require("dotenv").config();
// Localhostta MongoDB yüklüyse)
const _4_databaseCloudUrlDotEnv = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster`;
// Local ve Cloud
const dataUrl = [
    _1_databaseLocalUrl,
    _2_databaseDockerUrl,
    _3_databaseCloudUrl,
    _4_databaseCloudUrlDotEnv,
];
// Connect
// 1.YOL (Eskidi)
//mongoose.connect(`${databaseCloudUrl}`, {useNewUrlParser:true, useUnifiedTopology:true}) // Eski MongoDB sürümleride
// 2.YOL
//mongoose.connect(`${dataUrl[1]}`).then().catch();
mongoose
    // .connect(`${databaseDockerUrl}`)
    .connect(`${dataUrl[1]}`) // databaseDockerUrl
    .then(() => {
    console.log("Mongo DB Başarıyla Yüklendi");
})
    .catch((err) => {
    console.error("Mongo DB Bağlantı Hatası", err);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EJS Template Engine Kullanımı
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
// Static Dosyalar (CSS,JS)
// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "../public")));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Middleware
// Middleware, Express uygulamalarında gelen HTTP isteklerini işlemek için kullanılan fonksiyonlardır.
// Middleware fonksiyonları, gelen isteği kontrol edebilir, işleyebilir ve yanıt verebilir.
// Middleware fonksiyonları, istek ve yanıt nesnelerine erişebilir ve isteği değiştirebilir.
// Middleware'leri dahil et
// app.use(bodyParser.urlencoded({ extended: true }));
// Express.js uygulamalarındaki middleware'dir. Gelen isteklerin body(gövde) kısmını analiz ederek, form verilerini ve JSON verilerine erişebilir hale getirir.
// urlencoded: Burada gelen istek gövdelerini URL'ye kodlanmıi form verilerini işlemeye yarar.
// extended: true: Gelen veriler içim querystring(qs) adlı kütaphane kullanılır. Ve bunun sayesinde karmaşık nesleride ayrıştırabilir.
// URL' kodlanmış (x-www-form-urlencoded) biçimde gönderir. Bu middleware bu tür verileri ayrıştruu ve request.body nesnesine ekler.
// http://localhost:1111?name=Hamit&surname=Mızrak
/*
 {
name:"Hamit",
surname:"Mızrak"
}
 */
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// Bu middleware gelen HTTP isteklerinin gövdesindeki JSON verilerini ayrıştırır.
// Sunucusunun JSON formatından gelen GET,POST,DELETE,PUT gibi istekelrin anlamasını sağlar.
// Veriler analiz edildikten sonra ,ayrışmaztırılmış içerik request.body nesneini ekler
app.use(bodyParser.json());
// app.use(cookieParser());
// HTTP isteklerinden gelen cooki'leri(çerez) ayrıştıran bir middleware'dir.
// Bu çerezler request.cookise adlı nesneye ekler.
app.use(cookieParser());
// CSRF Middleware
// CSRF(Cross-Site Request Forgery) saldırılarına karşı güvenliği sağlar.
// CSRF tokenlarını çerezler araçılığyla gönderilir.
const csrfProtection = csrf({ cookie: true });
// compression:
// npm install compression
// Gzip : Verilerin sıkıştırılmasıyla performansı artırmak
// ve ağ üzerinde sayfaya daha hızlı erişimi sağlar
// Tüm Http cevaplarını sıkıştırarak gönderilmesini sağlar.
// const compression = require('compression');
// app.use(compression);
// Rate Limiting (İstek Sınırlamasını):
// npm install express-rate-limit
// DDoS saldırlarına karşı korumayı sağlamak ve sistem performansını artırmak içindir.
// Gelen istekleri sınırlayabiliriz.
// Her 15 dakika içinde en fazla 100 istek atılabilinir.
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 100, // buy süre zarfında en fazla bu kadar isterk atabilirsiniz.
    message: "İstek sayısı fazla yapıldı, lütfen biraz sonra tekrar deneyiniz",
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Middleware ile CSRF Token oluşturma
app.use((request, response, next) => {
    response.locals.csrfToken = "test_csrf_token_static";
    //response.locals.csrfToken = request.csrfToken();
    next();
});
// Anasayfa (httpİ://localhost:1111/)
app.get("/", (request, response) => { }); // End of app.get
// Define a route handler for the GET / route
app.get("/blog", (request, response) => {
    // blog.ejs
    // response.send("blog");
    // response.render("blog", { message: "Bu blog sayfasııdır" });
    // CSRF Token EJS'e Gönderiyor
    response.render("blog", { csrfToken: response.locals.csrfToken });
}); // End of app.get
// Sunucu start
app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});
