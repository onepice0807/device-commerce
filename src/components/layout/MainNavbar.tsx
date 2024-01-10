import { Fragment, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ui/theme-toggle";

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Flats", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Heels", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
              { name: "Accessories", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Tops", href: "#" },
              { name: "Bottoms", href: "#" },
              { name: "Swimwear", href: "#" },
              { name: "Underwear", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Significant Other", href: "#" },
            ],
          },
        ],
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg",
          imageAlt:
            "Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.",
        },
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        [
          {
            id: "shoes",
            name: "Shoes & Accessories",
            items: [
              { name: "Sneakers", href: "#" },
              { name: "Boots", href: "#" },
              { name: "Sandals", href: "#" },
              { name: "Socks", href: "#" },
            ],
          },
          {
            id: "collection",
            name: "Shop Collection",
            items: [
              { name: "Everything", href: "#" },
              { name: "Core", href: "#" },
              { name: "New Arrivals", href: "#" },
              { name: "Sale", href: "#" },
            ],
          },
        ],
        [
          {
            id: "clothing",
            name: "All Clothing",
            items: [
              { name: "Basic Tees", href: "#" },
              { name: "Artwork Tees", href: "#" },
              { name: "Pants", href: "#" },
              { name: "Hoodies", href: "#" },
              { name: "Swimsuits", href: "#" },
            ],
          },
          {
            id: "accessories",
            name: "All Accessories",
            items: [
              { name: "Watches", href: "#" },
              { name: "Wallets", href: "#" },
              { name: "Bags", href: "#" },
              { name: "Sunglasses", href: "#" },
              { name: "Hats", href: "#" },
              { name: "Belts", href: "#" },
            ],
          },
        ],
        [
          {
            id: "brands",
            name: "Brands",
            items: [
              { name: "Re-Arranged", href: "#" },
              { name: "Counterfeit", href: "#" },
              { name: "Full Nelson", href: "#" },
              { name: "My Way", href: "#" },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function MainNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-black">
      <header className="relative dark:bg-gray-700">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center lg:hidden">
                <div
                  className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Sheet>
                    <SheetTrigger>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </SheetTrigger>
                    <SheetContent className="overflow-scroll p-0 w-full">
                      <div className="relative flex w-full flex-col overflow-y-auto pb-12 shadow-xl">
                        <div className="mt-2">
                          <Tabs defaultValue="Men">
                            <TabsList className="flex bg-muted">
                              {navigation.categories.map((category) => (
                                <TabsTrigger
                                  value={category.name}
                                  key={category.name}
                                  className="border-none text-gray-900 basis-[50%] whitespace-nowrap px-1 py-2 text-base font-medium"
                                >
                                  {category.name}
                                </TabsTrigger>
                              ))}
                            </TabsList>
                            {navigation.categories.map((category) => (
                              <TabsContent
                                value={category.name}
                                key={category.name}
                                className="space-y-10 px-4 pb-8 pt-10"
                              >
                                <div className="space-y-4">
                                  {category.featured.map((item, itemIdx) => (
                                    <div
                                      key={itemIdx}
                                      className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md"
                                    >
                                      <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="object-cover object-center group-hover:opacity-75"
                                      />
                                      <div className="flex flex-col justify-end">
                                        <div className="bg-opacity-60 p-4 text-base sm:text-sm">
                                          <a
                                            href={item.href}
                                            className="font-medium text-gray-900"
                                          >
                                            <span
                                              className="absolute inset-0"
                                              aria-hidden="true"
                                            />
                                            {item.name}
                                          </a>
                                          <p
                                            aria-hidden="true"
                                            className="mt-0.5 text-gray-700 sm:mt-1"
                                          >
                                            Shop now
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                {category.sections.map((column, columnIdx) => (
                                  <div key={columnIdx} className="space-y-10">
                                    {column.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${category.id}-${section.id}-heading-mobile`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                          className="mt-6 flex flex-col space-y-6"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flow-root"
                                            >
                                              <a
                                                href={item.href}
                                                className="-m-2 block p-2 text-gray-500"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                ))}
                              </TabsContent>
                            ))}
                          </Tabs>
                        </div>

                        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                          {navigation.pages.map((page) => (
                            <div key={page.name} className="flow-root">
                              <a
                                href={page.href}
                                className="-m-2 block p-2 font-medium text-gray-900"
                              >
                                {page.name}
                              </a>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6">
                          <a href="#" className="-m-2 flex items-center p-2">
                            <img
                              src="https://tailwindui.com/img/flags/flag-canada.svg"
                              alt=""
                              className="block h-auto w-5 flex-shrink-0"
                            />
                            <span className="ml-3 block text-base font-medium text-gray-900">
                              CAD
                            </span>
                            <span className="sr-only">, change currency</span>
                          </a>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <a
                  href="#"
                  className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
              <Popover>
                <PopoverTrigger></PopoverTrigger>
                <PopoverContent className="hidden lg:block lg:flex-1 lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                      <div key={category.name} className="flex">
                        <>
                          <div className="relative flex">
                            <Button
                              variant="ghost"
                              className={cn(
                                open
                                  ? "text-indigo-600"
                                  : "text-gray-700 hover:text-gray-800",
                                "relative z-10 flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out",
                              )}
                            >
                              {category.name}
                              <span
                                className={cn(
                                  open ? "bg-indigo-600" : "",
                                  "absolute inset-x-0 bottom-0 h-0.5 transition-colors duration-200 ease-out sm:mt-5 sm:translate-y-px sm:transform",
                                )}
                                aria-hidden="true"
                              />
                            </Button>
                          </div>
                          <div className="absolute inset-x-0 top-full">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="grid grid-cols-2 grid-rows-1 gap-8 text-sm">
                                    {category.featured.map((item, itemIdx) => (
                                      <div
                                        key={item.name}
                                        className={cn(
                                          itemIdx === 0
                                            ? "aspect-w-2 col-span-2"
                                            : "",
                                          "group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-md bg-gray-100",
                                        )}
                                      >
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center group-hover:opacity-75"
                                        />
                                        <div className="flex flex-col justify-end">
                                          <div className="bg-white bg-opacity-60 p-4 text-sm">
                                            <a
                                              href={item.href}
                                              className="font-medium text-gray-900"
                                            >
                                              <span
                                                className="absolute inset-0"
                                                aria-hidden="true"
                                              />
                                              {item.name}
                                            </a>
                                            <p
                                              aria-hidden="true"
                                              className="mt-0.5 text-gray-700 sm:mt-1"
                                            >
                                              Shop now
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="grid grid-cols-3 gap-x-8 gap-y-10 text-sm text-gray-500">
                                    {category.sections.map(
                                      (column, columnIdx) => (
                                        <div
                                          key={columnIdx}
                                          className="space-y-10"
                                        >
                                          {column.map((section) => (
                                            <div key={section.name}>
                                              <p
                                                id={`${category.id}-${section.id}-heading`}
                                                className="font-medium text-gray-900"
                                              >
                                                {section.name}
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby={`${category.id}-${section.id}-heading`}
                                                className="mt-4 space-y-4"
                                              >
                                                {section.items.map((item) => (
                                                  <li
                                                    key={item.name}
                                                    className="flex"
                                                  >
                                                    <a
                                                      href={item.href}
                                                      className="hover:text-gray-800"
                                                    >
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          ))}
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      </div>
                    ))}

                    {navigation.pages.map((page) => (
                      <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </a>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              {/* Logo */}
              <a href="#" className="flex">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>

              <div className="flex flex-1 items-center justify-end">
                <a
                  href="#"
                  className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
                >
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="block h-auto w-5 flex-shrink-0"
                  />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>

                {/* Search */}
                <a
                  href="#"
                  className="ml-6 hidden p-2 text-gray-400 hover:text-gray-500 lg:block"
                >
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                <ThemeToggle />
                {/* Account */}
                <a
                  href="#"
                  className="p-2 text-gray-400 hover:text-gray-500 lg:ml-4"
                >
                  <span className="sr-only">Account</span>
                  <UserIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
