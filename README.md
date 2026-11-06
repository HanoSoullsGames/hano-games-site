# Hano Games — сайт

Портфолио-сайт: главная, страница игры Pixel Rampage и английская версия `/en/`.
Хостинг — Netlify, проект `hano-games`.

## Структура

```
index.html          главная (RU)
en/index.html       главная (EN), генерируется из index.html
game.html           страница игры
game/               WebGL-сборка (index.html + BuildN/ + TemplateData/)
css/style.css       все стили
js/main.js          язык, кнопки, звёздный фон
img/                логотип, превью, скриншоты
_headers            заголовки для Netlify (Content-Encoding для .br)
```

## Как обновить игру

1. В Unity: `Tools → Build → 3. Собрать WebGL`.
2. Скопировать `Builds/WebGL` в `site/game/`, **новую папку сборки назвать `Build3`, `Build4`** и т.д.
   В `site/game/index.html` поменять `var buildUrl = "BuildN";`.
3. Пересобрать архив сайта и залить в Netlify (Deploys → перетащить папку или zip).

Важно: имя папки сборки должно меняться при каждом обновлении, иначе у игроков
может остаться старый кэш и игра упадёт с `memory access out of bounds`.

## Как обновить Windows-версию

1. В Unity: `Tools → Build → 2. Собрать Windows x64`.
2. Упаковать `Builds/Windows` в zip (без папки `*_BurstDebugInformation_DoNotShip`).
3. GitHub → Releases → новый тег (`v0.3.0` и т.д.) → прикрепить zip.
4. В `js/main.js` обновить `DOWNLOAD_URL` на новый тег.

## Ссылки

- Сайт: https://hano-games.netlify.app
- itch.io: https://hanosoulls.itch.io/pixel-rampage
- GitHub Releases: https://github.com/HanoSoullsGames/pixel-rampage/releases
- Метрика: счётчик 114110153

## Локальный просмотр

Запустить `serve_site.py` из корня workspace — сайт на `http://127.0.0.1:8099`.
