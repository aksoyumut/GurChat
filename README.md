````markdown
# 🟢 Gur Chat Uygulaması

Gerçek zamanlı, güvenli ve hızlı mesajlaşma deneyimi sunan bir online chat uygulamasıdır. Şirket içi iletişim ihtiyacını karşılamak üzere geliştirilmiştir.

## 🚀 Özellikler

- ⚡ Gerçek zamanlı mesajlaşma (Socket.io)
- 📦 MongoDB ile veri saklama
- ✅ Mesajlara okundu bilgisi ekleme
- 👥 Bağlı kullanıcıları listeleme ve durum takibi
- 📱 Mobil uyumlu modern kullanıcı arayüzü (React.js + Redux Toolkit)
- 🔐 Güvenli ve ölçeklenebilir altyapı

## 🛠️ Kullanılan Teknolojiler

- **Node.js** + **Express**
- **Socket.io**
- **MongoDB**
- **React.js**
- **Redux Toolkit**
- **HTML / CSS / JavaScript**

## 🏁 Başlatmak İçin

```bash
# Sunucu tarafı (backend)
cd backend
npm install
npm start

# İstemci tarafı (frontend)
cd frontend
npm install
npm run dev
````

## 🔐 .env Dosyası

Proje çalıştırılmadan önce kök dizinde bir `.env` dosyası oluşturulmalı ve aşağıdaki formatta kişisel bilgileriniz girilmelidir:

```env
MONGODB_URI=           # MongoDB bağlantı URI'niz
PORT=5001              # Sunucu port numarası

JWT_SECRET=SECRET      # JWT için gizli anahtar
CLOUDINARY_CLOUD_NAME= # Cloudinary hesabınızın adı
CLOUDINARY_API_KEY=    # Cloudinary API anahtarınız
CLOUDINARY_API_SECRET= # Cloudinary gizli API anahtarınız
NODE_ENV=development   # Ortam ayarı (development/production)
```

> ⚠️ `.env` dosyası **kişisel ve gizli bilgileri** içerdiğinden kesinlikle başkalarıyla **paylaşılmamalı** ve `.gitignore` dosyasına eklenmelidir.

```

