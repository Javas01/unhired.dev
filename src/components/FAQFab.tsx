import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

type Result = {
  question: string;
  bestMatch: string;
  confidence: number;
};

export const FAQFab = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const search = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        "https://semantic-search-production.up.railway.app/get_answer/",
        {
          method: "POST",
          body: JSON.stringify({ query }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const { question, bestMatch, confidence }: Result = await res.json();

      setQuery("");
      setResult({
        question,
        bestMatch,
        confidence
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      setResult(null);
    };
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="fixed bottom-5 left-5 z-5 rounded-full bg-[#1F2937]">
          FAQ
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-62 h-62 max-h-[80vh] max-w-[100vw] lg:max-w-[30vw] text-white overflow-y-scroll text-wrap bg-[#1F2937]">
        {!result && (
          <p className="text-wrap text-justify mb-3">
            <span className="font-bold">This is built with AI!</span> That means
            you can ask questions in your own words and still get the right
            answers!
          </p>
        )}
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What would you like to know about me?"
          />
          <Button disabled={loading || !query} onClick={search} type="submit">
            Search
          </Button>
        </div>
        {result && (
          <div className="mt-3">
            <p className="font-bold">Question:</p>
            <p>{result.question}</p>
            <p className="font-bold">Best Match:</p>
            <p>{result.bestMatch}</p>
            <p className="font-bold">Confidence:</p>
            <p>{result.confidence}</p>
          </div>
        )}
        {loading && <Spinner className="mx-auto mt-3" />}
      </PopoverContent>
    </Popover>
  );
};
