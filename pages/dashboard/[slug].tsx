import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const DashboardPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        await axios
          .get(`/api/track/${slug}`)
          .then((response) => console.log(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUrls();
  }, [slug]);
  return <div>{slug}</div>;
};

export default DashboardPage;
