import Link from "next/link";
import DemoPlaceholder from "@/components/DemoPlaceholder";
import FeatureMatrix from "@/components/FeatureMatrix";
import LatestVersion from "@/components/LatestVersion";
import SlashBanner from "@/components/SlashBanner";

const Page = () => {
  return (
    <>
      <div className="mt-6 sm:mt-12 w-full flex flex-col justify-start items-center">
        <LatestVersion />
      </div>
      <div className="w-full flex flex-col justify-center items-center sm:px-16">
        <h2 className="w-full max-w-3xl text-center text-4xl sm:text-6xl font-medium sm:font-bold mt-4 mb-6">
          A privacy-first, lightweight note-taking service
        </h2>
        <h3 className="w-full text-base sm:text-lg text-gray-500 text-center mb-2">Easily capture and share your great thoughts.</h3>
      </div>
      <div className="w-full flex flex-row justify-center items-center space-x-2 py-4">
        <Link target="_blank" href="https://github.com/usememos/memos">
          <img alt="GitHub stars" src="https://img.shields.io/github/stars/usememos/memos?logo=github" />
        </Link>
        <Link target="_blank" href="https://hub.docker.com/r/neosmemo/memos">
          <img alt="Docker" src="https://img.shields.io/docker/pulls/neosmemo/memos.svg?logo=docker" />
        </Link>
        <Link target="_blank" href="https://discord.gg/tfPJa4UmAv">
          <img alt="Discord" src="https://img.shields.io/badge/discord-chat-5865f2?logo=discord" />
        </Link>
      </div>
      <DemoPlaceholder />
      <div className="w-full flex flex-row justify-center items-center">
        <SlashBanner />
      </div>
      <FeatureMatrix />
    </>
  );
};

export default Page;