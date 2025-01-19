"use client";
import OverView from "@/components/__organisms/OverView";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "cookies-next";
import { motion } from "framer-motion";

export default function Overview() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const getCurrentUser = async (token: string) => {
    try {
      const res = await axios.get(
        "https://finance-back-heee.onrender.com/auth/current-user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(res.data);
    } catch (error) {
      router.push("/AuthLogin");
    }
  };

  useEffect(() => {
    const token = getCookie("auth_token");
    getCurrentUser(token as string);
  }, []);
  if (!user) return null;
  return (
    <>
      <motion.div
        className="p-8 w-full overflow-x-hidden overflow-scroll h-screen  "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, }}
        viewport={{
          once: true,
        }}
      >
        <OverView />
      </motion.div>
    </>
  );
}
