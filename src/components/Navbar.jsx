export default function Navbar({ isDark, onThemeToggle, progress, total, currentIndex, fontSize, onFontIncrease, onFontDecrease, onSidebarToggle }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center h-12 px-4 border-b
      bg-navy-800 border-navy-600 dark:bg-navy-800 dark:border-navy-600
      light:bg-white light:border-gray-200">

      {/* Hamburger */}
      <button
        onClick={onSidebarToggle}
        className="mr-3 p-1.5 rounded hover:bg-navy-600 transition-colors text-gray-300"
        aria-label="Toggle sidebar"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      {/* Logo + title */}
      <div className="flex items-center gap-2 select-none">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-kotlin-purple to-kotlin-violet flex items-center justify-center text-white font-bold text-xs">
          K
        </div>
        <span className="font-semibold text-sm text-white tracking-wide uppercase">
          Kotlin Android — <span className="text-kotlin-purple">Módulo 01</span>
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Font controls */}
      <div className="flex items-center gap-1 mr-4">
        <button
          onClick={onFontIncrease}
          className="px-2 py-0.5 text-xs font-bold text-gray-300 hover:text-white hover:bg-navy-600 rounded transition-colors"
        >
          A+
        </button>
        <button
          onClick={onFontDecrease}
          className="px-2 py-0.5 text-xs font-bold text-gray-300 hover:text-white hover:bg-navy-600 rounded transition-colors"
        >
          A-
        </button>
      </div>

      {/* Theme toggle */}
      <button
        onClick={onThemeToggle}
        className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border
          border-navy-500 text-gray-300 hover:border-kotlin-purple hover:text-kotlin-purple transition-colors mr-4"
      >
        {isDark ? (
          <><span>🌙</span><span>Oscuro</span></>
        ) : (
          <><span>☀️</span><span>Claro</span></>
        )}
      </button>

      {/* Progress */}
      <div className="flex items-center gap-2 min-w-[120px]">
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {currentIndex + 1} / {total}
        </span>
        <div className="flex-1 h-1.5 bg-navy-600 rounded-full overflow-hidden w-20">
          <div
            className="h-full rounded-full bg-gradient-to-r from-kotlin-purple to-android-green transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
