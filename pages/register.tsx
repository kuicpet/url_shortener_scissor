import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const RegisterPage = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios
        .post(`/api/users/register`, {
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          router.push('/login');
        });
    } catch (error) {
      console.error(error);
    }
  };
  return <div>register</div>;
};

export default RegisterPage;
