import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

export default function Home() {
  return (
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
          <Link href="/books">ئوقۇشنى باشلاڭ</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
