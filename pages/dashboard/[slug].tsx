import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import moment from 'moment/moment';
import { BiTimeFive } from 'react-icons/bi';
import { Loader, Navbar } from '../../components';
import { formatTimestamp } from '../../utils/formatTimestamp';
import useAuthStore from '../../store/authStore';

const pageSize = 10;
const DashboardPage = () => {
  const { userProfile } = useAuthStore();
  const router = useRouter();
  const { slug } = router.query;
  const [urlDetails, setUrlDetails] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const steps = page * pageSize - pageSize;

  useEffect(() => {
    if (!userProfile) {
      router.push('/login');
    }
  });

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        setLoading(true);
        await axios.get(`/api/track/${slug}`).then((response) => {
          console.log(response.data);
          setUrlDetails(response?.data);
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUrl();
  }, [slug]);
  return (
    <div>
      <div className="h-auto w-full flex lg:flex-row flex-col">
        <div className="flex justify-center lg:w-[18%] lg:h-[92vh]  m-3">
          <ul className="w-full text-center">
            <li className="mb-2">
              <h2 className="text-xl font-semibold">Url Analytics</h2>
            </li>
            <li className="flex justify-center p-2 rounded-md bg-[#0065FE] text-white">
              <Link href={'/'}>{slug}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:w-[82%] h-auto m-3 p-2 rounded-md">
          <h2 className="text-xl font-semibold">Shortened Url Details</h2>
          <div className="border my-3 rounded-lg bg-white">
            <ul className="p-2">
              <li>
                <span className="font-semibold">Original Url:</span>{' '}
                {urlDetails?.data?.originalUrl}
              </li>
              <li>
                <span className="font-semibold">Shortened Url:</span> {slug}
              </li>
              <li>
                <span className="font-semibold"> Number of Clicks:</span>{' '}
                {urlDetails?.data?.clicks?.length || 0} clicks
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between w-full border my-3 h-auto rounded-lg p-2 bg-white">
            {loading && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
            {urlDetails &&
              urlDetails?.data?.clicks
                ?.slice(steps, steps + pageSize)
                .map((item: any, i: number) => (
                  <ul key={i} className="">
                    <li className="flex justify-evenly border p-1">
                      <span className="flex items-center justify-center">
                        Clicked :
                        <BiTimeFive className="mx-1" />
                        {moment(formatTimestamp(item.clickedAt)).fromNow()}{' '}
                        {formatTimestamp(item.clickedAt)}{' '}
                      </span>
                      <span className="font-semibold">
                        IP Address {item.ipAddress} {`(${item.location})`}
                      </span>
                    </li>
                  </ul>
                ))}
          </div>
          <div className="flex justify-between p-2">
            <button
              disabled={page <= 1}
              className="border-2 border-[#0065FE] font-semibold
              text-[#0065FE] hover:bg-[#0065FE] py-1
              hover:text-white w-1/4 rounded-full cursor-pointer
              disabled:bg-[#b4bcc3] disabled:border-none 
              disabled:text-white disabled:cursor-not-allowed outline-none"
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <button
              disabled={page >= urlDetails?.data?.clicks?.length / pageSize}
              className="py-1 font-semibold border-2 border-[#0065FE] 
              text-[#0065FE] hover:bg-[#0065FE] hover:text-white w-1/4 
              rounded-full cursor-pointer disabled:bg-[#b4bcc3] disabled:border-none 
              disabled:text-white disabled:cursor-not-allowed outline-none"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
