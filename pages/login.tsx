import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios
        .post(`/api/users/login`, {
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          router.push('/dashboard');
        });
    } catch (error) {
      console.error(error);
    }
  };
  return <div>login</div>;
};

export default LoginPage;
