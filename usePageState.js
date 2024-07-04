"use client";
import { useInView } from "framer-motion";
import React, { useRef, useState, useTransition } from "react";

export const usePageState = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return {activeTab, isPending, emailSubmitted, ref,isInView ,startTransition,setActiveTab,setEmailSubmitted}
};
