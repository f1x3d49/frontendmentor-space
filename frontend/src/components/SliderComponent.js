import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { ReactComponent as Close } from "../assets/shared/icon-close.svg";

export default function SliderComponent({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[254px]">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute z-10 top-0 right-0 flex pr-2 pt-[34px] mr-[26.5px]">
                      <button type="button" onClick={() => setOpen(false)}>
                        <span className="sr-only">Close panel</span>
                        <Close className="h-[19px] w-19px" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className=" relative flex h-full flex-col overflow-y-scroll bg-[rgba(255,255,255,0.04)] backdrop py-6">
                    <div className="relative mt-24 flex-1 ml-8">
                      <ul className="flex flex-col items-start justify-center gap-[32px] text-primary3 font-barlowcondensed text-[16px] uppercase tracking-[2.7px]">
                        <li>
                          <Link to="/" className="flex gap-3">
                            <h1 className="font-bold">00</h1>
                            <p>Home</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/destination" className="flex gap-3">
                            <h1 className="font-bold">01</h1>
                            <p>Destination</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/crew" className="flex gap-3">
                            <h1 className="font-bold">02</h1>
                            <p>Crew</p>
                          </Link>
                        </li>
                        <li>
                          <Link to="/technology" className="flex gap-3">
                            <h1 className="font-bold">03</h1>
                            <p>Technology</p>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
