import Layout from '../components/Layout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Q.css';
import { useState } from 'react';
import { loginUser } from '../plugins/firebase';

/**
 * Q6
 * 問題：Firebase Auth をつかってログイン機能を使ってください
 *
 * がんばってね！
 *
 * by ゆうじろう
 *
 */

const Q6login = () => {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSignIn = () => {
    console.log('==== signIn start ====');
    const user = loginUser(emailAddress, password);
    if (isLogin) {
      navigate('/question6/main');
    }

  };
  return (
    <Layout>
      <main className="questionWrapper">
        <div className="questionZone">
          <h1>Firebase authを用いてログインが実装できるようにしてください！</h1>
          <h1>login</h1>
          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(email) => setEmailAddress(email.target.value)} />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined" onChange={(password) => setPassword(password.target.value)}
            />
          </div>
          <br />
          <div>
            <Button variant="contained" onClick={handleSignIn}>
              Login
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Q6login;
