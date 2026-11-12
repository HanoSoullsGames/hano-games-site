/* ============================================================
   Hano Games — логика сайта: язык, кнопки, уведомления.
   Ссылки ниже пока пустые: вставь их, когда будут готовы.
   ============================================================ */

const SUPPORT_URL = 'https://boosty.to/hano.games';
const DOWNLOAD_URL = 'https://github.com/HanoSoullsGames/pixel-rampage/releases/download/v0.2.0/PixelRampage-Windows.zip';
const PLAY_URL = 'game/index.html'; // WebGL-сборка лежит в папке game

// контакты: заполни нужное, пустые пункты не показываются
const CONTACTS = {
  telegram: 'HanoSoulls',        // https://t.me/HanoSoulls
  email: 'hanosoullsgames@gmail.com',
  vk: ''
};

// страница может лежать во вложенной папке (например /en/)
const ROOT = document.body.dataset.root || '';

const I18N = {
  ru: {
    'meta.home.title': 'Hano Games — независимый разработчик',
    'meta.game.title': 'Pixel Rampage — Hano Games',
    'meta.home.desc': 'Независимый разработчик из Беларуси. Вдыхаю жизнь в пиксели и код: механики, код, интерфейс, сборка.',
    'meta.game.desc': 'Pixel Rampage — аркада про разрушение картинок: четыре оружия, осколки, монеты и магазин. Играй в браузере или скачай для Windows.',

    'nav.games': 'Игры',
    'nav.about': 'Обо мне',
    'nav.contact': 'Контакты',
    'nav.support': 'Поддержать',

    'hero.kicker': 'Независимый разработчик',
    'hero.title': 'Hano Games',
    'hero.tagline': 'Вдыхаю жизнь в пиксели и код.',
    'hero.bio': 'Меня зовут Hano, я разработчик из Беларуси. Разрабатываю игры на Unity — от первой идеи до финальной сборки.',
    'hero.free': 'Бесплатно. Без рекламы и подписок.',

    'btn.games': 'Смотреть игры',

    'btn.play': 'Играть в браузере',
    'btn.download': 'Скачать для Windows',
    'btn.support': 'Поддержать на Boosty',

    'games.title': 'Игры',
    'games.sub': 'Пока одна. Но это только начало.',
    'game.tag': 'Аркада · ПК · Браузер',
    'game.short': 'Аркада про разрушение картинок: четыре оружия, осколки, монеты и магазин.',
    'game.open': 'Подробнее →',

    'about.title': 'Обо мне',
    'about.text1': 'Я инди-разработчик из Беларуси. С детства любил играть в игры и решил пополнить геймдев своими творениями. Создаю игры на движке Unity: придумываю механики, пишу код, собираю интерфейс и довожу проект до сборки.',
    'about.text2': 'Люблю разные жанры игр. Стараюсь делать игры с интересной механикой или цепляющим визуалом. Арт для проектов заказываю у художников — сам отвечаю за то, чтобы всё работало и складывалось в единую картину, чтобы вам было интересно скоротать время.',
    'about.text3': 'Пока в портфолио одна игра, но это только начало.',

    'skills.gamedesign': 'Game design',
    'skills.unity': 'Unity и C#',
    'skills.godot': 'Godot и GDScript',
    'skills.web': 'Веб-разработка',
    'skills.gameplay': 'Геймплей и механики',
    'skills.ui': 'UI и интерфейсы',
    'skills.optimization': 'Оптимизация',
    'skills.release': 'Сборка и релиз',

    'portfolio.title': 'Портфолио',
    'portfolio.sub': 'Игры, которые можно поиграть прямо сейчас!',
    'portfolio.soon.tag': 'В разработке',
    'portfolio.soon.title': 'Гравитон',
    'portfolio.soon.text': 'Гравитационный платформер в разработке: переворот гравитации, свободный прицел и бой с окружением.',

    'support.title': 'Поддержать',
    'support.text': 'Игры бесплатные. Если хочется отблагодарить меня — можно поддержать на Boosty. Это помогает делать следующие игры.',

    'contact.title': 'Связаться',
    'contact.sub': 'Открыт к предложениям: заказ игры, коллаборация или просто вопрос.',

    'nav.community': 'Сообщество',
    'community.title': 'Сообщество',
    'community.text': 'Большое дружное сообщество геймеров. Здесь можно найти друзей и товарищей с общими целями — по играм, разработке и всему вокруг.',
    'community.join': 'Вступить в Discord',

    'vw.tag': 'Рогалик-шутер · ПК · Браузер · Телефон',
    'vw.lead': 'Ткач пустоты пробивается через сектора: град пуль, graze-механика, модули и боссы. Каждый забег — новый маршрут по карте секторов, а ежедневный забег даёт один общий вызов для всех.',
    'vw.play': 'Играть в браузере',
    'vw.download': 'Скачать для Windows',
    'vw.dl.note': 'Windows 10/11 · exe · 105 МБ · без установки',
    'vw.dl.soon': 'ПК-версия выкладывается. Сейчас игра доступна в браузере — на ПК и телефоне.',
    'vw.features.title': 'Особенности',
    'vw.f1': 'Кампания с боссами и Boss Rush',
    'vw.f2': 'Карта секторов: элитные и аномальные узлы',
    'vw.f3': 'Модули, скины и комбо-билды',
    'vw.f4': 'Graze-механика и ранги за забег',
    'vw.f5': 'Ежедневный забег — общий вызов',
    'vw.f6': 'Сохранение забега, пауза и настройки',
    'vw.f7': 'Русский и английский языки',
    'vw.f8': 'Управление мышью и стиками на телефоне',
    'vw.controls.title': 'Управление',
    'vw.c.mouse': 'Мышь',
    'vw.c.lmb': 'ЛКМ',
    'vw.c1': 'движение',
    'vw.c2': 'прицел',
    'vw.c3': 'огонь',
    'vw.c4': 'рывок',
    'vw.c5': 'пауза',
    'vw.c6': 'язык RU/EN',
    'vw.mobile.note': 'На телефоне управление появляется автоматически: два стика и кнопки способностей.',
    'vw.specs.platform': 'Windows, браузер, мобильный браузер',
    'vw.specs.version': 'Версия',
    'vw.card.tag': 'Рогалик-шутер · ПК · Браузер',
    'vw.card.short': 'Град пуль, боссы, модули и ежедневный забег. Играй в браузере или на телефоне.',
    'vw.dl.release': 'Все файлы и контрольные суммы — на странице релиза',
    'contact.telegram': 'Telegram',
    'contact.email': 'Почта',
    'contact.vk': 'VK',

    'nf.title': 'Страница не найдена',
    'nf.text': 'Похоже, эту страницу разнесли на пиксели.',
    'nf.home': 'На главную',
    'btn.share': 'Поделиться',
    'toast.copied': 'Ссылка скопирована',
    'support.note': 'Поддержка идёт на арт, музыку и следующую игру.',

    'footer.made': 'Сделано вручную. С любовью к пикселям.',

    'game.back': '← Все игры',
    'game.lead': 'Разрушь картинку до последнего пикселя. Летай на джетпаке, выбирай оружие и смотри, как изображение рассыпается на осколки, а внизу растёт куча обломков.',
    'game.features.title': 'Особенности',
    'game.f1': 'Четыре оружия: дробовик, автомат, бомбы и лазер',
    'game.f2': '23 картинки — от кота на закате до ночного города',
    'game.f3': 'Прокачка оружия и скины персонажа',
    'game.f4': 'Свои картинки: добавь любую фотографию',
    'game.f5': 'Монеты, магазин и орбитальный удар',
    'game.shots.title': 'Скриншоты',
    'game.specs.title': 'Детали',
    'game.note': 'В браузере нельзя добавить свою картинку — это ограничение браузера. В ПК-версии импорт работает.',
    'game.download.note': 'Windows 10/11 · zip · 39 МБ',
    'game.download.fallback': 'Если скачивание не началось — страница релиза',
    'game.trailer.note': 'Трейлер без звука — включи кнопкой в углу.',
    'game.trailer.sound': 'Включить звук',
    'game.trailer.mute': 'Выключить звук',

    'specs.engine': 'Движок',
    'specs.platform': 'Платформы',
    'specs.platform.value': 'Windows, браузер',
    'specs.lang': 'Языки',
    'specs.lang.value': 'Русский, английский',
    'specs.price': 'Цена',
    'specs.price.value': 'Бесплатно',
    'specs.year': 'Год',

    'toast.soon': 'Скоро появится',
    'toast.download': 'Скачивание началось…'
  },

  en: {
    'meta.home.title': 'Hano Games — independent developer',
    'meta.game.title': 'Pixel Rampage — Hano Games',
    'meta.home.desc': 'Indie game developer from Belarus. Breathing life into pixels and code: mechanics, code, UI and builds.',
    'meta.game.desc': 'Pixel Rampage is an arcade game about destroying pictures: four weapons, debris, coins and a shop. Play in the browser or download it for Windows.',

    'nav.games': 'Games',
    'nav.about': 'About me',
    'nav.contact': 'Contacts',
    'nav.support': 'Support',

    'hero.kicker': 'Independent developer',
    'hero.title': 'Hano Games',
    'hero.tagline': 'Breathing life into pixels and code.',
    'hero.bio': 'My name is Hano, I am a developer from Belarus. I make games in Unity — from the first idea to the final build.',
    'hero.free': 'Free. No ads, no subscriptions.',

    'btn.games': 'See games',
    'btn.play': 'Play in browser',
    'btn.download': 'Download for Windows',
    'btn.support': 'Support on Boosty',

    'games.title': 'Games',
    'games.sub': 'Just one for now. But it is only the beginning.',
    'game.tag': 'Arcade · PC · Browser',
    'game.short': 'An arcade about destroying pictures: four weapons, debris, coins and a shop.',
    'game.open': 'Learn more →',

    'about.title': 'About me',
    'about.text1': 'I am an indie developer from Belarus. I have loved playing games since childhood and decided to contribute to gamedev with my own creations. I make games in Unity: I design mechanics, write code, build the UI and take the project all the way to a build.',
    'about.text2': 'I love different genres. I try to make games with interesting mechanics or eye-catching visuals. I commission art from artists — my job is to make everything work and come together into a single picture, so that you enjoy spending your time with it.',
    'about.text3': 'There is one game in the portfolio so far, but it is only the beginning.',

    'skills.gamedesign': 'Game design',
    'skills.unity': 'Unity & C#',
    'skills.godot': 'Godot & GDScript',
    'skills.web': 'Web development',
    'skills.gameplay': 'Gameplay & mechanics',
    'skills.ui': 'UI & interfaces',
    'skills.optimization': 'Optimization',
    'skills.release': 'Build & release',

    'portfolio.title': 'Portfolio',
    'portfolio.sub': 'Games you can play right now!',
    'portfolio.soon.tag': 'In development',
    'portfolio.soon.title': 'Graviton',
    'portfolio.soon.text': 'Still in notes. As soon as there is something to show, it will be here.',

    'support.title': 'Support',
    'support.text': 'Games are free. If you would like to thank me, you can support me on Boosty. It helps make the next games.',
    'support.note': 'Support goes into art, music and the next game.',

    'contact.title': 'Get in touch',
    'contact.sub': 'Open to offers: a game commission, collaboration, or just a question.',

    'nav.community': 'Community',
    'community.title': 'Community',
    'community.text': 'A big friendly community of gamers. A place to find friends and people with the same goals — games, development and everything around them.',
    'community.join': 'Join Discord',

    'vw.tag': 'Roguelite shooter · PC · Browser · Mobile',
    'vw.lead': 'The Void Weaver fights through sectors: bullet hell, graze mechanics, modules and bosses. Every run is a new route across the sector map, and the daily run is one shared challenge.',
    'vw.play': 'Play in browser',
    'vw.download': 'Download for Windows',
    'vw.dl.note': 'Windows 10/11 · exe · 105 MB · no installation',
    'vw.dl.soon': 'The PC build is being uploaded. For now the game is playable in the browser — on PC and mobile.',
    'vw.features.title': 'Features',
    'vw.f1': 'Campaign with bosses and Boss Rush',
    'vw.f2': 'Sector map with elite and anomaly nodes',
    'vw.f3': 'Modules, skins and combo builds',
    'vw.f4': 'Graze mechanics and run ranks',
    'vw.f5': 'Daily run — one shared challenge',
    'vw.f6': 'Run saving, pause and settings',
    'vw.f7': 'Russian and English',
    'vw.f8': 'Mouse controls and touch sticks on mobile',
    'vw.controls.title': 'Controls',
    'vw.c.mouse': 'Mouse',
    'vw.c.lmb': 'LMB',
    'vw.c1': 'move',
    'vw.c2': 'aim',
    'vw.c3': 'fire',
    'vw.c4': 'dash',
    'vw.c5': 'pause',
    'vw.c6': 'language RU/EN',
    'vw.mobile.note': 'On mobile the controls appear automatically: two sticks and ability buttons.',
    'vw.specs.platform': 'Windows, browser, mobile browser',
    'vw.specs.version': 'Version',
    'vw.card.tag': 'Roguelite shooter · PC · Browser',
    'vw.card.short': 'Bullet hell, bosses, modules and a daily run. Play in browser or on mobile.',
    'vw.dl.release': 'All files and checksums are on the release page',
    'contact.telegram': 'Telegram',
    'contact.email': 'Email',
    'contact.vk': 'VK',

    'nf.title': 'Page not found',
    'nf.text': 'Looks like this page was shattered into pixels.',
    'nf.home': 'Back to home',
    'btn.share': 'Share',
    'toast.copied': 'Link copied',

    'footer.made': 'Handmade. With love for pixels.',

    'game.back': '← All games',
    'game.lead': 'Destroy the picture down to the last pixel. Fly with a jetpack, pick a weapon and watch the image shatter into pieces while a pile of debris grows below.',
    'game.features.title': 'Features',
    'game.f1': 'Four weapons: shotgun, rifle, bombs and laser',
    'game.f2': '23 pictures — from a cat at sunset to a night city',
    'game.f3': 'Weapon upgrades and character skins',
    'game.f4': 'Your own pictures: add any photo',
    'game.f5': 'Coins, shop and orbital strike',
    'game.shots.title': 'Screenshots',
    'game.specs.title': 'Details',
    'game.note': 'The browser version cannot import your own pictures — that is a browser limitation. The PC version supports it.',
    'game.download.note': 'Windows 10/11 · zip · 39 MB',
    'game.download.fallback': 'If the download did not start — open the release page',
    'game.trailer.note': 'Trailer plays muted — turn the sound on with the button in the corner.',
    'game.trailer.sound': 'Sound on',
    'game.trailer.mute': 'Sound off',

    'specs.engine': 'Engine',
    'specs.platform': 'Platforms',
    'specs.platform.value': 'Windows, browser',
    'specs.lang': 'Languages',
    'specs.lang.value': 'Russian, English',
    'specs.price': 'Price',
    'specs.price.value': 'Free',
    'specs.year': 'Year',

    'toast.soon': 'Coming soon',
    'toast.download': 'Download started…'
  }
};

/* язык: ?lang= → сохранённый выбор → язык браузера → русский */
function detectLang() {
  const forced = new URLSearchParams(location.search).get('lang');
  if (forced === 'ru' || forced === 'en') return forced;

  const saved = localStorage.getItem('hg-lang');
  if (saved === 'ru' || saved === 'en') return saved;

  const raw = (navigator.languages && navigator.languages[0]) || navigator.language || 'ru';
  const code = raw.toLowerCase().slice(0, 2);

  // кириллической аудитории показываем русский, остальным — английский
  return ['ru', 'be', 'uk', 'kk', 'ky', 'tg', 'hy', 'ka', 'az', 'mo'].includes(code) ? 'ru' : 'en';
}

let lang = document.body.dataset.fixedLang || detectLang();

function t(key) {
  const table = I18N[lang] || I18N.ru;
  return table[key] || I18N.ru[key] || key;
}

function setMeta(attr, key, value) {
  const el = document.querySelector(`meta[${attr}="${key}"]`);
  if (el) el.setAttribute('content', value);
}

function ogImageFor(l) {
  const path = `${ROOT}img/og-home-${l}.png`;
  return location.protocol.startsWith('http') ? `${location.origin}/${path}` : path;
}

function applyLang() {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  const page = document.body.dataset.page;
  const desc = t(page === 'game' ? 'meta.game.desc' : 'meta.home.desc');
  document.title = t(page === 'game' ? 'meta.game.title' : 'meta.home.title');

  // превью ссылок: заголовок, описание и картинка под текущий язык
  setMeta('name', 'description', desc);
  setMeta('property', 'og:title', document.title);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:locale', lang === 'ru' ? 'ru_RU' : 'en_US');
  setMeta('property', 'og:image:alt', t('hero.tagline'));
  if (page !== 'game') setMeta('property', 'og:image', ogImageFor(lang));

  document.querySelectorAll('[data-shot]').forEach(img => {
    img.src = `${ROOT}img/shots/${lang}-${img.dataset.shot}.webp`;
  });

  // обложки с языковыми версиями
  document.querySelectorAll('img[data-src-ru]').forEach(img => {
    const src = lang === "en" ? img.dataset.srcEn : img.dataset.srcRu;
    if (src) img.src = src;
  });

  // трейлер: своя версия под каждый язык, автозапуск без звука
  const trailer = document.getElementById('trailer');
  if (trailer && trailer.dataset.lang !== lang) {
    trailer.dataset.lang = lang;
    const trailerBase = trailer.dataset.videoBase || `${ROOT}media/trailer`;
    const posterBase = trailer.dataset.posterBase || `${ROOT}media/poster`;
    trailer.poster = `${posterBase}-${lang}.jpg`;
    trailer.src = `${trailerBase}-${lang}.mp4`;
    trailer.load();
    playTrailer(trailer);
  }

  const soundButton = document.getElementById('sound-toggle');
  if (soundButton) {
    soundButton.textContent = t(trailer && !trailer.muted ? 'game.trailer.mute' : 'game.trailer.sound');
  }

  const button = document.getElementById('lang');
  if (button) button.textContent = lang === 'ru' ? 'EN' : 'RU';
}

/* ---------- уведомление ---------- */

let toastTimer;

function toast(text) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

/* ---------- кнопки ---------- */

function openExternal(url) {
  window.open(url, '_blank', 'noopener');
}

document.querySelectorAll('[data-action]').forEach(el => {
  el.addEventListener('click', () => {
    const action = el.dataset.action;

    if (action === 'support') {
      if (SUPPORT_URL) openExternal(SUPPORT_URL);
      else toast(t('toast.soon'));
      return;
    }

    if (action === 'download') {
      if (!DOWNLOAD_URL) { toast(t('toast.soon')); return; }
      // обычная ссылка надёжнее window.open: её не блокируют как всплывающее окно
      const link = document.createElement('a');
      link.href = DOWNLOAD_URL;
      link.rel = 'noopener';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast(t('toast.download'));
      return;
    }

    if (action === 'share') {
      const url = location.href.split('#')[0];
      if (navigator.share) {
        navigator.share({ title: document.title, url }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url)
          .then(() => toast(t('toast.copied')))
          .catch(() => toast(url));
      } else {
        toast(url);
      }
      return;
    }

    if (action === 'play') {
      if (PLAY_URL) openExternal(PLAY_URL);
      else toast(t('toast.soon'));
    }
  });
});

/* ---------- язык ---------- */

const langButton = document.getElementById('lang');
if (langButton && langButton.tagName === 'BUTTON') {
  langButton.addEventListener('click', () => {
    lang = lang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('hg-lang', lang);
    applyLang();
  });
}

applyLang();

/* ---------- контакты: показываем только заполненные ---------- */
(function initContacts() {
  const links = {
    'contact-telegram': CONTACTS.telegram ? `https://t.me/${CONTACTS.telegram}` : '',
    'contact-email': CONTACTS.email ? `mailto:${CONTACTS.email}` : '',
    'contact-vk': CONTACTS.vk ? `https://vk.com/${CONTACTS.vk}` : ''
  };

  let any = false;
  Object.keys(links).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (links[id]) {
      el.href = links[id];
      el.hidden = false;
      any = true;
    } else {
      el.remove();
    }
  });

  if (!any) {
    const section = document.getElementById('contact');
    if (section) section.remove();
    const navLink = document.getElementById('nav-contact');
    if (navLink) navLink.remove();
  }
})();

/* ---------- трейлер: звук и пауза ---------- */

function playTrailer(video) {
  if (!video) return;
  // если человек просил меньше анимаций — не запускаем сами
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const attempt = video.play();
  if (attempt && attempt.catch) attempt.catch(() => {});
}

const trailerVideo = document.getElementById('trailer');
const soundButton = document.getElementById('sound-toggle');

if (trailerVideo && soundButton) {
  soundButton.addEventListener('click', () => {
    trailerVideo.muted = !trailerVideo.muted;
    if (!trailerVideo.muted) {
      const attempt = trailerVideo.play();
      if (attempt && attempt.catch) attempt.catch(() => {});
    }
    soundButton.textContent = t(trailerVideo.muted ? 'game.trailer.sound' : 'game.trailer.mute');
  });

  trailerVideo.addEventListener('click', () => {
    if (trailerVideo.paused) playTrailer(trailerVideo);
    else trailerVideo.pause();
  });
}

/* ---------- звёздное небо: редкое плавное мерцание и метеоры ---------- */
(function initSky() {
  const field = document.getElementById('starfield');
  if (!field) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  for (let i = 0; i < 70; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = Math.random() < 0.85 ? 2 : 3;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = (Math.random() * 100).toFixed(2) + '%';
    star.style.top = (Math.random() * 100).toFixed(2) + '%';
    star.style.setProperty('--dur', (4.5 + Math.random() * 4).toFixed(1) + 's');
    star.style.setProperty('--delay', (-Math.random() * 12).toFixed(1) + 's');
    if (reduced) star.style.animation = 'none';
    field.appendChild(star);
  }

  if (reduced) return;

  function fly() {
    const meteor = document.createElement('span');
    meteor.className = 'meteor';
    meteor.style.left = (55 + Math.random() * 45).toFixed(1) + '%';
    meteor.style.top = (Math.random() * 30).toFixed(1) + '%';
    field.appendChild(meteor);
    requestAnimationFrame(function () { meteor.classList.add('go'); });
    setTimeout(function () { meteor.remove(); }, 2200);
    setTimeout(fly, 9000 + Math.random() * 12000);
  }

  setTimeout(fly, 5000 + Math.random() * 5000);
})();
