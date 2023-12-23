import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1>
          <span className="text-blue-900">كىتابلار</span> تورىغا خوش كەلدىڭىز.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
