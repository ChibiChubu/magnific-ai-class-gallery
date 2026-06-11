import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  Clapperboard,
  Clock,
  Film,
  MessageCircle,
  Play,
  Sparkles,
  Star,
  X,
} from 'lucide-react';
import './styles.css';

const videos = [
  {
    title: 'Satria14',
    category: 'Cinematic',
    length: '3:22',
    src: '/videos/Satria14.mp4',
    poster: '/posters/Satria14.jpg',
    prompt: 'Demo cinematic storytelling: mood, shot, movement, dan final look.',
  },
  {
    title: 'Suramala',
    category: 'Cinematic',
    length: '3:17',
    src: '/videos/Suramala.mp4',
    poster: '/posters/Suramala.jpg',
    prompt: 'Contoh visual cinematic gelap, dramatik, dan beremosi dari workflow AI.',
  },
  {
    title: 'Red Ops',
    category: 'Cinematic',
    length: '3:00',
    src: '/videos/Red Ops.mp4',
    poster: '/posters/Red-Ops.jpg',
    prompt: 'Visual action cinematic dengan workflow AI filmmaking.',
  },
  {
    title: 'Mega-transform',
    category: 'Cinematic',
    length: '3:00',
    src: '/videos/Mega-transform.mp4',
    poster: '/posters/Mega-transform.jpg',
    prompt: 'Transformation cinematic sequence menggunakan AI workflow.',
  },
  {
    title: 'Unreal-Engine-Test',
    category: 'Cinematic',
    length: '3:00',
    src: '/videos/Unreal-Engine-Test.mp4',
    poster: '/posters/Unreal-Engine-Test.jpg',
    prompt: 'Environment dan cinematic test menggunakan Unreal Engine.',
  },
];
const outcomes = [
  'Prompt image dengan struktur yang betul',
  'Cara guna platform Magnific AI dari upload sampai export',
  'Storyboard dan moodboard untuk video cinematic',
  'Workflow idea -> prompt -> image -> video -> final output',
  'Teknik upscale, enhance, dan final polish',
  'Guna Spaces Magnific AI untuk workflow cinematic',
];

const stats = [
  ['20 Jun', 'kelas online'],
  ['2 video', 'galeri demo'],
  ['2 jam', 'kelas live'],
];

function App() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [featured, setFeatured] = useState(videos[0]);
  const [modalVideo, setModalVideo] = useState(null);

  const categories = useMemo(
    () => ['Semua', ...new Set(videos.map((video) => video.category))],
    []
  );

  const visibleVideos =
    activeCategory === 'Semua'
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  useEffect(() => {
    if (!modalVideo) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setModalVideo(null);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [modalVideo]);

  const openVideo = (video) => {
    setFeatured(video);
    setModalVideo(video);
  };

  return (
    <main>
      <section className="hero">
        <div className="topbar" aria-label="Utama">
          <a className="brand" href="#">
            <img
              className="brandLogo"
              src="/images/magnific-logo.png"
              alt="Magnific"
            />
            <span>Magnific AI Class</span>
          </a>
          <nav>
            <a href="#gallery">Galeri</a>
            <a href="#learn">Syllabus</a>
            <a href="#join">Join</a>
          </nav>
        </div>

        <div className="heroGrid">
          <div className="heroCopy">
            <img
              className="heroLogo"
              src="/images/magnific-logo.png"
              alt="Magnific AI"
            />
            <div className="eyebrow">
              <Sparkles size={16} />
              Tenaga pengajar: Muhammad Hafiz
            </div>
            <h1>Bina visual. Cipta cerita. Jadi filmmaker AI.</h1>
            <p>
              Kelas ini dikendalikan oleh Muhammad Hafiz sebagai tenaga pengajar,
              dengan fokus workflow cinematic menggunakan platform Magnific AI.
            </p>
            <div className="heroActions">
              <a className="primaryBtn" href="#join">
                Daftar kelas <ArrowRight size={18} />
              </a>
              <a className="secondaryBtn" href="#gallery">
                <Play size={17} /> Tengok galeri
              </a>
            </div>
            <div className="stats" aria-label="Ringkasan kelas">
              {stats.map(([value, label]) => (
                <div className="stat" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="showreel" aria-label="Featured video">
            <video
              key={featured.title}
              src={featured.src}
              poster={featured.poster}
              controls
              muted
              playsInline
            />
            <div className="showreelInfo">
              <span>
                <Film size={16} />
                Featured
              </span>
              <strong>{featured.title}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="galleryBand" id="gallery">
        <div className="sectionHead">
          <div>
            <span className="sectionKicker">Hasil peserta / demo</span>
            <h2>Galeri video cinematic AI</h2>
          </div>
          <div className="filters" aria-label="Filter video">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? 'active' : ''}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="videoGrid">
          {visibleVideos.map((video) => (
            <article className="videoCard" key={video.title}>
              <button
                className="posterButton"
                type="button"
                onClick={() => openVideo(video)}
                aria-label={`Play ${video.title}`}
              >
                <img src={video.poster} alt="" />
                <span className="playBadge">
                  <Play size={18} fill="currentColor" />
                </span>
              </button>
              <div className="cardBody">
                <div className="meta">
                  <span>
                    <Clapperboard size={14} />
                    {video.category}
                  </span>
                  <span>
                    <Clock size={14} />
                    {video.length}
                  </span>
                </div>
                <h3>{video.title}</h3>
                <p>{video.prompt}</p>
                <button type="button" onClick={() => openVideo(video)}>
                  Preview <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="learnBand" id="learn">
        <div className="learnIntro">
          <span className="sectionKicker">Dalam kelas</span>
          <h2>Dari idea kosong ke karya cinematic yang siap export.</h2>
          <p>
            Fokus kelas ini ialah workflow praktikal dalam Magnific AI: daftar,
            upload image, pilih model, enhance, export, kemudian create video
            cinematic menggunakan struktur prompt yang betul.
          </p>
        </div>
        <div className="outcomes">
          {outcomes.map((outcome) => (
            <div className="outcome" key={outcome}>
              <Check size={18} />
              <span>{outcome}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ctaBand" id="join">
        <div className="ctaVisual">
          <img
            src="/images/cinematic-montage.png"
            alt="Cinematic AI montage example"
          />
        </div>
        <div className="ctaCopy">
          <div className="rating">
            <Star size={17} fill="currentColor" />
            Dibimbing oleh Muhammad Hafiz sebagai tenaga pengajar
          </div>
          <h2>Ready hasilkan video cinematic sendiri?</h2>
          <p>
            Kelas online via Google Meet ini sesuai untuk content creator, filmmaker,
            pelajar, usahawan, dan pemula yang nak belajar bina visual sinematik
            menggunakan Magnific AI. Recording disediakan dan tempat terhad kepada
            20 pelajar.
          </p>
          <a className="primaryBtn" href="https://wa.me/60196321686">
            <MessageCircle size={18} />
            WhatsApp untuk daftar
          </a>
        </div>
      </section>

      {modalVideo && (
        <div
          className="videoModal"
          role="dialog"
          aria-modal="true"
          aria-label={`Playing ${modalVideo.title}`}
          onClick={() => setModalVideo(null)}
        >
          <div className="modalPanel" onClick={(event) => event.stopPropagation()}>
            <button
              className="modalClose"
              type="button"
              onClick={() => setModalVideo(null)}
              aria-label="Close video"
            >
              <X size={22} />
            </button>
            <video
              key={modalVideo.src}
              src={modalVideo.src}
              poster={modalVideo.poster}
              controls
              autoPlay
              playsInline
            />
            <div className="modalInfo">
              <span>{modalVideo.category} / {modalVideo.length}</span>
              <h3>{modalVideo.title}</h3>
              <p>{modalVideo.prompt}</p>
            </div>
          </div>
        </div>
      )}

      <footer>
        <span>
          <img
            className="footerLogo"
            src="/images/magnific-logo.png"
            alt=""
          />
          Magnific AI Class
        </span>
        <p>Tenaga pengajar: Muhammad Hafiz.</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
