import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import Logo from '../../assets/Logo.svg';

const Dashboard = () => {
  const router = useRouter();

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
    <div className="flex justify-center min-h-[100vh] w-full">
      <div className="flex  h-1/2  w-full border-2 border-black">
        <Link
          href={`/`}
          className="flex items-center justify-between p-2 my-2 mx-5"
        >
          <Image src={Logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
