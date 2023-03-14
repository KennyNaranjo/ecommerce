import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';
import { useContext, useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const { updateUserData } = useContext(UserContext);
  const [formEmail, setFormEmail] = useState('');
  const [formPass, setFormPass] = useState('');
  const [error, setError] = useState({
    message: '',
    ok: false,
  });

  console.log({ formEmail }, { formPass });

  const handleLogin = (e) => {
    e.preventDefault();

    if (formEmail === 'kn@gmail.com' && formPass === 'kn147') {
      updateUserData({
        email: formEmail,
      });
      navigate('/home');
    } else {
      setError({
        message: 'Error',
        ok: true,
      });
    }
  };

  const handleEmailForm = (e) => {
    const value = e.target.value;

    setFormEmail(value);
  };
  const handlePassForm = (e) => {
    const value = e.target.value;
    setFormPass(value);
  };

  return (
    <div>
      <h1>Welcome Gamer</h1>

      <form
        onSubmit={(e) => handleLogin(e)}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formEmail}
          onChange={(e) => handleEmailForm(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formPass}
          onChange={(e) => handlePassForm(e)}
        />
        <button type="submit">Login Button</button>
      </form>
      {error.ok && <p>ERROR!!!</p>}
    </div>
  );
}

export default LoginPage;
