import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  NavigateFunction,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import Typed from "typed.js";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { v4 as uuidv4 } from "uuid";

import { collections, trendingProducts, perks } from "../../lib/contents";

const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};

const categories: string[] = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Programming & Tech",
];
// 카테고리 변경해야함

export default function Home() {
  const typedElement: RefObject<HTMLSpanElement> =
    useRef<HTMLSpanElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate: NavigateFunction = useNavigate();

  const navigateToSearchPage = (): void => {
    const url = `/gigs/search?${createSearchParams({
      query: searchTerm.trim(),
    })}`;
    navigate(url);
  };

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [...categories, "Video & Animation"], // Video & Animation 카테고리 변경해야함
      startDelay: 300,
      typeSpeed: 120,
      backSpeed: 200,
      backDelay: 300,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-white dark:bg-black">
      <div className="hidden md:block relative bg-white pb-20 pt-40 dark:bg-gray-900 lg:pt-44">
        <div className="relative m-auto px-6 xl:container md:px-12 lg:px-6">
          <h3 className="mb-4 mt-4 max-w-2xl pb-2 text-center text-2xl font-normal dark:text-white lg:text-left">
            Expert categories: <span ref={typedElement}></span>
          </h3>
          <h1 className="text-center text-4xl font-black text-blue-900 dark:text-white sm:mx-auto sm:w-10/12 sm:text-5xl md:w-10/12 md:text-5xl lg:w-auto lg:text-left xl:text-7xl">
            Hire expert freelancers <br className="hidden lg:block" />{" "}
            {/* 변경해야함  */}
            <span className="relative bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              for your project
            </span>
            .
          </h1>
          <div className="lg:flex">
            <div className="relative mt-8 space-y-8 text-center sm:mx-auto sm:w-10/12 md:mt-16 md:w-2/3 lg:ml-0 lg:mr-auto lg:w-7/12 lg:text-left">
              <p className="text-gray-700 dark:text-gray-300 sm:text-lg lg:w-11/12">
                Find the right freelance service for your next project.{" "}
                {/* 변경해야함  */}
              </p>

              <div className="flex w-full justify-between gap-6 lg:gap-12">
                {" "}
                {/* 디자인 변경해야함  */}
                <form
                  className="mx-auto flex w-full items-center bg-white"
                  onSubmit={(event: FormEvent) => {
                    event.preventDefault();
                    navigateToSearchPage();
                  }}
                >
                  <div className="w-full">
                    <Input
                      type="search"
                      className="w-full rounded-full px-4 py-1 text-gray-800 focus:outline-none"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={(event: ChangeEvent) => {
                        setSearchTerm((event.target as HTMLInputElement).value);
                      }}
                    />
                  </div>
                  <div className="bg-sky-500">
                    <Button
                      type="submit"
                      className="flex h-12 w-12 items-center justify-center text-white"
                      onClick={navigateToSearchPage}
                    />
                  </div>
                </form>
              </div>

              <div className="grid grid-cols-3 gap-x-2 gap-y-4 sm:flex sm:justify-center lg:justify-start">
                {categories.map((category: string) => (
                  <div
                    key={uuidv4()}
                    className="w-full min-w-0 cursor-pointer rounded-full border border-gray-200 p-4 duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-300/30"
                  >
                    <div className="flex justify-center">
                      <span className="block truncate font-medium dark:text-white">
                        <span>{category}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="-right-10 hidden lg:col-span-2 lg:mt-0 lg:flex">
              <div className="relative w-full">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                  className="relative w-full"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden relative">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:flex sm:flex-col"
        >
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-48 w-full bg-white" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Mid-Season Sale
            </h1>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
