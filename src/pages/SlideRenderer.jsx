import CodeBlock from '../components/CodeBlock';
import CodeEditor from '../components/CodeEditor';

// ── Intro page ───────────────────────────────────────────
export function IntroPage({ slide }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      {/* Logo */}
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-kotlin-purple via-kotlin-violet to-kotlin-orange flex items-center justify-center mb-6 shadow-2xl shadow-kotlin-purple/40">
        <span className="text-4xl font-black text-white">K</span>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kotlin-purple/20 border border-kotlin-purple/30 text-kotlin-purple text-xs font-semibold uppercase tracking-wider mb-4">
        MÓDULO 01
      </div>

      <h1 className="text-5xl font-black mb-3">
        <span className="text-white">Kotlin </span>
        <span className="bg-gradient-to-r from-kotlin-purple to-android-green bg-clip-text text-transparent">
          para Android
        </span>
      </h1>

      <p className="text-gray-400 text-base mb-8 max-w-md">
        El lenguaje moderno de Android.<br />
        4 sesiones · 19 temas · desde cero.
      </p>

      {/* Topics grid */}
      <div className="grid grid-cols-2 gap-2 max-w-2xl w-full mb-8">
        {slide.topics.map((topic) => (
          <div
            key={topic}
            className="px-4 py-2.5 rounded-lg bg-navy-700 border border-navy-600 text-sm text-gray-300 text-left hover:border-kotlin-purple/40 hover:text-white transition-colors"
          >
            {topic}
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500">
        Herramienta:{' '}
        <a
          href={slide.toolUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-kotlin-purple hover:text-kotlin-violet transition-colors font-semibold"
        >
          {slide.tool}
        </a>
        {' '}— sin instalación necesaria
      </p>
    </div>
  );
}

// ── Lesson page ──────────────────────────────────────────
export function LessonPage({ slide }) {
  return (
    <div>
      {/* Session badge */}
      <div className="mb-1">
        <span className="text-xs font-bold text-kotlin-purple uppercase tracking-widest">
          {slide.session} ·
        </span>
      </div>

      <h1 className="text-3xl font-black text-white mb-4">{slide.title}</h1>

      {slide.intro && (
        <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-2xl">
          {slide.intro}
        </p>
      )}

      {slide.blocks?.map((block, i) => {
        if (block.kind === 'code') {
          return (
            <div key={i}>
              {block.label && (
                <h3 className="text-sm font-semibold text-gray-300 mb-1 mt-5">{block.label}</h3>
              )}
              <CodeBlock code={block.code} label={block.label} />
            </div>
          );
        }

        if (block.kind === 'tip') {
          return (
            <div key={i} className="my-5 px-4 py-3 rounded-xl bg-kotlin-purple/10 border border-kotlin-purple/20 text-sm text-gray-300 leading-relaxed">
              {block.text}
            </div>
          );
        }

        if (block.kind === 'table') {
          return (
            <div key={i} className="my-5 overflow-x-auto">
              {block.title && (
                <h3 className="text-sm font-semibold text-gray-300 mb-2">{block.title}</h3>
              )}
              <table className="w-full text-sm rounded-xl overflow-hidden border border-navy-600">
                <thead>
                  <tr className="bg-navy-700">
                    {block.headers.map((h, j) => (
                      <th key={j} className="px-4 py-2.5 text-left text-kotlin-purple font-semibold text-xs uppercase tracking-wide">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j} className={j % 2 === 0 ? 'bg-navy-800' : 'bg-navy-700/50'}>
                      {row.map((cell, k) => (
                        <td key={k} className="px-4 py-2.5 text-gray-300">
                          {typeof cell === 'boolean' ? (
                            cell
                              ? <span className="text-android-green">✅ SÍ</span>
                              : <span className="text-kotlin-orange">❌ No</span>
                          ) : cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

// ── Exercise page ────────────────────────────────────────
export function ExercisePage({ slide }) {
  return (
    <div>
      <div className="mb-1">
        <span className="text-xs font-bold text-android-green uppercase tracking-widest">
          {slide.session} · Ejercicios
        </span>
      </div>
      <h1 className="text-3xl font-black text-white mb-6">{slide.title}</h1>

      <div className="space-y-10">
        {slide.exercises.map((ex, i) => (
          <div key={ex.id} className="p-5 rounded-2xl bg-navy-700/50 border border-navy-600">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-kotlin-purple/30 border border-kotlin-purple/50 text-kotlin-purple text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-semibold text-white text-base">{ex.title}</h3>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{ex.description}</p>

            <CodeEditor
              starter={ex.starter}
              solution={ex.solution}
              hint={ex.hint}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Summary page ─────────────────────────────────────────
export function SummaryPage({ slide }) {
  return (
    <div>
      <div className="mb-1">
        <span className="text-xs font-bold text-kotlin-purple uppercase tracking-widest">
          {slide.session} · RESUMEN
        </span>
      </div>
      <h1 className="text-3xl font-black text-white mb-6 flex items-center gap-2">
        {slide.title} 📋
      </h1>

      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm rounded-xl overflow-hidden border border-navy-600">
          <thead>
            <tr className="bg-navy-700">
              {slide.table.headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left text-kotlin-purple font-semibold text-xs uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.table.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-navy-800' : 'bg-navy-700/40'}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-gray-300">
                    {typeof cell === 'boolean' ? (
                      cell
                        ? <span className="inline-flex items-center gap-1 text-kotlin-orange font-semibold">✅ SÍ</span>
                        : <span className="inline-flex items-center gap-1 text-android-green">❌ No</span>
                    ) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-sm text-yellow-200 leading-relaxed">
        {slide.tip}
      </div>
    </div>
  );
}

// ── Project page ─────────────────────────────────────────
export function ProjectPage({ slide }) {
  return (
    <div>
      <div className="mb-1">
        <span className="text-xs font-bold text-yellow-500 uppercase tracking-widest">
          🏆 Proyecto Final
        </span>
      </div>
      <h1 className="text-3xl font-black text-white mb-2">{slide.title}</h1>
      <p className="text-gray-400 text-base mb-2">{slide.subtitle}</p>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed">{slide.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {slide.requirements.map((req, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-navy-700/50 border border-navy-600 hover:border-kotlin-purple/40 transition-colors"
          >
            <div className="text-2xl mb-2">{req.icon}</div>
            <h3 className="font-semibold text-white text-sm mb-1">{req.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{req.desc}</p>
          </div>
        ))}
      </div>

      <div className="px-4 py-3 rounded-xl bg-kotlin-purple/10 border border-kotlin-purple/20 text-sm text-gray-300 leading-relaxed">
        {slide.tip}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-android-green/5 border border-android-green/20">
        <p className="text-sm font-semibold text-android-green mb-2">▶ Empieza aquí</p>
        <a
          href="https://play.kotlinlang.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-android-green transition-colors"
        >
          play.kotlinlang.org → crea un nuevo archivo y empieza con tu data class
        </a>
      </div>
    </div>
  );
}
