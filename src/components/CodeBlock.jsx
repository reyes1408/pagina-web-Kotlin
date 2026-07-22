import { useState, useCallback } from 'react';

// Very lightweight Kotlin syntax highlighter (no external deps).
// It returns React nodes so highlighted markup is never processed as Kotlin text.
function highlight(code) {
  const keywords = new Set(['fun', 'val', 'var', 'if', 'else', 'when', 'for', 'while', 'return',
    'class', 'object', 'interface', 'sealed', 'data', 'open', 'override', 'companion',
    'suspend', 'launch', 'async', 'await', 'flow', 'emit', 'collect', 'null', 'true',
    'false', 'is', 'as', 'in', 'out', 'by', 'get', 'set', 'init', 'constructor',
    'try', 'catch', 'finally', 'throw', 'import', 'package', 'private', 'public',
    'protected', 'internal', 'abstract', 'final', 'lateinit', 'by', 'delegate',
  ]);

  const tokenPattern = /("""[\s\S]*?"""|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)'|\/\/[^\n]*|\/\*[\s\S]*?\*\/|\b\d+(?:\.\d+)?[LfF]?\b|\b[A-Za-z_][A-Za-z0-9_]*\b)/g;
  const nodes = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenPattern.exec(code)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(code.slice(lastIndex, match.index));
    }

    const token = match[0];
    let className = '';

    if (token.startsWith('//') || token.startsWith('/*')) {
      className = 'text-gray-500 italic';
    } else if (token.startsWith('"') || token.startsWith("'")) {
      className = 'text-android-green';
    } else if (/^\d/.test(token)) {
      className = 'text-orange-400';
    } else if (keywords.has(token)) {
      className = 'text-kotlin-purple font-semibold';
    } else if (/^[A-Z]/.test(token)) {
      className = 'text-cyan-400';
    } else if (/^\s*\(/.test(code.slice(tokenPattern.lastIndex))) {
      className = 'text-yellow-300';
    }

    nodes.push(className
      ? <span key={`${match.index}-${token}`} className={className}>{token}</span>
      : token);
    lastIndex = tokenPattern.lastIndex;
  }

  if (lastIndex < code.length) {
    nodes.push(code.slice(lastIndex));
  }

  return nodes;
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
        <code className="font-mono text-gray-200">{highlight(code)}</code>
      </pre>
    </div>
  );
}
