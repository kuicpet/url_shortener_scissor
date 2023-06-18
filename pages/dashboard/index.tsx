import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';
import { CiUser } from 'react-icons/ci';
import Logo from '../../assets/Logo.svg';
import useAuthStore from '../../store/authStore';
import { Loader } from '../../components';

const Dashboard = () => {
  const router = useRouter();
  const { userProfile }: any = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [urls, setUrls]: any = useState([]);
  const chartRef = useRef<HTMLCanvasElement>(null);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  useEffect(() => {
    if (!userProfile) {
      router.push('/login');
    }
  });

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        setLoading(true);
        await axios.get(`/api/track/`).then((response) => {
          setUrls(response?.data?.urls);
          // console.log(response?.data?.urls);
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUrls();
  }, []);

  const filteredUrls = urls.filter((url: any) => url.clicks.length > 1);
  const chartData = {
    labels: filteredUrls.map((url: any) => url.shortUrl),
    datasets: [
      {
        label: 'Clicks',
        data: filteredUrls.map((url: any) => url.clicks.length),
        backgroundColor: '#1f78b4',
        borderColor: '#1f78b4',
        yAxisID: 'y',
      },
      {
        label: 'IpAddresses',
        data: filteredUrls.map((url: any) =>
          url.clicks.map((click: any) => click?.ipAddress.length)
        ),
        backgroundColor: '#a6cee3',
        borderColor: '#a6cee3',
        yAxisID: 'y1',
      },
    ],
  };

  const chartOptions: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Url Ananlytics',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="flex  h-auto w-full lg:flex-row flex-col">
      {loading && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
      <div className="flex flex-col lg:w-[20%] bg-white lg:h-[92vh]  m-3 rounded-sm p-2">
        <div className="flex items-center justify-center  px-2">
          <p className="font-semibold text-lg">Hi {userProfile?.username}</p>
        </div>
      </div>
      <div className="flex flex-col lg:w-[80%] h-auto m-3 p-2 rounded-md bg-white">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Dashboard;
