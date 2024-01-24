import './App.css';
import './App.css'; import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import FilmAnimeseries from './pagec2/FilmAnimeseries';
import Navigation from './pagec/Navigation';
import Filmi from './pagec/Filmi';

export interface JJCON{
  id: number,
  img: string,
  title: string,
  description:string,
  year:number,
  genre:string[]
}

function App() {
  const [JCON, setJCON] = useState([
    {
      id: 1,
      img: "/villi_vonka.jpeg",
      title: "Vonka",
      description: "Давным-давно, задолго до того, как юный Чарли вытянул свой счастливый билет и попал в волшебную шоколадную фабрику, Вилли Вонка был талантливым фантазером, гениальным изобретателем и волшебником, создающим удивительные шоколадные угощения для всех. В один момент он знакомится с представителем племени умпа-лумпа и открывает для себя Лумпаландию, страну полную опасных хищников и самых экзотических вкусов. Воплощая свою мечту, Вонка начинает строительство невероятной фабрики шоколада, которая станет непревзойденной во всем мире.",
      year:2023,
      genre:[
        'Приключения ', 'Комедия ', 'Семейный ', 'Фэнтези ', 'Мюзикл '
    ],
      urlTrailer: 'https://www.youtube.com/watch?v=wxgv_105ebo'
    },
    {
      id: 2,
      img: "/napoli.jpeg",
      title: "16+ Наполеон",
      description: "Фильм представляет собой оригинальный и личный взгляд на происхождение Наполеона Бонапарта и его стремительное, безжалостное восхождение к императору через призму его захватывающих и часто нестабильных отношений с женой и единственной настоящей любовью, Жозефиной.",
      year:2023,
      genre:['Исторический ', 'Эпическая история '],
      urlTrailer: 'https://www.youtube.com/watch?v=OAZWXUkrjPc&ab_channel=SonyPicturesEntertainment'
    },
    {
      id: 3,
      img: "/firct_code.jpeg",
      title: "0+ Перший код",
      description: "Первый код - это фильм, который уже стал самым ожидаемым фильмом среди украинской аудитории не только из сферы IT, но и среди обычного зрителя. Ведь Первый код рассказывает о реальной борьбе IT-специалистов, которые объединились в 300-тысячное виртуальное войско и просто обычных людей, которые с помощью смартфона смогли противостоять врагу. Первый код - о становлении украинской отрасли ИТ от 50-х годов ХХ века, когда украинские инженеры работали над созданием первого компьютера, до настоящего времени, когда ИТ-сектор стал важной частью борьбы с россией...",
      year:2023,
      genre:['Исторический ', 'Эпическая история ' ],
      urlTrailer: 'https://www.youtube.com/watch?v=uZ0xRNe_JG4&ab_channel=TheFirstCode'
    },
    {
      id: 4,
      img: "/game.jpeg",
      title: "12+ Голодні ігри: Балада про співочих",
      description: "За много лет до того, как стать тираническим президентом Панема, 18-летний Кориолан Сноу — последняя надежда своего угасающего рода, некогда гордой семьи, потерявшей благородство в послевоенном Капитолии. С приближением 10-х ежегодных Голодных игр молодой Сноу встревожен, когда его назначают наставником Люси Грей Бэрд, девушки-трибуна из бедного Дистрикта 12. Но после того, как Люси Грей привлекает внимание всего Панема, дерзко спев во время церемонии жатвы, Сноу думает, что сможет переломить ситуацию в свою пользу. Объединив свои инстинкты шоумена и политическую смекалку, Сноу и Люси Грей попадают в водоворот событий в борьбе за выживание. В конечном итоге они выяснят, кто из них певчая птица, а кто змея.",
      year:2023,
      genre:['Исторический ' , 'Эпическая история '],
      urlTrailer: 'https://www.youtube.com/watch?v=qb80CwIbL4Y&ab_channel=planetakino'
    },
    {
      id: 5,
      img: "/gendelik.jpeg",
      title: "12+ Пограбування по-українськи",
      description: "Життя в Алекса (Остап Халавко) досить просте та прогнозоване. З дня у день він вчить дітей плавати. На зарплатню тренера сильно не пошикуєш, тож радостей в нього не багато. Та якось хлопець закохується в казково вродливу зірку (Даша Астаф’єва). Підкорити красуню не так вже й легко. Та й грошей для цього знадобиться чимало. Тому Алекс вирішує пограбувати банк. Так він і гроші роздобуде, і враження на дівчину справить. Але ж не варто забувати, що гроші далеко не головна річ, якщо мова йде про справжнє кохання.Комедія «Пограбування по-українськи» є третім фільмом молодіжного розважального телеканалу НЛО TV. Перші дві стрічки – «Інфоголік» та «Зустріч однокласників» – вийшли у 2017 та 2019 роках. Головну роль у комедії зіграв актор Остап Халавко. Він знімався у рекламі, серіалах та кіно, приймав участь у дубляжі українською мовою повнометражних мультфільмів. ",
      year:2023,
      genre:['Исторический', 'Эпическая история'],
      urlTrailer: 'https://www.youtube.com/watch?v=UXm8UQ-MDII&ab_channel=Гумор24на7'
    },
    {
      id: 6,
      img: "/kvitka.jpeg",
      title: "16+ Вбивці квіткової повні",
      description: "Індіанці з племені оседжів у 1920-х роках знайшли на своїх землях фонтани з нафти. Родовища виявились надзвичайно прибутковими, тож індіанці купалися у грошах. У ці краї до свого дядька Вільяма (Роберт Де Ніро) у пошуках роботи приїхав Ернест (Леонардо ДіКапріо), ветеран Першої світової війни. Хитрий та завбачливий Вільям взяв Ернеста під опіку та часто давав поради й настанови. Зрештою небіж одружився на жінці з племені оседжів Моллі (Лілі Гладстоун). У розумінні Вільяма усіма статками індіанців мали б володіти білі люди. Він йшов до своєї мети наполегливо і безжально.Кримінальна драма «Вбивці квіткової повні» – нова робота Мартіна Скорсезе з оскароносними Робертом Де Ніро та Леонардо ДіКапріо у головних ролях. У основі сюжету книга Еріка Рота, заснована на реальних подіях. Готуючись до зйомок, Скорсезе спілкувався з вождем племені оседжів та корегував фільм. Усі зйомки велися у Оклахомі, у тій місцевості, де і відбувалися згадані події. Бюджет фільму склав $200 млн.",
      year:2023,
      genre:['Исторический', 'Эпическая история'],
      urlTrailer: 'https://www.youtube.com/watch?v=wxgv_105ebo'
    },
    {
      id: 7,
      img: "/kvitka.jpeg",
      title: "16+++ Вбивці квіткової повні",
      description: "ХЗ",
      year:2023,
      genre:['Исторический', 'Эпическая история'],
      urlTrailer: 'https://www.youtube.com/watch?v=7T4ym2KtNwo&ab_channel=B%26HFilmDistributionCompany'
    },
    {
      id: 8,
      img: "/kvitka.jpeg",
      title: "16++++ Вбивці квіткової повні",
      description: "ХЗ",
      year:2023,
      genre:['Исторический', 'Эпическая история'],
      urlTrailer: 'https://www.youtube.com/watch?v=wxgv_105ebo'
    },
  ]);




  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path='/' ></Route>
        <Route path='/pagec' element={<Filmi  arrtest={JCON} />}></Route>
        <Route path='/pagec2/:id' element={<FilmAnimeseries arrtest={JCON} />}></Route>
      </Route>

    </Routes>
  );
}
export default App;