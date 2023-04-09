import Head from "next/head";
import Image from "next/image";

import InputField from "@/components/inputfiled";
import SubmitButton from "@/components/button";
export default function Home() {
  return (
    <>
      <Head>
        <title>Join Maet Group</title>
        <meta name="description" content="We warmly welcome you in maet group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/maet.jpeg" />
      </Head>
      <div className="flex flex-col items-center mt-4 mx-auto gap-4 border-2 max-w-md py-5">
      <Image src="/maet.jpeg" alt="Maet Group Logo" width={180} height={180} />
      <h1 className="text-blue-500 text-2xl font-bold">Welcome To Maet Group</h1>
      <InputField placeholder="Name" />
      <InputField placeholder="Fathers Name" />
      <SubmitButton text="Join Maet Group" />
      </div>
    </>
  );
}
