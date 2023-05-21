import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;
    if (slug) {
      // Redirect to URL corresponding to the slug
      window.location.href = `/api/redirect/${slug}`;
    }
  }, [router.query]);
  return null;
};

export default RedirectPage;
