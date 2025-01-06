import React from "react";
import { Book, Info } from "lucide-react";

import { Button } from "./ui/button";
import { type User } from '@supabase/supabase-js'
import { Input } from "./ui/input";

type SplashProps = {
  handleReady: () => void;
  user: User|null
};

export const Splash: React.FC<SplashProps> = ({ handleReady,user }) => {
  return (
    <main className="w-full flex items-center justify-center bg-primary-200 p-4 bg-[length:auto_50%] lg:bg-auto bg-colorWash bg-no-repeat bg-right-top">
      <div className="flex flex-col gap-8 lg:gap-12 items-center max-w-full lg:max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-balance text-left">
          Daily Bots function calling demo
        </h1>

        <p className="text-primary-500 text-xl font-semibold leading-relaxed">
          Welcome {user?.email}
        </p>
        <p className="text-primary-500 text-xl font-semibold leading-relaxed">
          “ Ask me about the weather ”
        </p>
        
        <Button onClick={() => handleReady()}>Try Demo</Button>

        <div className="h-[1px] bg-primary-300 w-full" />

        <footer className="flex flex-col lg:gap-2">
          <Button variant="light" asChild>
            <a
              href="https://www.daily.co/products/daily-bots/"
              className="text-indigo-600"
            >
              <Info className="size-6" />
              Learn more about Daily Bots
            </a>
          </Button>

          <Button variant="light" asChild>
            <a
              href="https://github.com/daily-demos/daily-bots-web-demo/tree/cb/function-calling"
              className="text-indigo-600"
            >
              <Book className="size-6" />
              Demo source code
            </a>
          </Button>
          <Button variant="light" asChild>
            <form action="/auth/signout" method="post">
              <button className="button block" type="submit">
                Sign out
              </button>
            </form>
          </Button>
        </footer>
      </div>
    </main>
  );
};

export default Splash;
