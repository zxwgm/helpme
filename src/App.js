import { useState, useEffect } from 'react';

const API_KEY =
  'test_97ced6b4e97fb289fc622eed2d0000715cc4be5be7a6e998f968ef6a7d7ade9e5fec49e63508ef9593e5360d01be762f';

async function getData(nickname) {
  const data = await fetch(
    'https://open.api.nexon.com/fconline/v1/id?nickname=' + nickname,
    {
      headers: {
        'x-nxopen-api-key': API_KEY,
      },
    }
  ).then((response) => response.json());

  return data;
}

function App() {
  const [id, setId] = useState([]);

  useEffect(() => {
    async function test() {
      const nicknameArray = ['대구통닭', 'tarky19', '섭이s2'];
      for (const name of nicknameArray) {
        const nickname = await getData(name);
        setId((id) => [...id, nickname.ouid]);
      }
    }
    test();
  }, []);

  return (
    <>
      <header>헤더</header>
      <div>
        {id.map((it) => (
          <li>{it}</li>
        ))}
      </div>
      <footer>푸터</footer>
    </>
  );
}

export default App;