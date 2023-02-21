import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

interface ResetPasswordParams {
  userId: string;
  token: string;
}

const ResetPasswordPage = () => {
  const location = useLocation();
  const { userId, token } = useParams<{ userId: string, token: string }>();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    axios.post('/api/reset-password', {
      userId: userId,
      token: token,
      password: password
    })
      .then(response => {
        alert("Votre mot de passe a été réinitialisé avec succès. Vous pouvez maintenant vous connecter.");
        window.location.href = "/login";
      })
      .catch(error => {
        alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
      });
  };

  return (
    <div>
      <h1>Réinitialisation de mot de passe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Nouveau mot de passe :</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirmer le nouveau mot de passe :</label>
          <input type="password" id="confirm-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button type="submit">Réinitialiser le mot de passe</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
