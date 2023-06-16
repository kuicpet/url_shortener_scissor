import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Logo from '../../assets/Logo.svg';
import useAuthStore from '../../store/authStore';
import { Loader } from '../../components';

const Dashboard = () => {
  const router = useRouter();
  const { userProfile }: any = useAuthStore();
  const [loading, setLoading] = useState(false);

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
    <div className="flex  h-auto w-full lg:flex-row flex-col">
      {loading && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
      <div className="flex justify-center lg:w-[20%] bg-white lg:h-[92vh]  m-3 rounded-sm p-2">
        <p>Hello {userProfile?.username}</p>
      </div>
      <div className="flex flex-col lg:w-[80%] h-auto m-3 p-2 rounded-md bg-white">
        Details
      </div>
    </div>
  );
};

export default Dashboard;
