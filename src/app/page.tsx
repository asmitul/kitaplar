import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { LibraryBigIcon, TabletSmartphoneIcon } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "قۇلايلىق",
    Icon: TabletSmartphoneIcon,
    description: "يان تېلېفوندا ئوقۇش قۇلايلىق",
  },
  {
    name: "نۇرغۇن كىتابلار",
    Icon: LibraryBigIcon,
    description: "ئوقۇشىڭىز ئۈچۈن نۇرغۇن كىتابلار سۇنۇلدى",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="text-blue-600">كىتابلار</span> تورىغا خوش كەلدىڭىز.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            بۇ تور بەتتە نۇرغۇنلىغان ئېلېكترونلۇق كىتابلار بار ، ئۇلارنى ئوقۇپ
            بېقىشىڭىزنى قارشى ئالىمىز.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/books" className={buttonVariants()}>
              ئوقۇشنى باشلاڭ
            </Link>
            <Button variant="ghost">بىز كىم؟</Button>
          </div>
        </div>
        {/* TODO: List of books */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
