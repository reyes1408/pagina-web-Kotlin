import { useTheme, useFontSize, useNavigation, useSidebar } from './hooks';
import { slides } from './data/courseData';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import NavButtons from './components/NavButtons';
import {
  IntroPage,
  LessonPage,
  ExercisePage,
  SummaryPage,
  ProjectPage,
} from './pages/SlideRenderer';

function renderSlide(slide) {
  if (!slide) return <p className="text-gray-400">Contenido no encontrado.</p>;

  switch (slide.type) {
    case 'intro':    return <IntroPage slide={slide} />;
    case 'lesson':   return <LessonPage slide={slide} />;
    case 'exercise': return <ExercisePage slide={slide} />;
    case 'summary':  return <SummaryPage slide={slide} />;
    case 'project':  return <ProjectPage slide={slide} />;
    default:         return <LessonPage slide={slide} />;
  }
}

export default function App() {
  const { isDark, toggle: toggleTheme } = useTheme();
  const { fontSize, increase, decrease } = useFontSize();
  const { isOpen, toggle: toggleSidebar } = useSidebar();
  const {
    currentTopic, goTo, goNext, goPrev,
    currentIndex, total, progress, hasNext, hasPrev,
  } = useNavigation();

  const currentSlide = slides[currentTopic];

  return (
    <div
      className="min-h-screen bg-navy-800 text-white"
      style={{ fontSize: `${fontSize}px`, '--font-scale': `${fontSize / 16}` }}
    >
      <Navbar
        isDark={isDark}
        onThemeToggle={toggleTheme}
        progress={progress}
        total={total}
        currentIndex={currentIndex}
        fontSize={fontSize}
        onFontIncrease={increase}
        onFontDecrease={decrease}
        onSidebarToggle={toggleSidebar}
      />

      <div className="flex pt-12">
        <Sidebar
          isOpen={isOpen}
          currentTopic={currentTopic}
          onNavigate={goTo}
        />

        <main
          className={`flex-1 min-h-[calc(100vh-48px)] transition-all duration-300 ${isOpen ? 'ml-56' : 'ml-0'}`}
        >
          <div className="max-w-3xl mx-auto px-6 py-8">
            {renderSlide(currentSlide)}

            <NavButtons
              onPrev={goPrev}
              onNext={goNext}
              hasPrev={hasPrev}
              hasNext={hasNext}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
