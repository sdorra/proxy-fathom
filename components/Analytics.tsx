"use client";

import { useEffect } from "react";
import * as Fathom from "fathom-client";

export default function Analytics() {
  useEffect(() => {
    Fathom.load("IVBPNICR", {
      includedDomains: ["proxy-fathom.sdorra.dev"],
      spa: "auto",
      url: "https://proxy-fathom.sdorra.dev/script.js"
    });
  }, []);
  return null;
}