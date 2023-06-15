import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Apple from '../assets/apple.png';
import Google from '../assets/logo_googleg_48dp.png';
import { Button, Loader } from '../components';
import Link from 'next/link';

const RegisterPage = () => {
  const router = useRouter();
  const { redirect } = router.query;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userbane, setUserbane] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios
        .post(`/api/users/register`, {
          email,
          password,
        })
        .then((response) => {
          console.log(response.data);
          router.push('/login');
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="h-auto flex  justify-center m-5 ">
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
                type="text"
                placeholder="Username"
                className="border-2 border-[#005AE2]  text-black my-5 text-sm  focus:ring-black focus:border-black outline-none block w-full p-3 rounded-lg placeholder:text-[#A0B1C0] "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="border-2 border-[#005AE2]  text-black my-5 text-sm  focus:ring-black focus:border-black outline-none block w-full p-3 rounded-lg placeholder:text-[#A0B1C0] "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="border-2 border-[#005AE2]  text-black  text-sm  focus:ring-black focus:border-black outline-none block w-full p-3 rounded-lg placeholder:text-[#A0B1C0] my-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Retype Password"
                className="border-2 border-[#005AE2]  text-black  text-sm  focus:ring-black focus:border-black outline-none block w-full p-3 rounded-lg placeholder:text-[#A0B1C0]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-left">
                <small className="text-[#A0B1C0]">
                  6 or more characters, one number, one uppercase & one lower
                  case.
                </small>
              </div>
            </div>
            <div>
              <Button
                loading={loading}
                altText="Logging in..."
                text="Sign up with Email"
                type="submit"
                className="flex items-center justify-center disabled:cursor-not-allowed disabled:bg-gray-500 bg-[#005AE2] my-4  font-bold outline-none border-none text-sm w-full  px-5 py-2.5 text-center text-white rounded-full"
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
  );
};

export default RegisterPage;
