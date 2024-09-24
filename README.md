# Uçuş Bilgisi Projesi

Bu proje, Schiphol API'sinden alınan uçuş verilerini MongoDB veritabanında saklayıp, frontend'de kaydedilen uçuşları listeleyen bir uçuş takip uygulamasıdır.

### Ekran Görüntüleri

#### Anasayfa ve Uçuş Listesi

![Anasayfa ve Uçuş Listesi](./src/assets/images/homepage.png)

#### Kaydedilen Uçuşlar

![Kaydedilen Uçuşlar](./src/assets/images/saved-flights.png)

## Proje Yapısı

- **Backend**: Node.js, Express.js ve MongoDB kullanılarak yapılmıştır.
- **Frontend**: React.js kullanılmıştır.
- **Veritabanı**: MongoDB ile uçuş verileri saklanmaktadır.
- **API**: Schiphol API kullanılarak uçuş verileri alınmaktadır.

### Özellikler

- **Uçuş verilerinin listelenmesi**: Schiphol API'den uçuş bilgileri alınıp frontend'de gösterilmektedir.
- **Kaydedilen uçuşların görüntülenmesi**: Kullanıcıya kaydedilmiş uçuşların listesi gösterilir.

### Kurulum

1. **Projeyi Klonla**:

   ```bash
   git clone https://github.com/Berkayozgun/plane-scape.git
   ```

2. **Backend için Gerekli Paketleri Yükle**:

   ```bash
   cd plane-scape/backend
   npm install
   ```

3. **Frontend için Gerekli Paketleri Yükle**:

   ```bash
   cd /plane-scape
   npm install
   ```

4. **Çevre Değişkenlerini Ayarla**:

   `.env` dosyası oluşturup şu bilgileri gir:

   ```bash
   APP_ID=your_app_id
   APP_KEY=your_app_key
   MONGO_URI=your_mongo_uri
   ```

5. **Backend'i Başlat**:

   ```bash
   cd plane-scape/backend
   npm start
   ```

6. **Frontend'i Başlat**:
   ```bash
   cd /plane-scape
   npm start
   ```

### API Endpointleri

- `/api/flights`: Schiphol API'den uçuş verilerini çeker.
- `/api/save-flight`: Uçuş verilerini veritabanına kaydeder.
- `/api/saved-flights`: Veritabanında saklanan uçuşları getirir.

### Kullanılan Teknolojiler

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB
- **Veritabanı**: MongoDB
- **API**: Schiphol API

### Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
