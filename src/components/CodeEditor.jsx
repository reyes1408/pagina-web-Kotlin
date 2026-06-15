import { useState } from 'react';

export default function CodeEditor({ starter, solution, hint }) {
  const [code, setCode] = useState(starter);
  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const newCode = code.slice(0, selectionStart) + '    ' + code.slice(selectionEnd);
      setCode(newCode);
      // Restore cursor after indent
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = selectionStart + 4;
      }, 0);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden border border-navy-600 my-4">
      {/* Editor toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-navy-700 border-b border-navy-600">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-gray-400 ml-2 font-mono">Main.kt — Editor</span>
        </div>
        <div className="flex gap-2">
          {hint && (
            <button
              onClick={() => setShowHint(h => !h)}
              className="text-xs px-2 py-0.5 rounded border border-yellow-600/40 text-yellow-500 hover:border-yellow-500 transition-colors"
            >
              💡 Pista
            </button>
          )}
          <button
            onClick={() => setCode(starter)}
            className="text-xs px-2 py-0.5 rounded border border-navy-500 text-gray-400 hover:text-white transition-colors"
          >
            Reiniciar
          </button>
        </div>
      </div>

      {/* Hint banner */}
      {showHint && hint && (
        <div className="px-4 py-2 bg-yellow-500/10 border-b border-yellow-500/20 text-sm text-yellow-300">
          {hint}
        </div>
      )}

      {/* Textarea editor */}
      <div className="relative bg-navy-900">
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck={false}
          className="w-full p-4 font-mono text-sm text-gray-200 bg-transparent resize-none outline-none leading-relaxed min-h-[200px]"
          style={{ tabSize: 4 }}
          rows={code.split('\n').length + 2}
        />
      </div>

      {/* Solution toggle */}
      {solution && (
        <div className="border-t border-navy-600">
          <button
            onClick={() => setShowSolution(s => !s)}
            className="w-full px-4 py-2 text-xs text-center text-gray-500 hover:text-kotlin-purple transition-colors"
          >
            {showSolution ? '▲ Ocultar solución' : '▼ Ver solución'}
          </button>
          {showSolution && (
            <pre className="p-4 bg-android-green/5 border-t border-android-green/20 text-sm font-mono text-gray-300 overflow-x-auto">
              {solution}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
