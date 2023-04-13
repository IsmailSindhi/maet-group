import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import SubmitButton from "@/components/button";
import React, { useState, createContext, FormEvent } from "react";
import { type } from "os";
import {z, ZodType} from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  name: string;
  fathername: string;
  contact: string;
};

export default function Home() {
  // functionality
  const router = useRouter();
  const schema: ZodType<FormData> = z
    .object({
      name: z.string().min(3).max(30),
      fathername: z.string().min(3).max(30),
      contact: z.string().min(10),
    });
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(schema),
    });
    const submitData = (data: FormData) => {
      console.log("IT WORKED", data);
      reset();
      const currentDate = new Date();
      const formattedDateTime = currentDate.toLocaleString();
      
      
      const { name, fathername, contact} = data ;
      const form = { name, fathername, contact, formattedDateTime};
      const response = fetch('api/submit', {method: 'POST' , headers : {'Accept' : 'application/json', 'Content-Type' : 'application/json'}, body: JSON.stringify(form)})

      router.push('https://chat.whatsapp.com/DsdZctuoD4o75IxSHGMyw0');


    };
  

  return (
    <>
      <Head>
        <title>Join Maet Group</title>
        <meta
          name="description"
          content="We warmly welcome you in maet group"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/maet.jpeg" />
      </Head>
        <div className="flex flex-col items-center mt-4 mx-auto gap-4 max-w-xs py-5 bg-white">
          <Image
            src="/maet.jpeg"
            alt="Maet Group Logo"
            width={180}
            height={180}
          />
          <h1 className="text-blue-500 text-2xl font-bold">
            Welcome To Maet Group
          </h1>
          <p className="text-blue-500 text-xl font-verctex text-center border-b-2 pb-2 select-none">
            پنھنجو نالو،  ولديت  ۽ ڪانٽيڪٽ نمبر لکي ڪري ھيٺئين بٽڻ کي ڪلڪ ڪري مائٽ گروپ ۾ شامل ٿيو.<span className="text-white select-none text-[1px]">س</span>
          </p>
          <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit(submitData)}>
            <input className="bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white" placeholder="Name" {...register("name")} type="text"/>
            {errors.name && <span className="text-rose-500">Please provide your name.</span>}
            <input
              placeholder="Father's Name"
              type="text"
              className="bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              {...register("fathername")}
              />
              {errors.fathername && <span className="text-rose-500">Please provide your father&apos;s name.</span>}
            <input
              placeholder="Phone Number"
              type="number"
              className="bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              {...register("contact")}
              />
              {errors.contact && <span className="text-rose-500">Please provide your phone number.</span>}
            <SubmitButton text="Join Maet Group" />
          </form>
        </div>
    </>
  );
}
