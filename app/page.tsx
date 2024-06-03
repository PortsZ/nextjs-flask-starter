"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState<any>(<></>);
  const [data2, setData2] = useState<any>(<></>);

  useEffect(() => {
    axios.get("/api/python").then((res) => setData(res.data));

    axios.get("/api/test/route").then((res) => setData2(res.data));

    console.log(data);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white font-bold text-3xl">
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <div dangerouslySetInnerHTML={{ __html: data2 }} />
    </main>
  );
}
