import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Topbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <div className="flex justify-center bg-l-fg font-verctex dark:bg-d-fg border-b border-neutral-100 dark:border-neutral-800 px-4 py-5">
        <div className="flex w-full max-w-4xl items-center justify-between gap-1">
          CEXO
        </div>
        <div className="flex justify-center">
          <div className="flex gap-3">
          {currentTheme === "dark" ? (
            <button
              className="bg-black-700 hover:bg-black w-16 rounded-md border-purple-400 border-2"
              onClick={() => setTheme("light")}
            >
              {" "}
              Light
            </button>
          ) : (
            <button
              className="bg-gray-100 w-16 rounded-md border-purple-400 border-2  hover:bg-gray-300"
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          )}
            <Link href="/">
              <div className="text-black dark:text-white tracking-wider hover:text-neutral-800 dark:hover:text-neutral-300">
                SWAP
              </div>
            </Link>

            <Link href="/stake">
              <div className="text-black dark:text-white hover:text-neutral-800 dark:hover:text-neutral-300">
                STAKE
              </div>
            </Link>

            <Link href="/faq">
              <div className="text-black dark:text-white hover:text-neutral-800 dark:hover:text-neutral-300">
                FAQ
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
