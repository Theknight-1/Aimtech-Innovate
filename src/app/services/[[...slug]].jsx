import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ServicePage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    // Handle slug changes, fetch data, etc.
  }, [slug]);

  return (
    <div>
      {/* Your service page content */}
    </div>
  );
};

export default ServicePage;