import Image from "next/image";
import Link from "next/link";
// import chanane from "@/public/images/chanane.png";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="px-8 py-24 mx-auto max-w-7xl">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="flex-shrink-0 mx-auto w-64 text-center md:mx-0 md:text-left">
            <Link href="/" className="flex gap-2 items-center font-semibold">
              <Image src={"/logo.png"} alt="Company Logo" width={1640} height={460} className="w-r28 hr-28 lg:h-12 lg:w-44 lg:relative lg:object-cover lg:z-[1] transition-all ease-in-out duration-200" />
            </Link>
            <p className="mt-3 text-sm text-slate-700">
              Telephon:  +213 771 99 47 34
            </p>
            <p className="mt-1 text-sm text-slate-700">
              Email       :    sarlagropoleem@gmail.com
            </p>
            <p className="mt-1 text-sm text-slate-700">
              Address  :    Cite Ismail Khalef Dar El Beida Alger
            </p>
            {/* <p className="mt-3 text-sm text-slate-700">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p> */}
          </div>
          <div className="flex flex-wrap flex-grow justify-center mt-10 -mb-10 text-center md:mt-0 md:pl-24">
            <div className="px-4 w-full md:w-1/2 lg:w-1/4">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                LIENS
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover"
                  aria-label="Contact Support"
                >
                  Support
                </a>
                <Link href="#" className="link link-hover">
                  Techniques
                </Link>
              </div>
            </div>
            <div className="px-4 w-full md:w-1/2 lg:w-1/4">
              <div className="mb-3 text-sm font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                Sujets
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <Link href="#" className="link link-hover">
                  Terms et services
                </Link>
                <Link href="#" className="link link-hover">
                  Conditions
                </Link>
              </div>
            </div>
            <div className="px-4 w-full md:w-1/2 lg:w-1/4 bg-gradient-to-bl from-cyan-500 to-cyan-300 rounded-3xl p-8 shadow-[0_20px_25px_-5px_rgba(0,131,224,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <div className="mb-3 text-xl font-semibold tracking-widest footer-title text-slate-900 md:text-left">
                Nos Apps
              </div>
              <div className="flex flex-col gap-2 justify-center items-center mb-10 text-sm text-slate-700 hover:text-slate-900 md:items-start">
                <Image src={"/images/apple.png"} alt="apple store" width={200} height={100} className="" />
                <a href="https://play.google.com/store/apps/details?id=com.agropole.agropole" target="_blank">
                  <Image src={"/images/google.png"} alt="apple store" width={200} height={100} className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-sm md:mt-16">
          {/* <div className="flex flex-row gap-4 justify-start items-center">
            <Image
              alt="Artem Kirsanov"
              src={chanane}
              width={48}
              height={48}
              className="object-cover w-12 rounded-full aspect-square"
            />
            <div className="leading-relaxed text-left text-base-content-secondary">
              Powered By Chananee Dev
              <a
                href="dev.chananee.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium link text-base-content"
              >
                {" "}
                visit
                {" "}
              </a>
              👋
              Copyright © {new Date().getFullYear()} - All rights reserved
              <a
                href="https://x.com/kirsnvartem"
                target="_blank"
                rel="noreferrer"
                className="font-medium link text-base-content"
              >

              </a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
