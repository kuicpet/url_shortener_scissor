import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Logo from '../../assets/Logo.svg';
import useAuthStore from '../../store/authStore';

const Dashboard = () => {
  const router = useRouter();
  const { userProfile } = useAuthStore();

  useEffect(() => {
    if (!userProfile) {
      router.push('/login');
    }
  });

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        await axios
          .get(`/api/track/`)
          .then((response) => console.log(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUrls();
  }, []);
  return (
    <div className="flex justify-center min-h-[100vh] w-full">Dashboard</div>
  );
};

export default Dashboard;
