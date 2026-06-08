# AI Video Gallery

React landing page untuk showcase galeri video AI dan tarik audience ke kelas video AI.

## Run

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://127.0.0.1:5173`.

## Tukar Video

Edit array `videos` dalam `src/main.jsx`.

- `title`: tajuk video
- `category`: kategori filter
- `length`: durasi display
- `src`: path video `.mp4`
- `poster`: path thumbnail atau URL image
- `prompt`: prompt atau angle video

## Simpan Video Local

Letak video dalam folder:

```text
C:\Users\Administrator\Documents\Gallery\public\videos
```

Nama video yang website sedang guna:

```text
public\videos\Satria14.mp4
public\videos\Suramala.mp4
```

Dalam code React, video dalam folder `public/videos` dipanggil begini:

```jsx
src: '/videos/Satria14.mp4'
```

Kalau mahu guna thumbnail local, letak dalam:

```text
C:\Users\Administrator\Documents\Gallery\public\posters
```

Kemudian update `poster`:

```jsx
poster: '/posters/Satria14.jpg'
```

Tukar link WhatsApp di bahagian CTA:

```jsx
href="https://wa.me/60196321686"
```
