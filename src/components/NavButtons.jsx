export default function NavButtons({ onPrev, onNext, hasPrev, hasNext }) {
  return (
    <div className="flex justify-between mt-10 pt-6 border-t border-navy-600">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all
          ${hasPrev
            ? 'bg-navy-700 text-gray-200 hover:bg-navy-600 hover:text-white border border-navy-500'
            : 'opacity-30 cursor-not-allowed bg-navy-800 text-gray-600 border border-navy-700'
          }`}
      >
        ← Anterior
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all
          ${hasNext
            ? 'bg-kotlin-purple text-white hover:bg-kotlin-violet shadow-lg shadow-kotlin-purple/25'
            : 'opacity-30 cursor-not-allowed bg-navy-700 text-gray-600'
          }`}
      >
        Siguiente →
      </button>
    </div>
  );
}
