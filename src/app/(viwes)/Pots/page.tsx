'use client';

import PotsPage from '@/components/__organisms/PotsPage';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
const Pots = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const getCurrentUser = async (token: string) => {
    try {
      const res = await axios.get("http://localhost:10000/auth/current-user", {
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
      <PotsPage />
    </div>
  );
};

export default Pots;
