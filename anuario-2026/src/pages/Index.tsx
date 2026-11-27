import { useState } from "react";
import { BookCover } from "@/components/BookCover";
import { BookPages } from "@/components/BookPages";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="text-center py-8 px-4">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-wide">
          Anuário 2026
        </h1>
        <p className="text-muted-foreground font-body mt-2 text-lg">
          Escola Joaquim Andrade Meirelles
        </p>
      </header>

      {/* Book area */}
      <main className="flex-1 flex items-start justify-center px-4 pb-12">
        {!isOpen ? (
          <BookCover onOpen={() => setIsOpen(true)} />
        ) : (
          <BookPages />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
