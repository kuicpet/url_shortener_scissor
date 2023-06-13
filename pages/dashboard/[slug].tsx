import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import { Navbar } from '../../components';
import { formatTimestamp } from '../../utils/formatTimestamp';
import { convertIPtoLocation } from '../../utils/getGeoloaction';

const pageSize = 10;
const DashboardPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [urlDetails, setUrlDetails] = useState<any>({});
  const [page, setPage] = useState(1);
  const steps = page * pageSize - pageSize;

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        await axios.get(`/api/track/${slug}`).then((response) => {
          console.log(response.data);
          setUrlDetails(response?.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUrls();
  }, [slug]);
  return (
    <div>
      <Navbar />
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
        <div className="flex flex-col lg:w-[82%] h-auto border border-[#0065FE] m-3 p-2 rounded-md">
          <h2 className="text-xl font-semibold">Shortened Url Details</h2>
          <div className="border border-[#0065FE] my-3 rounded-lg">
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
                {urlDetails?.data?.clicks?.length} clicks
              </li>
            </ul>
          </div>
          <div className="border border-[#0065FE] my-3 h-auto rounded-lg p-2">
            {urlDetails &&
              urlDetails?.data?.clicks
                ?.slice(steps, steps + pageSize)
                .map((item: any, i: number) => (
                  <ul key={i} className="">
                    <li className="flex justify-evenly border p-1">
                      Clicked at {formatTimestamp(item.clickedAt)}{' '}
                      <span className="font-semibold">
                        IP Address {item.ipAddress}
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
