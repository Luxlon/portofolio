"use client";
import { useEffect, useState, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  subText,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  subText: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [showSubText, setShowSubText] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const wordsArray = words.split(" ");
  const subTextArray = subText.split(" ");

  const wordContainerRef = useRef<HTMLDivElement | null>(null);
  const subTextContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wordContainerRef.current) {
      animate(
        wordContainerRef.current.querySelectorAll("span.word"),
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      ).then(() => {
        setShowSubText(true);
      });
    }
  }, [wordContainerRef.current]);

  useEffect(() => {
    if (showSubText && subTextContainerRef.current) {
      animate(
        subTextContainerRef.current.querySelectorAll("span.subText"),
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.1),
        }
      ).then(() => {
        setShowButton(true);
      });
    }
  }, [showSubText]);

  // Modifikasi untuk memberikan warna biru pada kata-kata tertentu
  const renderWords = () => {
    return (
      <motion.div ref={wordContainerRef}>
        {wordsArray.map((word, idx) => {
          const isHighlighted = [ "Achmad", "Paris"].includes(word); // Cek apakah kata harus diwarnai biru
          return (
            <motion.span
              key={`word-${idx}`}
              className="word opacity-0" // Tidak gunakan text-black atau text-white di sini agar tidak tertimpa
              style={{
                color: isHighlighted ? "#3B82F6" : "", // Gunakan style inline untuk memastikan warna biru diterapkan
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  const renderSubText = () => {
    return (
      <motion.div ref={subTextContainerRef} className="mt-4">
        {subTextArray.map((word, idx) => {
          return (
            <motion.span
              key={`subText-${idx}`}
              className="subText dark:text-gray-400 text-gray-700 text-sm opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
        {showSubText && (
          <div className="dark:text-gray-400 text-gray-700 text-sm mt-4">
            {renderSubText()}
          </div>
        )}
        {showButton && (
  <div className="mt-6">
    <motion.a
      href="/CV Paris Achmad Fauzan.pdf"
      download
      className="px-4 py-2 bg-blue-500 text-white rounded inline-block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Download CV
    </motion.a>
  </div>
)}
      </div>
    </div>
  );
};
