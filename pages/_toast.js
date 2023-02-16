import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from "next/router";
import {useTranslation} from "../Utility/Translations/useTranslation";

export default function CustomToastContainer() {

  const { locale } = useRouter();

  return <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={locale === 'ar'}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;
}
