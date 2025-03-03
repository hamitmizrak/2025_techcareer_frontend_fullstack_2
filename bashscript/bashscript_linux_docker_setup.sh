
# Shebang (#!/): Betiğin Bash kabuğu ile çalışacağını gösterir.
# bin/bash: names
# İşletim sistemine Bash betiğinin çalışacağını söyler
#!/bin/bash
echo "Docker Kurulumlar"

# User Variable
INFORMATION="Bilgi"
CREATE="Oluşturma"
DELETE="Silme"
UPDATE="Güncelleme"
CLEANER="Temizleme"
INSTALL="Yükleme"
START="Başlıyor"
STOP="Durduruluyor"
CHECK="Yüklenecek Paket bağımlılıkları"
INFORMATION="Genel Bilgiler Ports | NETWORKING"
UFW="Uncomplicated Firewall Ggüvenlik duvarı Yöentim Araçı"
LOGOUT="Sistemi Tekrar Başlatmak"

# ÖNEMLİ NOT: eğer windows üzerinden çalıştırıyorsanız sudo tanımayacaktır.
# ÖNEMLİ NOT: nginx eğer browserda istediğiniz sonuç çıkmazsa browserin cache belleğini temizleyiniz. yoksa nginx'in kendi sayfasını görürüsünüz.
#####################################################################################################
#####################################################################################################
# Bashscriptlere İzin Vermemiz
chmod +x countdown.sh
chmod +x reboot.sh
chmod +x docker_setup.sh
chmod +x all_project.sh

#####################################################################################################
#####################################################################################################
# Updated
updated() {
    sleep 2
    echo -e "\n###### ${UPDATE} ######  "

    # Güncelleme Tercihi
    echo -e "Güncelleme İçin Seçim Yapınız\n1-)update\n2-)upgrade\n3-)dist-upgrade\n4-)Çıkış "
    read chooise

    # Girilen sayıya göre tercih
    case $chooise in
    1)
        read -p "Sistem Listesini Güncellemek İstiyor musunuz ? e/h " listUpdatedResult
        if [[ $listUpdatedResult == "e" || $listUpdatedResult == "E" ]]; then
            echo -e "List Güncelleme Başladı ... "

            # Geriye Say
            ./countdown.sh

            # Güncelle
             apt-get update
        else
            echo -e "Sistemin Listesini Güncellenemesi yapılmadı"
        fi
        ;;
    2)
        read -p "Sistem Paketini Yükseltmek İstiyor musunuz ? e/h " systemListUpdatedResult
        if [[ $systemListUpdatedResult == "e" || $systemListUpdatedResult == "E" ]]; then
            echo -e "Sistem Paket Güncellenmesi Başladı ..."
            ./countdown.sh
             apt-get update &&  apt-get upgrade -y
        else
            echo -e "Sistem Paket Güncellenmesi Yapılmadı... "
        fi
        ;;
    3)
        read -p "Sistemin Çekirdeğini Güncellemek İstiyor musunuz ? e/h " kernelUpdatedResult
        if [[ $kernelUpdatedResult == "e" || $kernelUpdatedResult == "E" ]]; then
            echo -e "Kernel Güncelleme Başladı ... "

            # Geriye Say
            ./countdown.sh

             apt-get update &&  apt-get upgrade -y &&  apt-get dist-upgrade -y
            # Çekirdek(Kernel) güncellemelerinde yeniden başlamak gerekebilir
             apt list --upgradable | grep linux-image
        else
            echo -e "Kernel Güncellemesi Yapılmadı... "
        fi
        ;;
    *)
        echo -e "Lütfen sadece size belirtilen seçeneği seçiniz"
        ;;
    esac
}
updated

#####################################################################################################
#####################################################################################################
# logout
logout() {
    sleep 2
    echo -e "\n###### ${LOGOUT} ######  "
    read -p "Sistemi Kapatıp Tekrar Açmak ister misiniz ? e/h " logoutResult
    if [[ $logoutResult == "e" || $logoutResult == "E" ]]; then
        echo -e "Sitem Kapatılıyor ... "

        # Geriye Say
        ./countdown.sh

        #Güncelle
         apt update

        # Temizleme Fonkisyonunu çağırsın
        clean
        ./reboot.sh
    else
        echo -e "Sistem Kapatılmadı..."
    fi
}
# logout

#####################################################################################################
#####################################################################################################
# Güvenlik duvarı INSTALL  (UFW => Uncomplicated Firewall)
theFirewallInstall() {
    sleep 2
    echo -e "\n###### ${UFW} ######  "
    read -p "Güvenlik Duvarı Kurulumlarını İster misiniz ? e/h " ufwResult
    if [[ $ufwResult == "e" || $ufwResult == "E" ]]; then
        echo -e "Güvenlik Duvarı Kurumları Port İzinler ve IP adres İzinleri Başladı ..."

        # Geriye Say
        ./countdown.sh

        # Portları izle
        netstat -nlptu

        sleep 3
        echo -e "######### UFW (Uncomplicated Firewall) #########\n"
        # UFW kurulumu
         apt install ufw -y

        # UFW Status
         ufw status

        # Varsayılan Giden Trafik Kurallarını Belirlemek(Dış dünyayay yapılan bağlantıların varsayılan olarak izin verildiği anlamına gelir)
        # Tüm Giden Trafiğe İzin Ver
         ufw default allow outgoing

        # Ssh(Secure Shell) trafiğine izin verir. Bağlantılara izin vermek
         ufw allow ssh
         ufw allow 22
         ufw allow 80
         ufw allow 443
         ufw allow 1111 # Docker Apache Tomcat
         ufw allow 2222 # docker portainer
         ufw allow 3333 # Jenkins
         ufw allow 4444 # Ubuntu Tomcat
         ufw allow 8000 # docker portainer
         ufw allow 3306 # mysql
         ufw allow 5432 # Postgresql
         ufw allow 8080 # Nginx
         ufw allow 9000 # SonarQube
         ufw allow 9090
        # IP: 127.0.0.1 DNS: localhost
         ufw allow from 127.0.0.1 to any port 8080

        # UFW Etkinleştirme
         ufw enable

        # UFW Status
         ufw status
    else
        echo -e "Güvenlik Duvarı Açılmadı... "
    fi
}
#theFirewallInstall

#####################################################################################################
#####################################################################################################
# Güvenlik duvarı DELETE   (UFW => Uncomplicated Firewall)
theFirewallDelete() {
    sleep 2
    echo -e "\n###### ${UFW} ######  "
    read -p "Güvenlik Duvarı Kapatmak İster misiniz ? e/h " ufwCloseResult
    if [[ $ufwResufwCloseResultult == "e" || $ufwCloseResult == "E" ]]; then
        echo -e "Güvenlik Duvarı port,ip,gelen giden ağlar kapatılmaya  başladı ..."

        # Geriye Say
        ./countdown.sh

        # Portları izlemek
        netstat -nlptu

        sleep 3
        echo -e "######### UFW (Uncomplicated Firewall) #########\n"
        # UFW Status
         ufw status

        # Varsayılarn Gelen Trafik Kurallarını belirleme(Güvenliği artırmak için gelen bağlantıları varsayılan olarak reddeder yalnızca belirlenen bağlantılara izin verir)
        # Tüm Gelen Trafiği Engelle
         ufw default deny incoming

        # Ssh(Secure Shell) trafiğine izin verir. Bağlantılara izin vermek
         ufw delete allow ssh
         ufw delete allow 22
         ufw delete allow 80
         ufw delete allow 443
         ufw delete allow 1111
         ufw delete allow 2222
         ufw delete allow 3333
         ufw delete allow 3306
         ufw delete allow 5432
         ufw delete allow 8080
         ufw delete allow 9000
         ufw delete allow 9090
        # IP: 127.0.0.1 DNS: localhost
         ufw delete allow from 127.0.0.1 to any port 8080

        # UFW Devre Dışı Bırak
         ufw disable

        # UFW Status
         ufw status
    else
        echo -e "Güvenlik Duvarı Ayarları Kapatılmadı .... "
    fi
}
#theFirewallDelete

#####################################################################################################
#####################################################################################################
# Clean
clean() {
    sleep 2
    echo -e "\n###### ${CLEANER} ######  "
    read -p "Sistemde Gereksiz Paketleri Temizlemek İster misiniz ? e/h " cleanResult
    if [[ $cleanResult == "e" || $cleanResult == "E" ]]; then
        echo -e "Gereksiz Paket Temizliği Başladı ..."

        # Geriye Say
        ./countdown.sh

        echo -e "######### Clean #########\n"
         apt-get autoremove -y
         apt autoclean
        echo -e "Kırık Bağımlılıkları Yükle ..."
         apt install -f
    else
        echo -e "Temizleme Yapılmadı..."
    fi
}
#clean

#####################################################################################################
#####################################################################################################
# Install
install() {
    sleep 2
    echo -e "\n###### ${INSTALL} ######  "
    read -p "Sistem İçin Genel Paket Yüklemeleri İstiyor musunuz ? example: vim, rar,curl etc e/h " commonInstallResult
    if [[ $commonInstallResult == "e" || $commonInstallResult == "E" ]]; then
        echo -e "Genel Yükleme Başladı ... "

        # Geriye Say
        ./countdown.sh

        echo -e "Bulunduğum dizin => $(pwd)\n"
        sleep 1
         apt-get install vim -y
        sleep 1
         apt-get install rar -y
        sleep 1
         apt-get install unrar -y
        sleep
         apt-get install curl -y
        sleep 1
         apt-get install openssh-server -y
        sleep 1

        # build-essential: Temel Geliştirme araçları içeren meta-pakettir
         apt install build-essential wget zip unzip -y

        # Firewall Install Function
        theFirewallInstall

        # Firewall Delete Function
        theFirewallDelete

        # Clean Function
        clean

    else
        echo -e "Sistem İçin Genel Yükleme Yapılmadı..."
    fi
}
install

#####################################################################################################
#####################################################################################################
# Docker Pulling
docker_pulling() {
    sleep 2
    echo -e "\nDocker pulling ${START}"
    read -p "Docker pulling istiyor musunuz ? [e/h]: " dockerPullingResult
    if [[ $dockerPullingResult == "e" || $dockerPullingResult == "E" ]]; then
        echo -e "\nDocker pulling ${CREATE}..."

        # Geriye Say
        ./countdown.sh

        # Docker Info
        docker --version
        docker version
        docker -v
        docker info

        #--------------------------------
        docker run hello-world
        docker container run hello-world

        #--------------------------------
        #docker search nginx
        #docker pull nginx
        docker pull mysql
        docker pull httpd
        docker pull alpine
        docker pull ubuntu
        docker pull centos
    else
        echo -e "Docker pulling çalışmadı"
    fi
}
docker_pulling

#####################################################################################################
#####################################################################################################
# Dockerfile
docker_file() {
    sleep 2
    echo -e "\nDockerfile ${START}"
    read -p "Dockerfile image başlanmasını istiyor [e/h]: " dockerFileResult
    if [[ $dockerFileResult == "e" || $dockerFileResult == "E" ]]; then
        echo -e "\nDockerfile'a image ${CREATE}..."

        # Geriye Say
        ./countdown.sh

        docker login

        # Dockerfile build
        docker image build -t nginx_image .

        # docker
        #docker container run -d  -p 2222:80 --rm  --name my_nginx_dockerfile nginx:alpine
        docker container run -d  -p 2222:80 --rm  --name my_nginx_dockerfile nginx_image

        # Docker Codes
        docker ps
        docker container exec -it nginx_image bash
    else
        echo -e "Dockerfile çalışmadı"
    fi
}
docker_file

#####################################################################################################
#####################################################################################################
# Docker Compose (docker-compose.yml)
docker_compose_yml() {
    sleep 2
    echo -e "\nDocker Compose ${START}"
    read -p "Docker Compose başlanmasını istiyor [e/h]: " dockerComposeResult
    if [[ $dockerComposeResult == "e" || $dockerComposeResult == "E" ]]; then
        echo -e "\nDocker Compose ${CREATE}..."

        # Geriye Say
        ./countdown.sh

        # Dockerfile build
        #docker-compose up
        docker-compose up -d
    else
        echo -e "Docker Compose çalışmadı"
    fi
}
docker_compose_yml

#####################################################################################################
#####################################################################################################
# Dockerfile Information
docker_file_information() {
    sleep 2
    echo -e "\nDocker Information ${START}"
    read -p "Docker Information bilgilerini görmek ister misiniz ?  [e/h]: " dockerFileImageInformationResult
    if [[ $dockerFileImageInformationResult == "e" || $dockerFileImageInformationResult == "E" ]]; then
        echo -e "\nDockerfile'a Container ${INFORMATION}..."

        # ;Docker Login
        ./countdown.sh
        docker login
        docker version
         docker info

        # Docker containerleri göster
        ./countdown.sh
        echo -e "Docker Container"
        docker ps
        docker container ls
        docker container ls -a

        # DockerNetwork
         ./countdown.sh
         echo -e "Docker Network"
         docker network ls

         # Docker containerleri göster
         ./countdown.sh
         echo -e "Docker Stop/Start"
         docker stop nginx_image
         docker start nginx_image

         # Docker top
         # işlem kimliği,PID,CPU kullanımı
        ./countdown.sh
        echo -e "Docker Top"
        docker top nginx_image

        # Docker inspect
        # Ağ bilgileri, volümler vs bilgileri içerir.
         echo -e "Docker inspect"
         ./countdown.sh
         docker inspect nginx_image

          # Docker stats
          # Bellek kullanımı, performans metriklerini
         ./countdown.sh
         docker stats nginx_image

          # Docker Log
         ./countdown.sh
         docker logs nginx_image

          # Docker containerleri Silmek
         ./countdown.sh
         echo -e "Docker Prune"
         docker container prune

        # Docker Terminal Bağlan
        ./countdown.sh
        echo -e "Docker Imajına Terminaller bağlan"
        docker ps
        #docker container exec -it containerID bash
        #docker container exec -it containerNAME bash
        winpty docker container exec -it nginx_container bash
        ls -al
    else
        echo -e "Dockerfile çalışmadı"
    fi
}
docker_file_information



#####################################################################################################
#####################################################################################################
# Paket Bağımlıklarını Görme
check_package() {
    sleep 2
    echo -e "\n###### ${CHECK} ######  "
    read -p "Sistem İçin Paket Bağımlılıklarını Yüklemek İstiyor musunuz ? e/h " checkResult
    if [[ $checkResult == "e" || $checkResult == "E" ]]; then
        echo -e "Yüklenecek Paket Bağımlılığı ... "

        # Geriye Say
        ./countdown.sh

        # Bulunduğum dizini gör
        echo -e "Bulunduğum dizin => $(pwd)\n"
        sleep 1

        echo -e "######### Paket Bağımlılığı #########\n"
        read -p "Lütfen yüklemek istediğiniz paket adını yazınız nginx examples  " user_input

        # dependency
        dependency "$user_input"
    else
        echo -e "Paket Bağımlıklarını Yapılmadı... "
    fi
}

dependency() {
    # parametre - arguman
    local packagename=$1
    #
     apt-get check
     apt-cache depends $packagename
     apt-get install $packagename
}
check_package

#####################################################################################################
#####################################################################################################
# Port And Version
portVersion() {
    git -v
    java -version
    javac -version
    maven -version
    docker info
    docker -v
    docker-compose -v
    docker version
    zip -v
    unzip -v+
    # build-essential:
    gcc --version  # gcc: GNU C compiler derlemek
    g++ --version  # g++: GNU C++ compiler derlemek
    make --version # make: Makefile kullanarak derlemek içindir
    #git --version
    #node -v
}
portVersion

#####################################################################################################
#####################################################################################################
# Information
information() {
    sleep 2
    echo -e "\n###### ${INFORMATION} ######  "
    read -p "Genel Bilgileri Görmek ister misiniz ? e/h " informationResult
    if [[ $informationResult == "e" || $informationResult == "E" ]]; then
        echo -e "Genel Bilgiler Verilmeye Başlandı ..."

        # Geriye Say
        ./countdown.sh

        # su
        echo -e "Ben Kimim => $(whoami)\n"
        sleep 1
        echo -e "Ağ Bilgisi => $(ifconfig)\n"
        sleep 1
        echo -e "Port Bilgileri => $(netstat -nlptu)\n"
        sleep 1
        echo -e "Linux Bilgileri => $(uname -a)\n"
        sleep 1
        echo -e "Dağıtım Bilgileri => $(lsb_release -a)\n"
        sleep 1
        echo -e "Hardisk Disk Bilgileri => $(df -m)\n"
        sleep 1
        echo -e "CPU Bilgileri => $(cat /proc/cpuinfo)\n"
        sleep 1
        echo -e "RAM Bilgileri => $(free -m)\n"
        sleep 1
    else
        echo -e "Dosya İzinleri Yapılmadı"
    fi
}
information

#####################################################################################################
#####################################################################################################
# Install
other_technology() {

    # Geriye Say
    ./countdown.sh

    echo -e "\n###### ${TECH} ######  "
    read -p "Sistem için Yüklemek İsteyeceğiniz Paketleri Yüklemek İster misiniz ? e/h " otherResult
    if [[ $otherResult == "e" || $otherResult == "E" ]]; then
        echo -e "Teknolojiler Yüklenmeye başlandı ..."

        # Geriye Say
        ./countdown.sh

        echo -e "######### Teknolojiler #########\n"
        ./all_project.sh

        # Logout Yapmak
        logout

    else
        echo -e "Teknolojiler Yüklenmeye Başlanmadı ...."
    fi
}
#other_technology
