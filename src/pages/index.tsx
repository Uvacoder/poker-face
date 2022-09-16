import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, useEffect, useState } from "react";
import { PokerHand } from "../classes/PokerHand";
import { HowTo } from "../components/HowTo";
import { parsePokerHands } from "../utils/parsePokerHands";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Home: NextPage = () => {
  const [handText, setHandText] = useState("");
  const [pokerHands, setPokerHands] = useState<PokerHand[]>([]);
  const [toggleHelp, setToggleHelp] = useState(false);
  const [animationParent] = useAutoAnimate<HTMLElement>();

  useEffect(() => {
    setPokerHands([]);
  }, [handText]);

  const revealPokerHandsText = async (handsText: string) => {
    try {
      setPokerHands(parsePokerHands(handsText));
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 500);
    } catch (error) {
      alert(error);
    }
  };

  const onFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "text/plain") {
      alert("Please upload a text file");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result;
      if (typeof text !== "string") return;
      setHandText(text);
    };

    reader.readAsText(file);
  };

  return (
    <>
      <Head>
        <title>Poker Face 🃏</title>
        <meta name="description" content="Poker Face" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        ref={animationParent}
        className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4"
      >
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
          Poker Face 🃏
          <button
            onClick={() => setToggleHelp(!toggleHelp)}
            className="animate-bounce absolute w-10 h-10 m-1 p-1 text-2xl bg-violet-500 text-white rounded-full shadow-xl duration-500 motion-safe:hover:scale-105"
          >
            ?
          </button>
        </h1>
        {toggleHelp && <HowTo />}
        <p className="m-4 text-2xl text-gray-700 leading-normal">
          <label
            htmlFor="file-upload"
            className="flex m-2 p-2 bg-violet-500 text-white rounded shadow-xl cursor-pointer duration-500 motion-safe:hover:scale-105"
          >
            Click to upload...
          </label>
          <input
            id="file-upload"
            className="ml-4 hidden"
            type="file"
            accept=".txt"
            onChange={onFileUpload}
          />
        </p>
        <p className="mb-4 text-2xl leading-normal font-extrabold text-violet-500">
          OR
        </p>
        <textarea
          className="w-3/4 mb-4 h-32 p-4 border-2 border-gray-500 rounded shadow-xl"
          placeholder="Paste your text here..."
          value={handText}
          onChange={(e) => setHandText(e.target.value)}
        />
        <span className="h-0.5 w-full bg-violet-500 my-4 rounded-md"></span>
        <button
          className="m-2 p-2 text-2xl bg-violet-500 text-white rounded shadow-xl duration-500 motion-safe:hover:scale-105"
          onClick={() => revealPokerHandsText(handText)}
        >
          Reveal Hands
        </button>
        {pokerHands.length > 0 && (
          <p className="border-2 border-violet-500 rounded-xl p-4 mt-4">
            {pokerHands.map((pokerHand, index) => (
              <p key={index}>{pokerHand.toString()}</p>
            ))}
          </p>
        )}
      </main>
    </>
  );
};

export default Home;
