import Button from "@/components/Button/Button";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <iframe
        width="1060"
        height="615"
        src="https://app.heygen.com/embeds/7cecce1c8c1d46c389425dc2889cc356"
        title="HeyGen video player"
        frameBorder="0"
        allow="encrypted-media; fullscreen;"
        allowFullScreen
      ></iframe>
      <div className="w-full flex justify-end">
        <Link
          href={`/lessons/lesson/c1b4d7d5-4f3f-43d8-a7cb-e827c6f40d45/theory2`}
        >
          <Button className="mt-20 w-36 p-4 text-xl">Далее</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
