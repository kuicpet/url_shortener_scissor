import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axioss from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const Redirect: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    const { slug } = router.query;

    const trackClick = async () => {
      try {
        await axioss.get(`/api/track?slug=${slug}`);
      } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.message);
      }
    };
    trackClick();
  }, [router.query]);

  return null;
};

export default Redirect;
