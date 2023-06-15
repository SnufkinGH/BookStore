import { useContext, useEffect, useState } from "react";
import { fGet, fSend } from "../Service/fetchS";
import { Context } from "../main";

const Catalog = () => {

  const {user} = useContext(Context);
  console.log(user);
  console.log(`${localStorage.getItem('token')}`);

  const [catalog, setCatalog] = useState([]);
  const [ixAuthor, setIxAuthor] = useState({});

  useEffect(() => {
    Init();
  }, []);

  useEffect(() => {
    catalog.forEach(async item => {
        await getAuthor(item.author_id);
    });
  }, [catalog]);

  async function Init() {
    await getCatalog();
  }

  async function getAuthor(author_id) {
    const vAuthor = await fSend('/author/get-one', {
      author_id: author_id
    });
   
    //console.log(author_id)
    setIxAuthor(current => {return ({
      ...current,
      [author_id]: vAuthor.data
    })}
    );
    console.log(ixAuthor);    
  }

  async function getCatalog() {
    const cat = await fGet('/catalog');
    setCatalog(cat.data);
  }

  return (
  <>    
    <div className = "intro">
      <div className = "container">
        <table className = "table" id="table">
          <caption>Каталог</caption>
          <tr>
            <th>Название книги</th>
            <th>Автор</th>
            <th>Количество в наличии</th>
          </tr>
          {
            catalog.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.title}</td><td>{ixAuthor[item.author_id]?.name || 'Нет информации'}</td><td>{item.amount} книг</td><td><button className="button"> Добавить в заказ</button></td>
                </tr>
              );
            })
          }
        </table>
      </div>
      </div>
    </>
    )
}

export default Catalog;