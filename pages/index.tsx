import Head from "next/head";
import Image from "next/image";

import InputField from "@/components/inputfiled";
import SubmitButton from "@/components/button";
import React, { useState, createContext, FormEvent } from "react";
import { type } from "os";
import { useRouter } from 'next/router';
type AppContextType = {
  name: string;
  setName: any;
  fathername: string;
  setFathername: any;
  contact: string;
  setContact: any;
};

export const AppContext = createContext<AppContextType>({
  name: "",
  setName: () => {},
  fathername: "",
  setFathername: () => {},
  contact : "",
  setContact: () => {},
});
export default function Home() {
  // functionality
  // State
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [fathername, setFathername] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString();
    const form = { name, fathername, contact, formattedDateTime};
    console.log(formattedDateTime);
    const response = fetch('api/submit', {method: 'POST' , headers : {'Accept' : 'application/json', 'Content-Type' : 'application/json'}, body: JSON.stringify(form)})
    console.log(response);
    // const content = await response.json();
    // alert(content.data.tableRange);
    setName("")
    setFathername("")
    setContact("")
    router.push('https://chat.whatsapp.com/DsdZctuoD4o75IxSHGMyw0');
  };

  // UI`
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
      <AppContext.Provider value={{ name, setName, fathername, setFathername, contact, setContact }}>
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
          <p className="text-blue-500 text-xl font-verctex text-center border-b-2 pb-2">
            پنھنجو نالو، ولديت  ۽ ڪانٽيڪٽ نمبر لکي ڪري ھيٺئين بٽڻ کي ڪلڪ ڪري مائٽ گروپ ۾ شامل ٿيو.<span className="text-white">س</span>
          
          
          </p>
          <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
            <InputField placeholder="Name" value={name} setValue={setName} type="text"/>
            <InputField
              placeholder="Father's Name"
              value={fathername}
              setValue={setFathername}
              type="text"
              />
              {/* <input placeholder="Contact" value={contact}  */}
            <InputField
              placeholder="Phone Number"
              value={contact}
              setValue={setContact}
              type="tel"
            />
            <SubmitButton text="Join Maet Group" />
          </form>
        </div>
      </AppContext.Provider>
    </>
  );
}
