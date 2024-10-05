import Image from "next/image";
export default function Home() {
  return (
    // by default ye ssr pr render hogi  client pa krny keliya chohta sa code hota ha
    <div>
      <main className="mt-10 mx-10">
        {/* Hero section */}
        <section className="flex gap-6 items-center ">
          {/* left side section */}
          <div className="flex-1">
           {/* ye equally widht dy degi */}
            <h1 className="font-bold text-3xl"> Hi, I'm Maryam</h1>
            <p className="text-lg text-gray-600 mt-2">
            I am a full-stack developer currently pursuing an IT course at GIAIC to enhance my skills for a career in full-stack development. I hold a bachelor's degree from Government Karachi University and completed my intermediate studies at S.M.B. Fatimah Jinnah College. My educational journey began with matriculation from Government Girls School, which provided me with a strong foundation in technology.
            </p>
            <button className="bg-gray-900 text-white py-2  mt-4 px-4  hover:bg-slate-500">
              Read More
            </button>
          </div>
         {/* right side section */}
          <div className="flex-1">
            <Image
             src="/poster.jpg"
              alt="poster img"
              width={500}
              height={500}>
              </Image>
            </div>
        </section>
      </main>
    </div>
  );
}
