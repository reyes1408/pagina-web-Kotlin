import { useState } from 'react';
import { modules } from '../data/courseData';

function SessionItem({ session, currentTopic, onNavigate }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-1.5 px-3 py-1.5 text-left text-sm font-semibold text-kotlin-purple hover:text-kotlin-violet transition-colors"
      >
        <span className="text-base">📌</span>
        <span>{session.label}</span>
        <span className={`ml-auto text-xs text-gray-500 transition-transform ${open ? 'rotate-90' : ''}`}>›</span>
      </button>

      {open && (
        <div className="ml-4 border-l border-navy-600 pl-2">
          {session.topics.map(topic => {
            const isActive = currentTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => onNavigate(topic.id)}
                className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-all mb-0.5
                  ${isActive
                    ? 'bg-kotlin-purple/20 text-kotlin-purple font-medium border border-kotlin-purple/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-navy-600'
                  }
                  ${topic.isExercise ? 'italic' : ''}
                `}
              >
                {topic.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Sidebar({ isOpen, currentTopic, onNavigate }) {
  return (
    <aside
      className={`fixed top-12 left-0 bottom-0 z-40 overflow-y-auto transition-all duration-300
        bg-navy-800 border-r border-navy-600
        ${isOpen ? 'w-56' : 'w-0 overflow-hidden'}`}
    >
      <nav className="py-3 px-1 min-w-[224px]">
        {modules.map(mod => {
          if (mod.type === 'intro') {
            const isActive = currentTopic === 'intro';
            return (
              <button
                key={mod.id}
                onClick={() => onNavigate('intro')}
                className={`w-full text-left px-3 py-2 text-sm rounded-lg mb-2 font-medium transition-all
                  ${isActive
                    ? 'bg-android-green/20 text-android-green border border-android-green/30'
                    : 'text-gray-300 hover:text-white hover:bg-navy-600'
                  }`}
              >
                🏠 Intro
              </button>
            );
          }

          if (mod.type === 'special') {
            return (
              <div key={mod.id} className="mt-3 pt-3 border-t border-navy-600">
                {mod.topics.map(topic => {
                  const isActive = currentTopic === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => onNavigate(topic.id)}
                      className={`w-full text-left px-3 py-2 text-sm rounded-lg font-semibold transition-all
                        ${isActive
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                          : 'text-yellow-500 hover:text-yellow-400 hover:bg-navy-600'
                        }`}
                    >
                      🏆 Proyecto Final
                    </button>
                  );
                })}
              </div>
            );
          }

          return (
            <div key={mod.id} className="mb-2">
              <p className="px-3 py-1 text-xs font-bold text-gray-500 uppercase tracking-widest">
                {mod.label}
              </p>
              {mod.sessions.map(session => (
                <SessionItem
                  key={session.id}
                  session={session}
                  currentTopic={currentTopic}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
