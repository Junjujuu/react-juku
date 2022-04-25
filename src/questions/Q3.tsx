import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/Q.css';
import axios from "axios";
/**
 * Q3
 * 問題：APIを叩いて値を取得し、一覧表示してください！
 *
 * 使用するAPI > jsonplaceholder
 * https://jsonplaceholder.typicode.com/users
 *
 * 使用してほしいライブラリ
 * axios
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */
const Q3 = () => {
  const [data, setData] = useState("");
  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const str = JSON.stringify(response.data, null, "\t");
      setData(str);
    });
  }
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>
            src/questions/Q3.tsx
            にAPIを叩いて値を取得し、一覧表示するコードを実装してください！
          </h1>
          <button onClick={fetchData}>データ取得</button>
          <pre>{data}</pre>
        </div>
      </main>
    </Layout>
  );
};

export default Q3;
