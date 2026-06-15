import { useState, useCallback } from 'react';

// Very lightweight Kotlin syntax highlighter (no external deps)
function highlight(code) {
  const keywords = ['fun', 'val', 'var', 'if', 'else', 'when', 'for', 'while', 'return',
    'class', 'object', 'interface', 'sealed', 'data', 'open', 'override', 'companion',
    'suspend', 'launch', 'async', 'await', 'flow', 'emit', 'collect', 'null', 'true',
    'false', 'is', 'as', 'in', 'out', 'by', 'get', 'set', 'init', 'constructor',
    'try', 'catch', 'finally', 'throw', 'import', 'package', 'private', 'public',
    'protected', 'internal', 'abstract', 'final', 'lateinit', 'by', 'delegate',
  ];

  return code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Strings
    .replace(/("""[\s\S]*?"""|"(?:[^"\\]|\\.)*")/g, '<span class="text-android-green">$1</span>')
    // Comments
    .replace(/(\/\/[^\n]*)/g, '<span class="text-gray-500 italic">$1</span>')
    // Numbers
    .replace(/\b(\d+(?:\.\d+)?[LfF]?)\b/g, '<span class="text-orange-400">$1</span>')
    // Keywords
    .replace(new RegExp(`\\b(${keywords.join('|')})\\b`, 'g'), '<span class="text-kotlin-purple font-semibold">$1</span>')
    // Type annotations (capitalized words)
    .replace(/\b([A-Z][a-zA-Z0-9]*)\b/g, '<span class="text-cyan-400">$1</span>')
    // Function calls
    .replace(/\b([a-z][a-zA-Z0-9]*)(\s*\()/g, '<span class="text-yellow-300">$1</span>$2')
    // String interpolation
    .replace(/(\$\{[^}]+\}|\$[a-zA-Z_][a-zA-Z0-9_]*)/g, '<span class="text-orange-300">$1</span>');
}

export default function CodeBlock({ code, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  return (
    <div className="rounded-xl overflow-hidden border border-navy-600 my-4">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-navy-700 border-b border-navy-600">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          {label && (
            <span className="text-xs text-gray-400 ml-2 font-mono">{label}.kt</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-kotlin-purple transition-colors px-2 py-0.5 rounded hover:bg-navy-600"
        >
          {copied ? '✓ Copiado' : 'Copiar'}
        </button>
      </div>

      {/* Code */}
      <pre className="p-4 overflow-x-auto bg-navy-900 text-sm leading-relaxed">
        <code
          className="font-mono text-gray-200"
          dangerouslySetInnerHTML={{ __html: highlight(code) }}
        />
      </pre>
    </div>
  );
}
