"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { SquareCode } from "lucide-react";

export function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-accent"
    >
      <div className="absolute inset-0 w-full h-full bg-grid" />
      <div className="relative z-10 text-center px-4 md:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <SquareCode className="h-16 w-16 text-primary animate-pulse" />
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary-foreground to-primary"
        >
          Leet Code Tracker
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto"
        >
          Track, Analyze, and Conquer LeetCode Challenges—Your Personalized
          Progress Tracker Awaits!
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25"
          >
            <RegisterLink>Sign Up </RegisterLink>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className=" bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            <LoginLink>Login</LoginLink>
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </motion.div>
  );
}
