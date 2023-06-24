import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import Image from 'next/image';
import Link from 'next/link';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import Apple from '../assets/apple.png';
import Google from '../assets/logo_googleg_48dp.png';
import { Button, Company, Loader, Meta } from '../components';
import useAuthStore from '../store/authStore';

const LoginPage = () => {
  const { loginUser } = useAuthStore();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios
        .post(`/api/users/login`, {
          email,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            toast.success(response?.data?.message, {
              style: {
                color: 'white',
                backgroundColor: 'green',
              },
            });
            //console.log(response.data);
            loginUser(response?.data);
            router.push('/dashboard');
          } else {
            setLoading(false);
            toast.error(response?.data?.message, {
              style: {
                color: 'white',
                backgroundColor: 'red',
              },
            });
            // console.log(response.data.message);
            return;
          }
          // router.push('/dashboard');
        });
      setLoading(false);
    } catch (error: any) {
      // console.error(error);
      toast.error(error?.response?.data?.message, {
        style: {
          color: 'white',
          backgroundColor: 'red',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Meta title="Login" />
      <section className="h-full flex  justify-center m-5 ">
        <Toaster />
        {loading && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
          </div>
        )}
        <div className="flex flex-col justify-center items-center bg-white lg:w-1/2 p-2 rounded-md">
          <div>
            <h2 className="my-4">Log in with</h2>
          </div>
          <div className="flex w-3/4  my-3 justify-between gap-2">
            <button className="text-lg flex items-center justify-center bg-[#0065FE] text-white rounded-sm h-[40px] w-1/2 cursor-not-allowed">
              <span className="mx-2">
                <Image src={Google} alt="" />
              </span>
              Google
            </button>
            <button className="text-lg flex items-center justify-center bg-[#0065FE] text-white rounded-sm h-[40px] w-1/2 cursor-not-allowed">
              <span className="mx-2">
                <Image src={Apple} alt="" />
              </span>
              Apple
            </button>
          </div>
          <div className="w-full flex items-center text-[#5C6F7F] my-3">
            <div className="w-1/2 px-3">
              <hr className="w-full border border-[#A0B1C0]" />
            </div>
            Or
            <div className="w-1/2 px-3">
              <hr className="w-full border border-[#A0B1C0]" />
            </div>
          </div>
          <div className=" my-3 w-full mx-5 h-full">
            <form onSubmit={handleLogin} className="m-2">
              <div>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="border-2 border-[#005AE2]  text-black my-5 text-sm   outline-none block w-full p-3 rounded-lg placeholder:text-[#A0B1C0] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center border-2 border-[#005AE2] rounded-lg">
                <input
                  required
                  minLength={6}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="text-black ml-1  text-sm  focus:ring-black focus:border-black outline-none block w-[95%] p-3  placeholder:text-[#A0B1C0]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="px-5 text-[#005AE2]"
                  onClick={() => handleTogglePassword()}
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </button>
              </div>
              <div className="text-right text-[#3284FF] my-1 hover:underline">
                <Link href={'/'}>Forgot your Password?</Link>
              </div>
              <div>
                <Button
                  disabled={!email || !password || password.length < 6}
                  loading={loading}
                  altText="Logging in..."
                  text="Log in"
                  type="submit"
                  className="flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 bg-[#005AE2] my-4  font-bold outline-none border-none text-md w-full  px-5 py-2.5 text-center text-white rounded-full hover:bg-[#0e54bd]"
                />
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[#5C6F7F]">
                  Don&apos;t have an account,{' '}
                  <Link
                    href={'/register'}
                    className="text-right text-[#3284FF] hover:underline"
                  >
                    Sign up
                  </Link>{' '}
                </span>
              </div>
              <div className="flex items-center justify-center flex-col my-4">
                <p className="text-[#A0B1C0] text-sm">
                  By signing in with an account, you agree to{' '}
                </p>
                <p className="text-sm">
                  Sciccor&apos;s{' '}
                  <span className="font-[500] text-[#5C6F7F]">
                    Terms of Service, Privacy Policy
                  </span>{' '}
                  and{' '}
                  <span className="font-[500] text-[#5C6F7F]">
                    Acceptable Use Policy.
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Company />
    </>
  );
};

export default LoginPage;
