# Shebang (#!/bin/bash): Betiğin Bash kabuğu ile çalışacağını gösterir.
# İşletim sistemine Bash betiğinin çalışacağını söyler
#!/bin/bash

###################################################
# Global Variables
# Geri Sayım Süresini Belirleyelim(Saniye Cinsinden)
countdown_seconds=3 # saniye cinsinde

# Kullanıcıdan saniyeyi almak isteseydim.
#read -p "Saniyeyi girin (saniye cinsinden): " countdown_seconds

###################################################
# Color
# red=$(tput setaf 1)
# green=$(tput setaf 2)
# yellow=$(tput setaf 3)
# blue=$(tput setaf 4)
# magenta=$(tput setaf 5)
# cyan=$(tput setaf 6)
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC=='\033[0m' # No Color
###################################################
# Geri Sayım Süresi Bittiğinde Kullanıcıya Uyarı Verelim
#while []; do 
#done

# Log Dosya Konum Yeri
#og_file="log/countdown.log"
log_file="countdown.log"
echo "$(date) - Geri Sayım Süresi başladı" >> $log_file

# Geri sayımda Animasyon
symbols=("/" "-" "\\" "|")
#symbols=(".")
# $countdown_seconds -gt 0: Sayaç 0'dan  büyük olduğu sürece çalışsın (-gt 0)
while [ $countdown_seconds -gt 0 ]; do
    #symbols_index=$((RANDOM % ${#symbols[@]}))
    symbol=${symbols[$((countdown_seconds % 4))]}

    #echo "Kalan Süre: $countdown_seconds saniye"
    #echo "$countdown_seconds saniye kaldı..."
    echo -ne "${BLUE}$countdown_seconds saniye ${YELLOW}kaldı... ${NC}$symbol\a\r"

    # 1 saniyede bir süre beklemek için
    sleep 1
    # Sayaçı 1 azaltarak süreyi gerçekleştir.
    countdown_seconds=$((countdown_seconds -1))
done


###################################################
# Geri Sayım Süresi Bittiğinde Uyarı Mesajı Verelim
# Escape Chacterleri (ASCII 7) ile ses tonu değiştirerek uyarı mesaj
# a: Alert veya bell (zil sesi)
# n: yeni satır 
# r: Satır başı

echo "$(date) - Geri Sayım Süresi bitti" >> $log_file
echo -e "${GREEN}\aİşlemler Başlıyor ...\n\r"


