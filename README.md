# Test task for Allfuneral by Tsay Vladislav

Техническое задание - [открыть](http://135.181.35.61:2112/)

## Env

- Created with: CRA
- Node -v: v16.15.0

## Start

- npm install
- npm run start:dev

## What was used

- `React v18.2.0` - CRA
- `React Router Dom` - для навигации между страницами
- `React Dropzone` - для drag&drop добавления изображений
- `ClassNames` - для удобной работы с CSS Modules
- `SASS/SCSS`
- `env-cmd` - для запуска/билда с конфигов .env под дев и прод окружение
- `axios` - для rest
- `typescript` - для типизации данных
- `storybook` - для тестирования компонентов
- `createPortal` - для создания модального окна

## API Methods

- GET /auth - `сделано`
- GET /companies/ID - `сделано`
- PATCH /companies/ID - не сделано
- DELETE /companies/ID - `сделано`
- POST /companies/ID/image - не сделано
- DELETE /companies/ID/image/IMAGE_NAME - не сделано
- GET /conacts/ID - `сделано`
- PATCH /conacts/ID - `сделано`

Попытался отрендерить одним компонентом данные из блока "ОБЩАЯ ИНФОРМАЦИЯ" и "КОНТАКТНЫЕ ДАННЫЕ", но из-за этого в дальнейшем не очень удобно было прикрутить редактированние данных, переделывать компонент уже не стал, так как не хватило времени, то же с запросами на фото. `Вывод`: изначально недостаточно хорошо продумал структуру компонентов.

## Peculiarities

- `Axios` - Добавление токена авторизации в дефолтные заголовки для всех запросов в файле App.tsx, все запросы вынесены в `RequestService.tsx`
- `Constants` - различные константы выведенны в `.env` файл и в `Constants` папку
- `Assets` - все статичные иконки выведены в `/Helpers/Icons` и их можно удобно доставать в остальных компонентах
- `Styles/SCSS` - для стилизации использовались: `SCSS + BEM + CSS Modules + CSS Vars`
- `Router` - обработана страница `404`
- `Button` - имеет различные вариации стилей/иконок, можно посмотреть в `storybook`
- `createPortal` - все модальные окна сделаны при помощи порталов

## Not done

- Несколько АПИ методов не обработаны
- Адаптив под меньшие разрешения экраны
- Валидация формы с инпутами
- jest/screen тесты
