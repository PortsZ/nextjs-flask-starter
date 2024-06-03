"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState<any>(<></>);

  useEffect(() => {
    const res = axios.get("/api")
      .then((res) => setData(res.data))

      console.log(data)
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white font-bold text-3xl">
        <div dangerouslySetInnerHTML={{ __html: data }} />
    </main>
  );
}
