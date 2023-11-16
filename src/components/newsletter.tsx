"use client";
import React, { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Confetti from "react-confetti";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useStore } from "@/app/store";

type Props = {};
const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default function NewsLetter({}: Props) {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [run, setRun] = useState<boolean>(false);
  const [totalCounts, setTotalCounts] = useState<number>(400);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState({
    width:0,
    height:0,
  });
  const { isVisible , updateIsVisible} = useStore()
  const localStorageKey = 'newsletterPopupShown';

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

  handleResize();
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          numberOfPieces={totalCounts}
          run={run}
          onConfettiComplete={()=> {setShowConfetti(false);
            updateIsVisible(false);
          }}
          style={{ position: "fixed" }} 
        />
      )}
      <div className="w-full p-5 md:p-6 space-y-5 bg-gray-100 dark:bg-gray-800 max-w-4xl rounded-lg">
        {/* Header and description */}
        <div className="pb-2 space-y-3">
          <h1 className="text-2xl font-black sm:text-2.5xl">
            Claim Your Gift! 🎁
          </h1>
          <p className="text-gray-600 dark:text-white leading-6">
          Grab your product sneak peak & get additional 10% Off coupon directly sent to your email. Stay to date with announcements, giveaways and exclusive discounts
</p>
        </div>

        {/* Formik */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={requiredSchema}
          onSubmit={async (values, { resetForm }) => {
            setButtonDisabled(true);
            try {
              const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values?.email,
                }),
              });
              const datas = await response.json();
              if (datas.status == 400) {
                setStatus(datas.status);
                setMessage("You are alredy subscribed, you can also email me at brandsgoviral@gmail.com");
                
                setTimeout(() => {
                  setMessage("");
                  setButtonDisabled(false);
                }, 2000);
                return;
              }
              else if(datas.status >400){
                setStatus(datas.status);
                setMessage("Something went wrong");
                
                setTimeout(() => {
                  setMessage("");
                  setButtonDisabled(false);
                }, 2000);
                return;
              }
              localStorage.setItem(localStorageKey, 'true');

              setStatus(201);
              setMessage("Congratulations! Please see your inbox for the gift!");
              setShowConfetti(true);
              setRun(true);
              setTimeout(() => {
                setTotalCounts(0);
                setMessage("");
                resetForm();
                setButtonDisabled(false);
              }, 4000);
              setTotalCounts(400);

            } catch (error) {
              setStatus(500);
              setMessage(
                "You are alredy subscribed, you can also email me at brandsgoviral@gmail.com"
              );
              setTimeout(() => {
                setMessage("");
                setButtonDisabled(false);
              }, 2000);
            }
          }}
        >
          <Form>
            <div className="flex items-center space-x-2">
              <Field
                type="email"
                name="email"
                className="w-full px-5 py-3 bg-gray-100 rounded-md outline-none grow dark:text-black"
                placeholder="Enter your email"
                autoComplete="off"
                
              />
           {buttonDisabled?    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>: <button
                className="px-5 py-4 font-bold text-gray-100 transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:scale-105 disabled:opacity-80 dark:bg-gray-900 "
                type="submit"
                disabled={buttonDisabled}
              >
Submit              </button>}  
          
            </div>
            {message && (
              <p
                className={`${
                  status !== 201 ? "text-red-500" : "text-green-500"
                } pt-4 font-black `}
              >
                {message}
              </p>
            )}
          </Form>
        </Formik>
      </div>
    </>
  );
}