"use client"
import TransactionsPage from "@/components/__organisms/TransactionsPage";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";

export default function Transactions() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const getCurrentUser = async (token: string) => {
    try {
      const res = await axios.get("https://finance-back-heee.onrender.com/auth/current-user", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      setUser(res.data)
    } catch (error) {
      router.push("/AuthLogin");
    }
  };

  useEffect(()=>{
    const token  = getCookie("auth_token")
    getCurrentUser(token as string)

  },[])
  if (!user) return null;
  return (
    <div>
      <TransactionsPage />
    </div>
  );
}
