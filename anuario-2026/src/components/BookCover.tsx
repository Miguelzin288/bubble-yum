import React from "react";

/** @jsxRuntime classic */
interface BookCoverProps {
  onOpen: () => void;
}

export const BookCover = ({ onOpen }: BookCoverProps) => {
  return (
    <button
      onClick={onOpen}
      className="book-cover rounded-lg w-full max-w-md aspect-[3/4] flex flex-col items-center justify-center gap-6 p-10 cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden"
    >
      {/* Gold decorative border */}
      <div className="absolute inset-4 border-2 gold-border rounded pointer-events-none" />
      <div className="absolute inset-6 border gold-border rounded pointer-events-none opacity-50" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-16 h-16 gold-text"
        aria-hidden="true"
      >
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </svg>
      
      <div className="text-center space-y-3">
        <h2 className="font-display text-3xl md:text-4xl font-bold gold-text">
          Anuário
        </h2>
        <p className="font-display text-xl gold-text opacity-80">
          2026
        </p>
        <div className="w-24 h-0.5 bg-book-gold/50 mx-auto" />
        <p className="font-body text-sm gold-text opacity-70 mt-4">
          Escola Joaquim Andrade Meirelles
        </p>
      </div>

      <p className="font-body text-xs gold-text opacity-50 absolute bottom-6 animate-pulse">
        Clique para abrir
      </p>
    </button>
  );
};
