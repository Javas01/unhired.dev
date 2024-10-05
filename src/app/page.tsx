"use client";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CaretSortIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { Toggle } from "@/components/ui/toggle";
import { useState } from "react";
import { devStuff } from "./constants/devStuff";
import { Filters } from "./types/FiltersEnum";

export default function Home() {
  const [filter, setFilter] = useState<Filters | null>(null);
  const [useDateSort, setUseDateSort] = useState(false);
  return (
    <div className="grid grid-rows-[100px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col gap-4 items-center grid-row-1">
        <h1 className="text-4xl font-bold">Unhired.dev</h1>
        <p className="text-lg text-center">
          Jawwaad Sabree - Unhired Developer
        </p>
        <div className="flex flex-row">
          <ToggleGroup
            type="single"
            variant="outline"
            onValueChange={(value) => setFilter(parseInt(value) as Filters)}
          >
            <ToggleGroupItem value={Filters.WORK.toString()}>
              Employment History
            </ToggleGroupItem>
            <ToggleGroupItem value={Filters.PROJECTS.toString()}>
              Projects
            </ToggleGroupItem>
            <ToggleGroupItem value={Filters.TEACHING.toString()}>
              Teaching
            </ToggleGroupItem>
            <ToggleGroupItem value={Filters.CONTRACT.toString()}>
              Contract Work
            </ToggleGroupItem>
          </ToggleGroup>
          <Toggle
            className="ml-5"
            onPressedChange={(isPressed) => setUseDateSort(isPressed)}
          >
            <CaretSortIcon />
          </Toggle>
        </div>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-middle sm:items-middle overflow-scroll">
        {devStuff
          .filter((stuff) => (filter ? stuff.filter === filter : true))
          .sort((a, b) =>
            useDateSort ? b.date.getTime() - a.date.getTime() : a.sort - b.sort
          )
          .map((stuff) => {
            const { title, description, src, component } = stuff;
            const href =
              stuff.component === "Image"
                ? stuff.href
                : stuff.isYoutube
                ? `https://www.youtube.com/watch?v=${
                    stuff.src.split("/embed/")[1]
                  }`
                : stuff.src;

            switch (component) {
              case "iframe":
                return (
                  <div
                    className="flex flex-col items-center w-full"
                    key={description}
                  >
                    <a target="_blank" rel="noopener noreferrer" href={href}>
                      <h1 className="text-center font-bold">
                        {title} <OpenInNewWindowIcon className="inline" />
                      </h1>
                    </a>
                    <h2 className="text-center">{description}</h2>
                    <iframe
                      className="rounded-lg"
                      width={400}
                      onClick={() => window.open(href, "_blank")}
                      src={src}
                      title={title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                );
              case "Image":
                return (
                  <div
                    className="flex flex-col items-center w-full"
                    key={description}
                  >
                    <a target="_blank" rel="noopener noreferrer" href={href}>
                      <h1 className="text-center font-bold">
                        {title} <OpenInNewWindowIcon className="inline" />
                      </h1>
                    </a>{" "}
                    <h2 className="text-center">{description}</h2>
                    <Image
                      className="rounded-lg cursor-pointer"
                      onClick={() => window.open(href, "_blank")}
                      src={src}
                      alt={title}
                      width={400}
                      height={300}
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Javas01?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://discord.gg/ax3qeQEZcX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Discord
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/@insomnia-coders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Youtube
        </a>
      </footer>
    </div>
  );
}
