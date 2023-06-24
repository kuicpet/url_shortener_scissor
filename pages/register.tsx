import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { Button, Company, Loader, Meta } from '../components';
import Link from 'next/link';
import useAuthStore from '../store/authStore';
import Google from '../assets/logo_googleg_48dp.png';
import Apple from '../assets/apple.png';

const RegisterPage = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const { userProfile, registerUser } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords donot match', {
        style: {
          color: 'white',
          backgroundColor: 'red',
          width: '300px',
        },
      });
      return;
    }
    try {
      setLoading(true);
      await axios
        .post(`/api/users/register`, {
          username,
          email,
          password,
        })
        .then((response) => {
          toast.success(response?.data?.message, {
            style: {
              color: 'white',
              backgroundColor: 'green',
            },
          });
          registerUser(response?.data);
          // console.log(response.data);
          router.push('/login');
        });
      setLoading(false);
    } catch (error: any) {
      console.error(error);
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

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <>
      <Meta title="Registration" />
      <section className="h-auto flex  justify-center m-5 ">
        <Toaster />
        {loading && (
          <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
            <Loader />
          </div>
        )}
        <div className="flex flex-col justify-center items-center bg-white lg:w-1/2 p-2 rounded-md">
          <div>
            <h2 className="my-4">Sign up with</h2>
          </div>
          <div className="flex w-3/4  my-3 justify-between gap-2">
            <button className="text-lg flex items-center justify-center bg-[#0065FE] text-white rounded-sm h-[40px] w-1/2">
              <span className="mx-2">
                <Image src={Google} alt="" />
              </span>
              Google
            </button>
            <button className="text-lg flex items-center justify-center bg-[#0065FE] text-white rounded-sm h-[40px] w-1/2">
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
            <form onSubmit={handleRegister} className="m-2">
              <div>
                <input
                  required
                  type="text"
                  placeholder="Username"
                  className="border-2 border-[#005AE2]  text-black my-5 text-sm  focus:ring-black focus:border-black outline-none block w-full p-3 rounded-lg placeholder:text-[#A0B1C0] "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  required
                  type="email"
                  placeholder="Email address"
                  className="border-2 border-[#005AE2]  text-black my-5 text-sm  focus:ring-black focus:border-black outline-none block w-full p-3 rounded-lg placeholder:text-[#A0B1C0] "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center border-2 border-[#005AE2] rounded-lg my-4">
                <input
                  required
                  minLength={6}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="text-black ml-1  text-sm   outline-none block w-[95%] p-3  placeholder:text-[#A0B1C0]"
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
              <div className="flex items-center justify-center border-2 border-[#005AE2] rounded-lg my-4">
                <input
                  required
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Retype Password"
                  className=" text-black  text-sm ml-1   outline-none block w-[95%] p-3  placeholder:text-[#A0B1C0]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={6}
                />
                <button
                  type="button"
                  className="px-5 text-[#005AE2]"
                  onClick={() => handleToggleConfirmPassword()}
                >
                  {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                </button>
              </div>
              <div className="text-left">
                <small className="text-[#A0B1C0]">
                  6 or more characters, one number, one uppercase & one lower
                  case.
                </small>
              </div>
              <div>
                <Button
                  disabled={
                    !username ||
                    !email ||
                    !password ||
                    !confirmPassword ||
                    password.length < 6
                  }
                  loading={loading}
                  altText="Signing up with Email..."
                  text="Sign up with Email"
                  type="submit"
                  className="flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 bg-[#005AE2] my-4  font-bold outline-none border-none text-md w-full  px-5 py-2.5 text-center text-white rounded-full hover:bg-[#0e54bd] h-[40px]"
                />
              </div>
              <div className="flex items-center justify-center">
                <span className="text-[#5C6F7F]">
                  Already have an account,{' '}
                  <Link
                    href={'/login'}
                    className="text-right text-[#3284FF] hover:underline"
                  >
                    Login
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

export default RegisterPage;
