# NOVA — Nuxt 3 + Supabase + Tailwind

## 📁 Struktur File

```
nova-nuxt/
├── app.vue                        ← Root app
├── nuxt.config.ts                 ← Konfigurasi Nuxt
├── tailwind.config.js             ← Custom Tailwind theme
├── package.json
├── .env.example                   ← Template env variable
├── supabase-schema.sql            ← SQL untuk Supabase
│
├── assets/
│   └── css/main.css               ← Global CSS (orbs, glass, animasi)
│
├── layouts/
│   └── default.vue                ← Layout utama (orbs + navbar + footer)
│
├── pages/
│   ├── index.vue                  ← Halaman Home (hero + members preview)
│   ├── members.vue                ← Halaman semua member + search/filter
│   └── members/[id].vue           ← Detail member
│
├── components/
│   ├── AppNavbar.vue              ← Navbar glassmorphism
│   ├── AppFooter.vue              ← Footer
│   ├── HeroSection.vue            ← Hero dengan chips preview member
│   ├── MembersSection.vue         ← Grid member + stats strip
│   └── MemberCard.vue             ← Card individual member
│
└── composables/
    └── useMembers.ts              ← Fetch data dari Supabase
```

---

## 🚀 Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Buat File `.env`

```bash
cp .env.example .env
```

Isi dengan kredensial Supabase kamu:
```env
SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
SUPABASE_KEY=your-anon-key-here
```

### 3. Setup Supabase

1. Buka [supabase.com](https://supabase.com) → buat project baru
2. Masuk ke **SQL Editor**
3. Jalankan isi file `supabase-schema.sql`
4. Ini akan membuat:
   - Tabel `members` (id, name, role, info, skills[], avatar_url, order_index)
   - Row Level Security (baca publik, tulis hanya user login)
   - Storage bucket `avatars` untuk foto profil
   - Sample data 10 anggota

### 4. Upload Foto Profil (Opsional)

1. Di Supabase → **Storage** → bucket `avatars`
2. Upload foto, lalu copy URL-nya
3. Update kolom `avatar_url` di tabel `members` dengan URL tersebut

### 5. Jalankan Dev Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## 🗃️ Struktur Database `members`

| Kolom         | Tipe       | Keterangan                              |
|---------------|------------|-----------------------------------------|
| `id`          | UUID       | Primary key (auto)                      |
| `name`        | TEXT       | Nama lengkap                            |
| `role`        | TEXT       | Jabatan / peran                         |
| `info`        | TEXT       | Deskripsi singkat                       |
| `skills`      | TEXT[]     | Array skill: `['React', 'Figma', ...]`  |
| `avatar_url`  | TEXT       | URL foto dari Storage (atau null)       |
| `order_index` | INTEGER    | Urutan tampil di grid                   |
| `created_at`  | TIMESTAMPTZ| Otomatis                                |

---

## 🎨 Stack

- **Nuxt 3** — Framework
- **Tailwind CSS** — Utility styling
- **AOS** — Animasi scroll (via CDN)
- **Supabase** — Database & Storage foto profil
- **JetBrains Mono + Outfit** — Font

---

## 📄 Halaman

| URL              | Keterangan                          |
|------------------|-------------------------------------|
| `/`              | Home: hero + preview + members grid |
| `/members`       | Semua member + search + filter skill|
| `/members/[id]`  | Detail profil member                |
