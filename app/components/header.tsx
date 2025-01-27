"use client";

import Link from "next/link";
import {
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

import { Container } from "./container";
import { NavLinks } from "./nav-links";
import { Button } from "./button";


function MenuIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    "as" | "className"
  >
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base tracking-tight leading-7 text-secondary-foreground"
      {...props}
    />
  );
}

export function Header() {
  return (
    <header className=" z-20 ">
      <nav className=" px-8 mx-auto max-w-6xl">
        <Container className="flex relative z-50 justify-between py-4">
          <div className="flex relative z-10 gap-16 justify-end items-center w-full">
            {/* <Link href="/" className="flex gap-2 items-center font-semibold">
              <Image  src={"/logo.png"} alt="Company Logo" width={1640} height={460} className="w-28 h-8 lg:h-12 lg:w-44 lg:relative lg:object-cover lg:z-[1] transition-all ease-in-out duration-200" />
            </Link> */}
            <div className="hidden justify-center items-center lg:flex lg:gap-10">
              <NavLinks />
              <Button href="https://dashboard.agropole.site/auth/login-basic" color="cyan">
              connexion
              </Button>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <Popover className="lg:hidden" >
              {({ open }) => (
                <>
                  <PopoverButton
                    className="inline-flex relative z-30 items-center p-2 -m-2 rounded-lg ui-not-focus-visible:outline-none stroke-slate-900 hover:bg-slate-200/50 hover:stroke-slate-600 active:stroke-slate-900"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="w-6 h-6" />
                      ) : (
                        <MenuIcon className="w-6 h-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverOverlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-20 backdrop-blur bg-slate-300/60"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-20 px-6 pt-32 pb-6 rounded-b-2xl shadow-2xl origin-top bg-slate-50 shadow-slate-900/20"
                        >
                          <div className="space-y-4 font-black">
                            <MobileNavLink href="/#home">
                            Accueil
                            </MobileNavLink>
                            <MobileNavLink href="/#bf">
                              A propos
                            </MobileNavLink>
                            <MobileNavLink href="/#faq">FAQs</MobileNavLink>
                            {/* <MobileNavLink href="/blog">Blog</MobileNavLink> */}
                          </div>
                          <div className="flex flex-col gap-4 mt-8 font-black">
                            <Button href="https://dashboard.agropole.site/auth/login-basic">Connexion</Button>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            {/* <Button href="/login" variant="outline" className="hidden lg:block">
              Log in
            </Button>
            <Button href="#" className="hidden lg:block">
              Download
            </Button> */}
          </div>
        </Container>
      </nav>
    </header>
  );
}
