# Techcareer Node.js 
[Github Linki](https://github.com/hamitmizrak/2025_techcareer_frontend_fullstack_2)

git clone https://github.com/hamitmizrak/2025_techcareer_frontend_fullstack_2
---

npm run dev:start
---

[Html5 Tutorials](https://www.w3schools.com/html/)
[Css3 Tutorials](https://www.w3schools.com/css/default.asp)
[JS Tutorials](https://www.w3schools.com/js/default.asp)
[JQuery Tutorials](https://www.w3schools.com/jquery/default.asp)
[TS Tutorials](https://www.w3schools.com/typescript/index.php)
[GIT Tutorials](https://www.w3schools.com/git/default.asp)

[Emmet IO](https://docs.emmet.io/cheat-sheet/)

---
[Mongo Database Cloud](https://www.mongodb.com/products/platform/cloud)
[Mongo Database Download](https://www.mongodb.com/try/download/community)
[Font Awesome](https://fontawesome.com/search?ic=free)
[Google Font](https://fonts.google.com/selection/embed)
[Bootstrap](https://getbootstrap.com/)
[Box Shadow Online](https://cssgenerator.pl/en/box-shadow-generator/)
[jQuery](https://jquery.com//)
[Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install//)
---


# Programming Install
[Visual Studio Code](https://code.visualstudio.com/download)
[Git](https://git-scm.com/downloads)
[Docker](https://www.docker.com/products/docker-desktop/)

[Mongo Database Download](https://www.mongodb.com/try/download/community)
[MongoDB Localhost Shell](https://www.mongodb.com/try/download/shell)
[Mongo Database Cloud](https://www.mongodb.com/products/platform/cloud)
---


## Script run (Typescript başlat)
```sh
 docker container run -d --name mongodb-container  -p 27000:27017 \
             -e MONGO_INITDB_ROOT_USERNAME=root \
             -e MONGO_INITDB_ROOT_PASSWORD=rootroot \
             mongo

rm -rf node_modules dist

node_modules, dist yoksa kurmak için
npm run dev:setup

Eğer node_modules kuruluysa
npm run dev:start

UNUTMA: Mongodb localhost veya docker mongodb veya cloud mongo açık olması gerekiyor
```
---

## Version
```sh
code .
git -v
node -v
npm -v
tsc --version
mongosh --version
```
---

## Git
```sh
git init
git add .
git commit -m "Frontend init"
git remote add origin GITHUB_URL
git push -u origin master

git branch
git pull
git pull origin master

git add .
git commit -m "branch öncesi"
git branch
git branch frontend
git checkout frontend

git clone https://github.com/hamitmizrak/2025_techcareer_frontend_fullstack_2.git
```
---

## Visual Studio Code (VS Code) Extensions
```sh
Auto Close Tag            => Jun Han
Auto Complete Tag         => Jun Han
Auto Rename Tag           => Jun Han
Better Comments           => Aaron Bond
Bootstrap5 Quick Snippets =>  Anbuselvan Rocky
Css Snippet               => Joy-yu
Dev Containers            => Microsoft
Docker                    => Microsoft
Docker Compsose            => Microsoft
ES7+ React/Redux/React-Native snippets => dsznajder
Git Graph                   => mhutchie
Live Server                => Ritwick Dey
Material Icon Theme        => Philipp Kief
Prettier - Code Formatter  => Prettier
Prettier ESLint            => Rebecca Vest
Rainbow Brackets           => MHammed Talhaouy
```
---

## Docker
```sh
Turn Windows features on or off => Hyper-V, Virtual Machine Paltform, Windows Hypervisor, Windows Subsystem for Linux
Microsoft Store => Search => wsl2 => Ubuntu 22.04.5 LTS kuralım.
Dikkat: Eğer Ubuntu 22.04.5 kuramazsanız, Turn Windows features bilgileri kapat sonra tekrar aç ve bilgisayarın restart 
```
---


## Mongo Localhost
```sh
port:27017
```
---


## Teknoloji İsimleri
```sh
HTML5
CSS3
BOOTSTRAP5
JS
TYPESCRIPT
EJS
NODE JS
MONGODB
EXPRESS JS
GIT/GITHUB
DOCKER
REST API
NGINX
CI/CD
```
---

## Teknoloji İçerikleri
```sh
nodemon
mongoose
body-parser
compression
cookie-parser
cors
dotenv
ejs
express
express-rate-limit
helmet
mongodb
mongoose
morgan
swagger-jsdoc
swagger-ui-express
typescript
winston
```
---

## VSCode (settings.json)
```sh
{
    "workbench.colorTheme": "Default Dark+",
    "editor.mouseWheelZoom": true,
    "editor.fontSize": 16,
    "explorer.confirmDragAndDrop": false,
    "git.enableSmartCommit": true,
    "explorer.confirmDelete": false,
    "git.confirmSync": false,
    "workbench.iconTheme": "material-icon-theme",
    "files.autoSave": "afterDelay",
    "editor.cursorStyle": "line-thin",
    "terminal.integrated.mouseWheelZoom": true,
    "emmet.includeLanguages": {
        "javascript": "html",
        "javascriptreact": "html",
        "typescriptreact": "html"
    },
    "emmet.triggerExpansionOnTab": true,
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": true
    },
```
---

## NPM
```sh
npm init
npm init -y

npm root
npm root -g
```
---

## NPM INIT
```sh
npm init
package name:
1-) herşeyi küçük harfle yaz
2-) boşluk kullanma bunun yerine (- veya _ kullan)
3-) Türkçe karakterlerden (üğşçö) kullanma

package name: offline_node_blog
version: v1.0.0 (Semantic version)
description: Html5,css3,bootstrap5, js, es, nodejs, jquery, express,nodemon
entry point: index.js
test command: start
git repository: https://github.com/hamitmizrak/2025_techcareer_frontend_fullstack_2.git
keywords: Html5,css3,bootstrap5, js, es, ejs, nodejs, nodemon, jquery, express
author: Yüksek Bilgisayar Mühendisi Hamit Mızrak
license: ISC
Is this OK? yes
```
---

## NPM INIT -Y
```sh
npm init -y
Default
{
  "name": "2025_techcareer_frontend_fullstack_2",
  "version": "1.0.0",
  "description": "[GitHub Address](https://github.com/hamitmizrak/2025_techcareer_frontend_fullstack_2.git)\r [Mongo Database]()\r ---",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
---

## package.json(Son Hali)
```sh
{
  "name": "2025_techcareer_frontend_fullstack_2",
  "version": "1.0.0",
  "description": "[Github Linki](https://github.com/hamitmizrak/2025_techcareer_frontend_fullstack_2)\r ---",
  "main": "./dist/server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node  ./dist/server.js",
    "server:start": "lite-server",
    "build_watch": "tsc -w --pretty",
    "nodemon_app_watch": "nodemon --watch src --watch dist ./dist/server.js",
    "dev:setup": "npm install && tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\"",
    "dev:start": "tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\""
  },
  "keywords": [
    "Html5, Css3, Js, NodeJS, ES5+,TS, Bootstrap5, EJS"
  ],
  "author": "MSc Computer Enginner Hamit Mızrak",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.3",
    "compression": "^1.7.5",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "csurf": "^1.10.0",
    "ejs": "^3.1.10",
    "express": "^4.21.2",
    "express-rate-limit": "^7.5.0",
    "helmet": "^8.0.0",
    "mongodb": "^6.13.0",
    "mongoose": "^8.10.0",
    "morgan": "^1.10.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1",
    "winston": "^3.17.0"
  },
  "devDependencies": {
    "@types/node": "^22.13.1",
    "concurrently": "^9.1.2",
    "cross-env": "^7.0.3",
    "dotenv": "^16.4.7",
    "eslint": "^9.20.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.3",
    "lite-server": "^2.6.1",
    "nodemon": "^3.1.9",
    "npm-run-all": "^4.1.5",
    "prettier": "^3.4.2",
    "ts-node": "^10.9.2",
    "typescript": "^5.7.3"
  }
}
```
---

## npm delete
```sh
rm -rf node_modules
ls -al
npm install
```
---

## NPM Sıklıkla Kullanılan Komutlar-1
```sh
npm search  express
npm install express
npm install express@4.16.1
npm install express            # Local
npm install express --save     # Local
npm install express --save-dev # dev-dependencies
npm install express -D         # dev-dependencies
npm install express -g         # Global

npm install
npm i

npm update                # Bütün dosyaları güncelleme için.
npm update express        # Sadece verdiğimzi dosyaları güncelleme yapıyor.

npm uninstall express
npm uninstall express@4.16.1
```
---

## NPM Sıklıkla Kullanılan Komutlar-2
```sh
npm list
npm ls
npm list -g              # Globalde ben ne paketleri yüklemişim
npm list -g --depth=0    # Globalde sadece ana branch'e yüklediklerimi bana göster

npm root                 # Local projemizdeli node_modules kütüphanesini göstersin
npm root -g              # GLocal projemizdeli node_modules kütüphanesini göstersin
Global node_modules: C:\Users\Hamit-Mizrak\AppData\Roaming\npm\node_modules
```
---

## NPM Sıklıkla Kullanılan Komutlar-3
```sh
npm update              # package.json içindeki dosyalardaki paketleri günceller
npm outdated            # Projede eskiyen veya güncellenmesi gereken paketleride gösterir
npm audit               # Bağımlılıkların güvenlik analizleri rapor eder
npm audit fix           # Belirlenen güvenlik açıklarını otomatik olarak düzeltir.
npm audit fix --force   # Belirlenen güvenlik açıklarını otomatik olarak düzeltir.
npm dedupe              # Bağımlılıkların tekrarlanan kopyalarını temizler.
npm rebuild             # Tüm bağımlıkları yeniden derleme

npm info <paket-adi>    #  Belirli paketin detaylı bilgileri gösterir
npm cache clean --force # npm önbelleğini temizler
npm cache verify        # Cache dorğulaması
npm config list         # (Npm yapılandırılmalarını görmek içindir)
npm config set <key> <value> #  npm config set registry https://registry.npmjs.org/  )

# https://www.npmjs.com/
npm login                # npm hesabınıza giriş içindir)
npm pack                 # Node.js paketini .tgz sıkıştırma formatında ekliyor
npm publish              # ilgili pkaeti npm gönder
```
---

## Npm Package Install (Local --save)
```sh
npm list
npm root
npm list -g
npm root -g

# https://www.npmjs.com/
npm list
npm i body-parser compression cookie-parser cors csurf  ejs  express express-rate-limit helmet mongodb mongoose morgan  swagger-jsdoc swagger-ui-express  winston --save
```
---

## Npm Package Install (Local --save-dev)
```sh
npm list
npm root
npm list -g
npm root -g

# https://www.npmjs.com/
npm i nodemon typescript -D
npm i nodemon typescript --save-dev
npm install lite-server  --save-dev
npm install  @types/node dotenv concurrently  ts-node --save-dev
npm install  eslint eslint-config-prettier npm-run-all prettier --save-dev
npm install  eslint-plugin-prettier  npm-run-all --save-dev

npm install
npm dedupe  # Bağımlılıkların tekrarlanan kopyalarını temizler.
npm list
```
---

## Npm Package Install (Global)
```sh
npm list
npm root

npm list -g
npm root -g

npm i body-parser compression cors csurf cookie-parser ejs  express express-rate-limit helmet mongodb morgan mongoose swagger-jsdoc swagger-ui-express prettier ts-node   winston lite-server  @types/node dotenv concurrently eslint eslint-config-prettier eslint-plugin-prettier npm-run-all -g
npm dedupe  # Bağımlılıkların tekrarlanan kopyalarını temizler.
npm list -g
```
---

## Typescript kurulum
```sh
npm install typescript -g          # global
npm install typescript --save-dev  # local 
npm install typescript -D          # local Dev-dependency

tsconfig dosyası için aşağıdaki komutu çalıştır:
tsc --init --locale tr
tsc --init

tsc
tsc -w (Sistem kendi compiler yapıyor yazdıklarımı kendi ekliyor.)
```
---

## Typescript (tsconfig.json )
```sh
/* Bu dosya hakkında daha fazla bilgi için https://aka.ms/tsconfig sayfasını ziyaret edin */
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
---


## Typescript (tsconfig.json )
```sh
// Aşağıda TypeScript yapılandırma dosyanız (`tsconfig.json`) içindeki tüm seçenekleri ayrıntılı açıklamalar
// Bu yapılandırma dosyası, TypeScript projelerinde genellikle güvenilir bir başlangıç noktasıdır. Eğer daha özel ihtiyaçlarınız varsa, ek ayarlamalar yapılabilir.
{
  "compilerOptions": {
    // Derlenecek JavaScript sürümünü belirler. ES6 olarak ayarlandı.
    "target": "ES6", 

    // Modül sistemini belirler. CommonJS olarak ayarlandı. (Node.js projeleri için yaygın kullanılır.)
    "module": "commonjs",

    // Kaynak dosyaların bulunduğu dizini belirtir. (TypeScript kaynak kodları burada olacak.)
    "rootDir": "./src",

    // Derlenmiş JavaScript dosyalarının çıkış dizinini belirtir. (Derleme sonucu buraya yazılacak.)
    "outDir": "./dist",

    // TypeScript'in daha sıkı tip kontrolleri yapmasını sağlar. (Önerilir.)
    "strict": true,

    // ES modülleri ile CommonJS modüllerinin birlikte çalışmasını sağlar. (Önemli: import/export kullanımını kolaylaştırır.)
    "esModuleInterop": true,

    // Kütüphane dosyalarının kontrol edilmesini atlar. (Derleme süresini hızlandırır.)
    "skipLibCheck": true,

    // Dosya isimlerinin büyük/küçük harf tutarlılığını zorunlu kılar. (Önerilir: Farklı işletim sistemlerinde hata önler.)
    "forceConsistentCasingInFileNames": true
  },
  
  // Proje içine dahil edilecek dosya ve klasörleri belirler. Burada `src` klasörü içindeki tüm dosyalar derlenecek.
  "include": ["src/**/*"],

  // Derleme dışında tutulacak dosya ve klasörleri belirler. `node_modules` hariç tutulmuş.
  "exclude": ["node_modules"]
}
```
---



## script => package.json typescript
```sh
  "scripts": {
    "build_watch": "tsc -w --pretty",
  },
```
---

## Nodemon kurulum
```sh
npm install  nodemon -g
npm install  nodemon -D
npm install  nodemon --save-dev
```
---

## nodemon.json (Nodemon.json)
```sh
{
  "watch": ["src", "dist"],
  "ext": "ts,js",
  "exec": "node ./dist/server.js"
}
```
---

## script => package.json nodemon-1
```sh
  "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
  },
```
---

## package.json içinden Script yazmak-2
```sh
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node  ./dist/server.js",
    "server:start": "lite-server",
    "build_watch": "tsc -w --pretty",
    "nodemon_app_watch": "nodemon --watch src --watch dist ./dist/server.js",
    "dev:setup": "npm install && tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\"",
    "dev:start": "tsc && concurrently -k \"tsc -w --pretty\" \"nodemon ./dist/server.js\""
  },
```
---

## package.json içinden Script yazmak-3
```sh
  "scripts": {
    "start_app": "ts-node src/app.ts",
    "start_index": "ts-node src/app.ts",
    "dev_app": "nodemon src/app.ts",
    "dev_index": "nodemon src/index.ts",
    "build": "tsc",
    "build_watch": "tsc -w",
    "start_app:app": "node dist/app.js",
    "start_index:index": "node dist/index.js",
    "nodemon_app": "nodemon ./dist/app.js",
    "nodemon_app_watch": "nodemon --watch src --watch dist ./dist/app.js",
    "nodemon_index": "nodemon ./dist/index.js",
    "nodemon_index_watch": "nodemon --watch src --watch dist ./dist/index.js",
    "asenkron_app": "concurrently \"npm run build_watch\" \"npm run nodemon_app_watch\"",
    "asenkron_index": "concurrently \"npm run build_watch\" \"npm run nodemon_index_watch\"",
    "senkron:app": "npm-run-all --parallel  build_watch nodemon_app_watch",
    "senkron:index": "npm-run-all --parallel  build_watch nodemon_index_watch"
  }
```
---


## Json-Server
```sh

```
---

## Babel
```sh

```
---


## .env
```sh
; PORT
LOCALHOST_PORT=1111

; Local
MONGO_USERNAME=root
MONGO_PASSWORD=rootroot
MONGO_PORT=27017
MONGO_LOCALHOST=127.0.0.1
DATABASE_NAME=blogDB


; Cloud
MONGO_CLOUD_USERNAME=hamitmizrak
MONGO_CLOUD_PASSWORD=
MONGO_CLOUD_PORT=27017

; Docker
MONGO_DOCKER_USERNAME=hamitmizrak
MONGO_DOCKER_PASSWORD=
MONGO_DOCKER_PORT=27000
```
---

## .env
```sh

```
---

## **`.env` Dosyası Nedir?**
`.env` dosyası, **çevresel değişkenleri (environment variables) saklamak için kullanılan** bir dosyadır. Bu dosya, **gizli bilgiler**, **API anahtarları**, **veritabanı bağlantı bilgileri**, **uygulama yapılandırmaları** gibi duyarlı verileri saklamak için yaygın olarak kullanılır.

### **Neden `.env` Kullanılır?**
1. **Güvenlik** → Duyarlı bilgileri doğrudan kod içine yazmaktan kaçınırsınız.
2. **Taşınabilirlik** → Farklı ortamlar (geliştirme, test, üretim) için ayrı `.env` dosyaları oluşturabilirsiniz.
3. **Kolay Yönetim** → Değişkenleri merkezi bir yerde tanımlamak, proje yönetimini kolaylaştırır.
4. **Sürüm Kontrolü** → `.env` dosyası genellikle `.gitignore` içine eklenir, böylece hassas bilgiler GitHub gibi platformlara yüklenmez.

---

## **`.env` Dosyası Nasıl Çalışır?**
`.env` dosyası **anahtar-değer (key-value) çiftleri** formatında yazılır:
```
ANAHTAR=DEĞER
```
Dosya içinde **yorum satırı** eklemek için `#` karakteri kullanılır.

### **Örnek `.env` Dosyası:**
```ini
# Sunucu yapılandırmaları
PORT=5000

# Veritabanı bilgileri
DB_HOST=localhost
DB_USER=root
DB_PASS=supersecretpassword

# API anahtarları
API_KEY=12345abcdef

# Debug modu
DEBUG=true
```

---

## **`.env` Dosyası Kullanımı**
`.env` dosyasındaki değişkenler **uygulama içinde** okunarak kullanılabilir. Aşağıda farklı dillerde `.env` dosyasını nasıl kullanacağınızı gösteriyorum.

---

### **1️⃣ Node.js ile `.env` Kullanımı**
Node.js ortamında `.env` dosyasını okumak için **dotenv** paketi kullanılır.

#### **Kurulum:**
```sh
npm install dotenv
```

#### **Kullanımı (`server.js`):**
```javascript
// dotenv paketini yükle
require('dotenv').config();

// .env dosyasından değişkenleri oku
const port = process.env.PORT || 3000;
const dbHost = process.env.DB_HOST;
const apiKey = process.env.API_KEY;

console.log(`Sunucu ${port} portunda çalışıyor...`);
console.log(`Veritabanı: ${dbHost}`);
console.log(`API Anahtarı: ${apiKey}`);
```

📌 **Not:** `process.env.PORT`, `.env` dosyasında tanımlanan `PORT` değişkenini alır.

---

### **2️⃣ Python ile `.env` Kullanımı**
Python’da `.env` dosyasını okumak için **dotenv** paketi kullanılır.

#### **Kurulum:**
```sh
pip install python-dotenv
```

#### **Kullanımı (`app.py`):**
```python
from dotenv import load_dotenv
import os

# .env dosyasını yükle
load_dotenv()

# Değişkenleri oku
port = os.getenv("PORT", 8000)
db_user = os.getenv("DB_USER")
api_key = os.getenv("API_KEY")

print(f"Port: {port}")
print(f"Veritabanı Kullanıcısı: {db_user}")
print(f"API Anahtarı: {api_key}")
```

---

### **3️⃣ PHP ile `.env` Kullanımı**
PHP’de `.env` dosyalarını okumak için **vlucas/phpdotenv** paketi kullanılır.

#### **Kurulum:**
```sh
composer require vlucas/phpdotenv
```

#### **Kullanımı (`config.php`):**
```php
<?php
require 'vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

echo "Port: " . $_ENV['PORT'] . "<br>";
echo "Veritabanı Kullanıcısı: " . $_ENV['DB_USER'];
?>
```

---

## **`.env` Dosyası İçin En İyi Uygulamalar**
✅ **`.gitignore` Dosyasına `.env` Ekle:**  
Hassas bilgileri depoya göndermemek için `.gitignore` içine şu satırı ekleyin:
```
.env
```

✅ **`.env.example` Dosyası Kullanın:**  
Takım arkadaşlarınıza `.env` formatını göstermek için `.env.example` dosyası oluşturabilirsiniz:
```
PORT=5000
DB_HOST=your_db_host
DB_USER=your_db_user
DB_PASS=your_db_password
```

✅ **Çoklu Ortam İçin Ayrı `.env` Dosyaları Kullanın:**  
- `.env.development` → Geliştirme ortamı  
- `.env.production` → Üretim ortamı  
- `.env.test` → Test ortamı  

Örneğin, **Node.js** projelerinde `dotenv` paketi ile ortam belirtebilirsiniz:
```javascript
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
```

✅ **Şifreleri `.env` Yerine Gizli Yönetim Sistemlerinde Saklayın:**  
AWS Secrets Manager, HashiCorp Vault veya Kubernetes Secrets gibi araçlar daha güvenlidir.

---

## **Sonuç**
- **`.env`**, **çevresel değişkenleri** saklamak için kullanılan bir dosyadır.
- **API anahtarları, veritabanı bilgileri, port numaraları gibi hassas veriler burada saklanır.**
- **Güvenlik açısından, `.env` dosyası kesinlikle `.gitignore` içine eklenmelidir.**
- **Node.js, Python, PHP gibi birçok dil `.env` dosyasını destekler.**
- **Farklı ortamlar (geliştirme, test, üretim) için ayrı `.env` dosyaları oluşturabilirsiniz.**

🚀 **Özet:** `.env` kullanımı, **uygulamalarınızın yapılandırmasını yönetmeyi daha güvenli ve esnek hale getirir!**


## nodemon.json
```sh
{
  "watch": ["src", "dist"],
  "ext": "ts,js",
  "exec": "node ./dist/server.js"
}
```
---

## nodemon.json (Tanım)
```sh
Bu JSON dosyası, genellikle **Nodemon** konfigürasyonu olarak kullanılır (`nodemon.json`). Nodemon, Node.js uygulamalarında dosya değişikliklerini izleyerek otomatik yeniden başlatma sağlayan bir araçtır.

Aşağıda tüm seçenekleri detaylı açıklamalarıyla birlikte inceleyelim:

```json
{
  // Nodemon'un izleyeceği dizinleri belirtir.
  // Burada `src` ve `dist` klasörleri izlenmektedir.
  "watch": ["src", "dist"],

  // Nodemon'un izleyeceği dosya uzantılarını belirler.
  // Burada `.ts` (TypeScript) ve `.js` (JavaScript) dosyaları izlenmektedir.
  "ext": "ts,js",

  // Nodemon'un çalıştıracağı komutu belirtir.
  // Burada `node ./dist/server.js` komutu çalıştırılıyor.
  // Yani TypeScript dosyaları derlendikten sonra, `dist` klasöründeki `server.js` çalıştırılacak.
  "exec": "node ./dist/server.js"
}
```

### Açıklamalar:
- **"watch"**: Belirtilen klasörlerde herhangi bir dosya değişikliği olduğunda Nodemon otomatik olarak süreci yeniden başlatır.
- **"ext"**: Hangi dosya uzantılarının izleneceğini belirler. Burada hem TypeScript (`.ts`) hem de JavaScript (`.js`) dosyaları izlenmektedir.
- **"exec"**: Çalıştırılacak komutu tanımlar. TypeScript projelerinde, `.ts` dosyaları `dist` klasörüne derlendiği için, çalıştırılacak `server.js` dosyası `dist` klasöründe belirtilmiştir.

### Kullanım Senaryosu:
- TypeScript kodlarını yazıp kaydettiğinizde, Nodemon `src` klasöründe değişiklikleri algılar.
- TypeScript derleyicisi (`tsc`) kodları otomatik olarak `dist` klasörüne çevirir.
- Nodemon, `dist/server.js` dosyasını yeniden başlatarak değişikliklerin etkili olmasını sağlar.

Bu konfigürasyon, özellikle **Node.js + TypeScript** projelerinde geliştirme sürecini hızlandırmak için oldukça kullanışlıdır.


## bs-config.json
```sh
{
  "port": 3000,
  "files": ["./*.html", "./*.css", "./*.js"],
  "server": {
    "baseDir": "./",
    "index": "index.html"
  }
}
```
---

## bs-config.json
```sh
{
  // Tarayıcının çalışacağı port numarasını belirler.
  "port": 3000,

  // İzlenecek dosyaları belirtir. Dosyalarda değişiklik olduğunda tarayıcı otomatik olarak yenilenir.
  "files": ["./*.html", "./*.css", "./*.js"],

  "server": {
    // Yerel geliştirme sunucusunun temel dizinini belirler.
    "baseDir": "./",

    // Tarayıcı açıldığında varsayılan olarak yüklenecek dosyayı belirler.
    "index": "index.html"
  }
}
```
---

## bs-config.json (Detaylı Açıkla)
```sh

```
---
### **`bs-config.json` Nedir?**
`bs-config.json`, **BrowserSync** için kullanılan bir yapılandırma (konfigürasyon) dosyasıdır. **BrowserSync**, web geliştirme sırasında dosya değişikliklerini izleyen, tarayıcıları otomatik olarak yenileyen ve cihazlar arasında senkronizasyon sağlayan bir araçtır. 

Bu dosya, **BrowserSync'in nasıl çalışacağını belirlemek için** kullanılır ve komut satırında ekstra parametreler yazmak yerine ayarları JSON formatında saklamaya olanak tanır.

---

### **Detaylı Açıklamalar:**
```json
{
  // Tarayıcının çalışacağı port numarasını belirler.
  "port": 3000,

  // İzlenecek dosyaları belirtir. Dosyalarda değişiklik olduğunda tarayıcı otomatik olarak yenilenir.
  "files": ["./*.html", "./*.css", "./*.js"],

  "server": {
    // Yerel geliştirme sunucusunun temel dizinini belirler.
    "baseDir": "./",

    // Tarayıcı açıldığında varsayılan olarak yüklenecek dosyayı belirler.
    "index": "index.html"
  }
}
```

---

### **Parametrelerin Detaylı Açıklamaları:**
1. **`"port": 3000`**  
   - BrowserSync sunucusunun hangi portta çalışacağını belirler.  
   - **Örneğin:** `localhost:3000` adresine girerek projeye erişebilirsiniz.

2. **`"files": ["./*.html", "./*.css", "./*.js"]`**  
   - Bu dosyalar **izlenir** ve değişiklik yapıldığında tarayıcı otomatik olarak yenilenir.
   - Burada **tüm HTML, CSS ve JavaScript dosyaları** takip edilmektedir.
   - **Örnek:** 
     - `index.html` veya `about.html` güncellendiğinde tarayıcı yenilenir.
     - `style.css` veya `main.css` değiştirildiğinde tarayıcı yenilenir.
     - `app.js` veya `script.js` değiştirildiğinde tarayıcı yenilenir.

3. **`"server": { "baseDir": "./" }`**  
   - **Hangi dizinden dosyaların sunulacağını belirler.**  
   - `./` dizini, **projenin ana dizini** olduğu için buradaki dosyalar tarayıcıya sunulur.
   - **Örneğin:** `index.html` dosyanız `./` kök dizininde yer alıyorsa, `localhost:3000` adresine giderek direkt olarak açabilirsiniz.

4. **`"index": "index.html"`**  
   - **Tarayıcı açıldığında otomatik olarak yüklenecek varsayılan dosyadır.**  
   - **Örneğin:** `index.html` olarak ayarlandıysa, `localhost:3000` adresine girildiğinde `index.html` otomatik olarak yüklenir.

---

### **Kullanım Senaryosu:**
1. **Otomatik Tarayıcı Yenileme (Live Reloading)**
   - HTML, CSS veya JavaScript dosyalarında değişiklik yaptığınızda, tarayıcı otomatik olarak yenilenir.
   - Sayfayı manuel olarak yenilemek zorunda kalmazsınız.

2. **Yerel Geliştirme Sunucusu**
   - Apache veya Node.js gibi ek bir sunucu kurmaya gerek kalmadan, **hızlı bir geliştirme ortamı oluşturur**.

3. **Mobil ve Çoklu Cihaz Senkronizasyonu**
   - Eğer farklı cihazlardan test yapıyorsanız, **bir cihazdaki kaydırma hareketi, tıklamalar ve sayfa değişiklikleri diğer cihazlarda da senkronize edilir**.

---

### **Nasıl Kullanılır?**
1. **BrowserSync’i yükleyin** (eğer yüklenmediyse):
   ```sh
   npm install -g browser-sync
   ```

2. **BrowserSync’i `bs-config.json` dosyası ile başlatın:**
   ```sh
   browser-sync start --config bs-config.json
   ```

3. **Tarayıcınızda şu adrese gidin:**  
   ```
   http://localhost:3000
   ```
   ve projenizi inceleyin.

---

### **Sonuç:**
**`bs-config.json` dosyası**, **HTML, CSS ve JavaScript projelerinde canlı yenileme (live reload) yaparak geliştirme sürecini hızlandıran bir yapılandırmadır.**  
Özellikle **statik web projeleri** için **hızlı önizleme** ve **otomatik tarayıcı yenileme** gibi avantajlar sunar. 🚀


---
---
---



## Node JS Nedir ?
```sh
NodeJS :
- Chrome V8 Javascript motorunu kullanan, açık kaynak kodlu,
- hızlı ve etkili bir platformdur.
- Normalde javascript web-side olarak çalışıyordu ancak node js ile
- Server Side(Server[Sunucu]) tarafından çalışan bir Javascript framework oldu.
- Ryan Dahl ve Isaac Z. Schluter tarafından 2009 yılında geliştirmeye başlamış.
```
---

## Node JS Özellikleri
```sh
Javascript betik dilimiz senkron(Aynı anda sadece bir iş yapan) çalışır.

Event-Driven (Olay odaklıdır),Non-Blocking I/O Modeli (Engelsiz Input(Girdi), Output(Çıktı)):
- Bu özellikler amaçı JS özelliğinden olan senkron özelliğini, asenkron(Aynı anda birden fazla process) özelliğe taşımaktır.
- Single Threaded(Tek iş parçasıcı) mimarisinde sahiptir.
- Npm'i otomatik olarak sisteme yükler.
- Full stack(frontend,backend) aynı dil(JS) üzerinden projemizi geliştirme imkanını sağlar.
- API ile çalışmamıza olanak sağlar.
- Gerçek zamanlı uygulamalar(Message: Socket) yüksek performans sağlar.
- Express(Middleware: orta katman), node js için popüler bir web geliştirme platformudur.
- Veri tabanı erişimlerinde MongoDB, mysql, postgresql
- Routing(yönlendirme)
```
---

## Node JS Olay odaklı(event-driven), engelsiz(non-blocking) I/O Modeli, Event Loop
```sh
- Bu model amacı performans metriğini artırmak içindir
- Olay odaklı programlamada, bir programın olaylar(event) tepki verme şeklidir.
- Uzun süren işlemlerde(Ağ etkileşimi) bazen bekleyebiliyoruz. Biz bunu asenkron olarak işlersek beklemeden diğer işlemlerin sürdürülebilirliğini artırmış oluruz.
- Yani işlemlerin tamamlanmasını beklemeden diğer tetiklenen(trigger) olaylara yanıt vermedir.
- Aynı anda  birden fazla işlem(process) çalışır ve bloke olmadan devam eder.
- Event-Loop(Olay döngüsü): uygulamaları dinliyor ve işlem bekleyenleri işliyor.
- Callback function: programalada callback functionlar olay odaklı programlanın bir parçasıdır.
- Olay odaklı bu model ölçeklenebilinirliliğini sağlar ve eş zamanlı çalışmayı sağlar
```
---

## Node JS Tarihçesi
```sh
2009 geliştirilmeye başlandı
2010 Non-blocking (Engelsiz)
Windows
LTS(Long Term Support: Uzaun vadeli destek)
```
---

##  Node JS Framework
```sh
- Express.js (En popüler olanı) hafiftir.
- Koa.js (ES6 destekliyor) daha az kod
- Nest.js (TS ile geliştirildi)
- Meteor.js (Full- stack) JS uygulamaları geliştirmek için uygundur.
- Sails.js (MVC) mimarisine dayanır.
- Hapi.js (Büyük ölçekli projeler için uygundur)
```
---

## Node JS Framework Express
```sh
- node js için en popüler hafif,esnek, bir web geliştirme platformudur.
- Middleware: orta katman için uygundur.
- Esnektir,
- Hızlıdır (Minimalist)
- SPA uygulamalarında(Single Page Application) idealdir SPA(React,Angular)
- Http istekleri (GET,POST,PUT, DELETE) için birçok özellikler sağlar.
- Hızlı prototype oluşturmada, RESTful API geliştirmede
- Yönlendirme (Routing): Yönlendirme mekanizması vardır.
http://localhost:1111/admin
http://localhost:1111/blog
```
---

## Npm Nedir
```sh
`winston` logger'ı, uygulamanızda hata ve bilgi loglarını düzgün bir şekilde yönetmek için kullanılır. 
Bu kodu genellikle uygulamanızın **`index.js`** veya **`server.js`** gibi ana giriş dosyasına eklemeniz gerekir. 
Logger, uygulamanızın başlangıcından itibaren tüm hataları ve bilgileri loglar.

### 1. **Kurulum:**
Öncelikle `winston` kütüphanesini yüklemeniz gerekiyor. Terminalde şu komutu çalıştırarak yükleyebilirsiniz:
npm install winston
```

## Npm Nedir
```sh
Npm(Node Package Management): Paket yönetim sistemidir.
Npm bize hızlı kodlar yazmamız için gereken alt yapıyı sunar.
```
---

## EJS
```sh
**EJS (Embedded JavaScript)**, Node.js tabanlı uygulamalarda dinamik HTML içerik oluşturmak için kullanılan bir **şablon (template) motoru**dur.

EJS ile, HTML sayfalarının içine JavaScript kodlarını gömerek dinamik içerik üretebilir ve sayfayı istemciye sunabilirsiniz.

### EJS'in Temel Özellikleri:
1. **JavaScript ile Entegre**: EJS, HTML içine JavaScript kodu gömmeye izin verir. 
Bu, veritabanından gelen veya başka bir kaynaktan alınan verileri HTML içerisine kolayca entegre etmenizi sağlar.

   Örneğin, bir kullanıcı listesini HTML şablonuna eklemek:
   ```ejs
   <ul>
     <% users.forEach(function(user) { %>
       <li><%= user.name %></li>
     <% }); %>
   </ul>
```

- `<% %>`: JavaScript kodu çalıştırmak için kullanılır (örneğin, döngüler, koşullu ifadeler).

- `<%= %>`: Değişken veya ifade değerini eklemek için kullanılır (HTML çıktısına veri eklemek).

2. **Veri Bağlama (Data Binding)**: Sunucuda işlenen verileri, HTML sayfalarına kolayca ekleyebilirsiniz. 
Node.js tarafında oluşturulan veriler, EJS şablonuna gönderilir ve burada dinamik içerik oluşturulabilir.

   Örneğin, bir Express.js route'unda:

   ```javascript
   app.get("/users", (req, res) => {
     const users = [{ name: "Hamit" }, { name: "Hulusi" }];
     res.render("users", { users: users });
   });
   ```

   Bu veriler, EJS şablonunda yukarıda gösterilen şekilde kullanılarak liste halinde görüntülenir.

3. **Esnek ve Hafif**: EJS, birçok şablon motoruna göre oldukça esnektir ve kolayca öğrenilebilir. 
HTML yapısının içerisine eklenen JavaScript kodu ile sadece gerekli yerlerde dinamik veri gösterimi yapılabilir.

4. **Koşullu İfadeler ve Döngüler**: EJS, if-else blokları veya döngü yapılarını HTML ile birlikte kullanmanıza olanak tanır, 
bu da şablonların esnekliğini artırır.

   Koşullu ifade örneği:

   ```ejs
   <% if (user.isAdmin) { %>
     <p>Admin kullanıcı</p>
   <% } else { %>
     <p>Normal kullanıcı</p>
   <% } %>
   ```

5. **Layout Desteği**: EJS, şablonlar arasında parçalama ve yeniden kullanma işlemlerini destekler. 
Layout'lar oluşturup, çeşitli şablonları bu ana yapıya dahil edebilirsiniz.

### EJS Nasıl Kullanılır?
EJS'yi Node.js projenize şu şekilde dahil edebilirsiniz:

1. **EJS'yi Projeye Eklemek**:

   ```bash
   npm install ejs
   ```

2. **Express.js ile Kullanımı**:
   Express.js uygulamasında EJS şablon motorunu şu şekilde ayarlayabilirsiniz:

   ```javascript
   const express = require("express");
   const app = express();

   app.set("view engine", "ejs");

   app.get("/", (req, res) => {
     res.render("index", { title: "Ana Sayfa" });
   });

   app.listen(3000);
   ```

3. **EJS Dosyası Oluşturma**:
   `views/index.ejs` dosyasında şablon yapısı oluşturabilirsiniz:
   ```ejs
   <h1><%= title %></h1>
   <p>Bu, dinamik olarak oluşturulan bir sayfadır.</p>
   ```

### EJS Kullanmanın Avantajları:

- **Basit ve Öğrenmesi Kolay**: HTML ile iç içe geçmiş JavaScript kodu, özellikle önceden HTML ve JavaScript bilen geliştiriciler için kullanımı kolaydır.

- **Hafif ve Performanslı**: Fazla ek kütüphanelere ihtiyaç duymadan, doğrudan HTML içine dinamik içerik eklemek mümkün olur.

- **Node.js ile Entegre**: Express.js gibi popüler Node.js çerçeveleriyle mükemmel bir şekilde entegre olabilir.

## EJS, basit dinamik HTML içerik oluşturma ihtiyacı olan projelerde oldukça kullanışlıdır ve Node.js uygulamalarıyla yaygın bir şekilde kullanılır.


## Mongo DB
```sh
npm install mongodb
npm install -g mongodb

username:  hamitmizrak
password:  cNrT66n13oQYtkps

mongodb+srv://<your-name>:<your-password>@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster
```
---

## MongoDB datase (Shelling)
```sh 
# Terminalde
mongosh veya mongo
use blogDB  # blogDB adında bir veritabanı oluştur ve ona geç

db.posts.insertOne({
    header: "İlk Blog Yazım",
    content: "Bu benim ilk blog yazımın içeriğidir.",
    author: "Hamit Mızrak.",
    tags: "java,jsp",
})
```

## MONGO İÇİN VERİ GÜVENLİĞİ (dotenv)
```sh
MongoDB kullanıcı adı ve şifresini doğrudan yazılmaz.
Hassas verileri saklamak için .env dosyası üzerinden ilerlemeliyiz.

DİKKATT: .env root dizinde olamlıdır.
npm install dotenv

.env
MONGO_USERNAME=hamitmizrak
MONGO_PASSWORD=<your-password>

index.js
require('dotenv').config();

// Localhostta MongoDB yüklüyse)
const databaseCloudUrlDotEnv =
`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@offlinenodejscluster.l3itd.mongodb.net/?retryWrites=true&w=majority&appName=OfflineNodejsCluster`;
```
---

## Morgan Log
```sh
npm install morgan
npm install -g morgan

**Morgan**; Node.js uygulamalarında HTTP isteklerini loglamak için kullanılan bir **middleware** kütüphanesidir.

Express.js ile birlikte çalışarak her bir gelen HTTP isteği ve sunucudan dönen yanıtı loglayarak, uygulama geliştiricisinin sunucu işlemlerini takip etmesini sağlar.

Bu loglar sayesinde, isteklerin durumu, yanıt kodları, yanıt süreleri gibi bilgiler kolayca izlenebilir ve hata ayıklama süreci hızlanır.

### Morgan'ın Temel Özellikleri:
1. **HTTP İsteklerini İzleme**: Gelen istekler (GET, POST, PUT, DELETE vb.) hakkında bilgi toplar ve bunu geliştiriciye log olarak sunar.

2. **Log Formatları**: Morgan, isteklere ait bilgileri çeşitli formatlarda loglayabilir (`combined`, `dev`, `short`, `common` gibi).

3. **Geliştirme ve Üretim Ortamlarında Kullanım**: `dev` gibi kısa ve öz log formatları, geliştirme sırasında hızlı bilgi sağlar. 
`combined` gibi daha ayrıntılı formatlar ise üretim ortamında detaylı takip için uygundur.

4. **Logların Dosyaya Yazdırılması**: Morgan logları, konsol yerine bir dosyaya yönlendirilebilir, böylece uygulamanın işlem geçmişi saklanabilir.

5. **Kolay Entegrasyon**: Express.js uygulamalarına sadece birkaç satır kodla eklenir ve kullanımı basittir.

### Kullanım Senaryoları:
- **Hata Ayıklama**: HTTP isteklerinin durum kodlarını ve yanıt sürelerini izleyerek performans sorunlarını ve hataları tespit etmek.

- **Geliştirme Süreci**: Uygulamanın nasıl çalıştığını izlemek ve istek yanıt döngüsünü takip etmek.

- **Log Tutma**: Üretim ortamında kullanıcı hareketlerini ve sunucunun yanıt verme sürecini kaydetmek.
```

### Örnek Kullanım:
```sh
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined')); // Detaylı log formatı

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


Bu kod ile gelen her istek, Morgan tarafından loglanır ve geliştiriciye daha fazla kontrol ve görünürlük sağlar.

### Neden Morgan Kullanılır?
- **Kolay hata ayıklama**: Sunucu loglarını izleyerek, uygulamada oluşan hataları tespit etmek kolaylaşır.

- **Performans izleme**: Yanıt sürelerini gözlemleyerek performans sorunlarını belirleme.

- **Uygulama güvenliği**: Kötü niyetli istekleri veya anormal davranışları loglar üzerinden tespit etmek mümkündür.

Morgan, Express.js gibi popüler Node.js çerçeveleri ile loglama işlemlerini basit ve verimli hale getirir.
```
---

### Winston
### 1. **Install**
npm install winston

### 2. **index.js veya server.js Dosyasına Ekleme:**
Logger kodunu projenizin başlangıç dosyasına ekleyin. Genellikle bu dosya `index.js` veya `server.js` olur. 
Aşağıdaki örnekte, `winston` logger kodu, `index.js` dosyasına eklenmiştir:

```javascript => index.js
const express = require("express");
const mongoose = require("mongoose");
const winston = require("winston"); // Winston logger'ı ekle

const app = express();

// Winston logger yapılandırması
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: "winston_error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "winston_combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
// Logger kullanımı
logger.info("Sunucu başlatılıyor...");

// MongoDB bağlantısı örneği
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info("MongoDB bağlantısı başarılı.");
  })
  .catch((err) => {
    logger.error("MongoDB bağlantı hatası:", err);
  });

// Sunucu başlatma
const port = 3000;
app.listen(port, () => {
  logger.info(`Sunucu ${port} portunda çalışıyor.`);
});
```

### 3. **Winston Logger'ın Kullanımı:**
Yukarıdaki kodda `logger.info()` ve `logger.error()` kullanarak bilgi ve hata loglarını yönetebilirsiniz. 
Örneğin:
- `logger.info("Sunucu başlatıldı")`: Bilgi mesajlarını loglar.
- `logger.error("Bir hata oluştu")`: Hata mesajlarını loglar.
Bu loglar:
- `error.log`: Sadece hata seviyesindeki logları içerir.
- `combined.log`: Tüm logları içerir.

### 4. **Log Dosyalarını Kontrol Etme:**
```sh
- `error.log` ve `combined.log` dosyaları, çalıştırdığınız dizinde otomatik olarak oluşturulur.
- Uygulamanız çalışırken bu dosyalara logların yazıldığını göreceksiniz.

Logger'ı hatalar, bilgi mesajları veya özel olaylar için kullanabilirsiniz.
```
---

## compression
```sh
compression:
npm install compression

Gzip : Verilerin sıkıştırılmasıyla performansı artırmak
ve ağ üzerinde sayfaya daha hızlı erişimi sağlar
Tüm Http cevaplarını sıkıştırarak gönderilmesini sağlar.
const compression = require('compression');
app.use(compression);
```
---

## Rate Limited
```sh
npm install express-rate-limit
 Rate Limited (İstek Sınırlamasını):
 DDoS saldırlarına karşı korumayı sağlamak ve sistem performansını artırmak içindir.
 Gelen istekleri sınırlayabiliriz.

// Her 15 dakika içinde en fazla 100 istek atılabilinir.
const rateLimit=require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 100, // buy süre zarfında en fazla bu kadar isterk atabilirsiniz.
    message: "İstek sayısı fazla yapıldı, lütfen biraz sonra tekrar deneyiniz"
});

app.use("/api/", limiter)
```
---

## CORS
```sh
CORS
npm install cors
CORS (Cross-Origin Resource Sharing)
Eğer API'niz başka portlardan da erişim sağlanacaksa bunu açmamız gerekiyor.

const cors= require('cors');
app.use(cors());
```
---

## CSRF Koruması (Cross-Site Request Forgery)
```sh
npm install csurf
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

app.use(csrfProtection);

app.get("/form", csrfProtection, (req, res) => {
  // CSRF token'ı form gönderiminde kullanmanız gerekecek
  res.render("send", { csrfToken: req.csrfToken() });
});
```
---

## HELMET
```sh
Helmet: Http başlıklarını güvenli hale getirir ve yaygın saldırı vektörlerini azaltır

npm install helmet
const helmet = require("helmet");
app.use(helmet());
```
---

## Swagger
```sh
## SWAGGER
// http://localhost:1111/api-docs

API'lerinizi daha iyi yönetmek ve test etmek için swagger kullanabilirsiniz.
npm install swagger-jsdoc swagger-ui-express

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

Swagger ayarları
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Blog API",
      description: "Blog API yönetimi için dökümantasyon",
      contact: {
        name: "Developer"
      },
      servers: ["http://localhost:5555"]
    }
  },
  apis: ["index.js", "./routes/*.js"], // API tanımları için dosyaları belirtin
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Authorize Geliyor
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Blog API",
        description: "Blog API yönetimi için dökümantasyon",
        contact: {
          name: "Developer"
        },
        servers: ["http://localhost:1111"]
      }
    },
    apis: ["index.js", "./routes/blog_api_routes.js"], // API tanımları için dosyaları belirtin
    //apis: ["index.js", "./routes/*.js"], // API tanımları için dosyaları belirtin
  };
*/
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      description:
        "Blog API yönetimi için dökümantasyon Author: Yüksek Bilgisayar Mühendisi Hamit Mızrak",
        version: "1.0.0",
      contact: {
        name: "Developer",
      },
      servers: [
        {
            url:"http://localhost:1111",
        },
    ],
    // Bearer authentication istemiyorsak securtiy kapat
    },
  },
  apis: ["index.js", "./routes/blog_api_routes.js"], // API tanımları için dosyaları belirtin
  //apis: ["index.js", "./routes/*.js"], // API tanımları için dosyaları belirtin
};

/*
Dikkat: No operations defined in spec! Swagger dokümasntasyonları API rotalarını işlemleri doğru yazdık
API dosyamızın blog_api.routes.js , Swagger taglarini (JSDoc) olmadığı için

LIST
/**
 * @swagger
 * /blog:
 *   get:
 *     summary: Get all blogs
 *     description: Retrieves a list of all blogs
 *     responses:
 *       200:
 *         description: Successfully retrieved list of blogs
 */

POST
/*
 * @swagger
 * /blog:
 *   post:
 *     summary: Create a new blog
 *     description: Adds a new blog to the collection
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               header:
 *                 type: string
 *               content:
 *                 type: string
 *               author:
 *                 type: string
 *               tags:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created new blog
 */

/**
 * @swagger
 * /blog/{id}:
 *   put:
 *     summary: Bir blog yazısını güncelle
 *     description: Verilen id ile bir blog yazısını MongoDB üzerinde günceller.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Güncellenecek blog yazısının id'si.
 *         schema:
 *           type: string
 *       - in: body
 *         name: Blog
 *         description: Güncellenecek blog verileri.
 *         schema:
 *           type: object
 *           required:
 *             - header
 *             - content
 *             - author
 *             - tags
 *           properties:
 *             header:
 *               type: string
 *               example: "Yeni Blog Başlığı"
 *             content:
 *               type: string
 *               example: "Bu blog yazısının içeriği güncellenmiştir."
 *             author:
 *               type: string
 *               example: "Hamit Mızrak"
 *             tags:
 *               type: string
 *               example: "nodejs, mongodb, update"
 *     responses:
 *       200:
 *         description: Güncellenmiş blog verisi döndürülür.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 *         description: Güncelleme sırasında hata oluştu.
 */

 /**
 * @swagger
 * /blog/{id}:
 *   delete:
 *     summary: Bir blog yazısını sil
 *     description: Verilen id ile bir blog yazısını MongoDB üzerinden siler.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Silinecek blog yazısının id'si.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Silme işlemi başarılı olduğunda mesaj döner.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "1 nolu id silindi"
 *       400:
 *         description: Silme işlemi sırasında hata oluştu.
 */

const swaggerDocs = swaggerJsDoc(swaggerOptions);
// http://localhost:1111/api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
```
---

## Konu
```sh
```
---

