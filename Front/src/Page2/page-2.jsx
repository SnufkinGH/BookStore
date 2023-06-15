const Page2 = () => {
  return (
    <>
    <header className = "header">
        <div className = "container">
          <div className = "header_inner">
            <nav className="nav">
              <a className = "nav_link" href="Catalog.html">Каталог</a>
              <a className = "nav_link" href="page-2.html">Мои заказы</a>
              <a className = "nav_link" href="Main.html">Выйти</a>
            </nav>
          </div>
        </div>
      </header>
      <div className="intro">
        <table className = "table">
          <caption>Каталог</caption>
          <tr>
            <th>№ заказа</th>
            <th>Название книги</th>
            <th>Автор</th>
            <th>ФИО продавца</th>
            <th>Статус заказа</th>
            <th>Стоимость</th>
            <th>Дата доставки</th>
          </tr>
          <tr>
            <td>1.</td>
            <td>Гарри Поттер и Тайная комната</td><td>Дж. Роулинг</td><td>А.Алексеев</td><td>Принят</td><td>1500р</td><td>25.04.23</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Властелин Колец. Братство Кольца</td><td>Дж. Толкин</td><td>С.Сергеев</td><td>Доставлен</td><td>1345р</td><td>21.04.23</td>
          </tr>
          <tr>
            <td  >3.</td>
            <td>Властелин Колец. Братство Кольца</td><td>Дж. Толкин</td><td>С.Сергеев</td><td>В работе</td><td>1345р</td><td>22.04.23</td>
          </tr>
          <tr>
          <td>Хоббит.Пустошь Смауга</td><td>Дж. Толкин</td><td>А.Николаев</td><td>Доставлен</td><td>1345р</td><td>21.04.23</td>
          </tr>
          <tr>
          <td>Война и мир</td><td>Л.Тостой</td><td>С.Сергеев</td><td>В работе</td><td>850р</td><td>25.04.23</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Page2;