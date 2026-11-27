import { useState } from "react";
import { students, type Student } from "@/data/students";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

const STUDENTS_PER_PAGE = 8;

export const BookPages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(students.length / STUDENTS_PER_PAGE);

  const currentStudents = students.slice(
    currentPage * STUDENTS_PER_PAGE,
    (currentPage + 1) * STUDENTS_PER_PAGE
  );

  // Split into left and right columns
  const mid = Math.ceil(currentStudents.length / 2);
  const leftStudents = currentStudents.slice(0, mid);
  const rightStudents = currentStudents.slice(mid);

  // Get the first letter range for current page
  const firstLetter = currentStudents[0]?.name[0] ?? "";
  const lastLetter = currentStudents[currentStudents.length - 1]?.name[0] ?? "";
  const letterRange = firstLetter === lastLetter ? firstLetter : `${firstLetter} — ${lastLetter}`;

  return (
    <div className="w-full max-w-5xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
      {/* Book spread */}
      <div className="bg-book-spine rounded-t-sm flex items-center justify-center py-2">
        <BookOpen className="w-4 h-4 gold-text mr-2" />
        <span className="font-display text-sm gold-text tracking-widest uppercase">
          {letterRange}
        </span>
      </div>

      <div className="flex flex-col md:flex-row shadow-2xl rounded-b-lg overflow-hidden">
        {/* Left page */}
        <div className="book-page flex-1 p-6 md:p-10 page-lines min-h-[400px]">
          <div className="space-y-1">
            {leftStudents.map((student: Student, i: number) => (
              <StudentEntry 
                key={student.name} 
                student={student} 
                index={currentPage * STUDENTS_PER_PAGE + i} 
              />
            ))}
          </div>
        </div>

        {/* Spine divider */}
        <div className="hidden md:block w-1 bg-gradient-to-b from-book-spine via-book-leather to-book-spine shadow-inner" />

        {/* Right page */}
        <div className="book-page flex-1 p-6 md:p-10 page-lines min-h-[400px] border-t md:border-t-0 border-border">
          <div className="space-y-1">
            {rightStudents.map((student: Student, i: number) => (
              <StudentEntry 
                key={student.name} 
                student={student} 
                index={currentPage * STUDENTS_PER_PAGE + mid + i} 
              />
            ))}
          </div>

          {/* Page number */}
          <div className="mt-8 text-right">
            <span className="font-display text-sm text-muted-foreground italic">
              Página {currentPage + 1} de {totalPages}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((p: number) => Math.max(0, p - 1))}
          disabled={currentPage === 0}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-30 transition-all hover:bg-primary/90 font-body text-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </button>

        <div className="flex gap-1.5">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentPage ? "bg-accent scale-125" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentPage((p: number) => Math.min(totalPages - 1, p + 1))}
          disabled={currentPage === totalPages - 1}
          className="flex items-center gap-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-30 transition-all hover:bg-primary/90 font-body text-sm"
        >
          Próxima
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const StudentEntry = ({ student, index }: { student: Student; index: number }) => {
  const photo = student.photo;

  return (
    <div
      className="flex items-center justify-between gap-2 py-3 border-b border-border/30 opacity-0 animate-fade-up group"
      style={{ animationDelay: `${0.15 + index * 0.04}s` }}
    >
      {photo ? (
        <img
          src={photo}
          alt={`Foto de ${student.name}`}
          className="w-11 h-14 object-cover rounded-sm shrink-0"
          loading="lazy"
        />
      ) : (
        <div
          aria-hidden="true"
          className="w-11 h-14 rounded-sm shrink-0 bg-secondary text-muted-foreground flex items-center justify-center font-display text-sm"
        >
          {student.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
        </div>
      )}
      <div className="flex items-baseline gap-2 min-w-0 flex-1">
        <span className="font-display text-xs text-muted-foreground w-6 shrink-0">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <span className="font-display font-semibold text-foreground truncate">
          {student.name}
        </span>
      </div>
      <div className="flex items-center gap-1 ml-2 shrink-0">
        <span className="text-muted-foreground text-xs tracking-wider">
          {"·".repeat(3)}
        </span>
        <span className="font-body text-sm text-accent-foreground italic">
          {student.profession}
        </span>
      </div>
    </div>
  );
};
