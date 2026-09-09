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
  const { isOpen, toggle: toggleSidebar, close: closeSidebar } = useSidebar();
  const {
    currentTopic, goTo, goNext, goPrev,
    currentIndex, total, progress, hasNext, hasPrev,
  } = useNavigation();

  const currentSlide = slides[currentTopic];
  const navigateFromSidebar = (id) => {
    goTo(id);
    if (window.innerWidth < 768) closeSidebar();
  };

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
        onFontIncrease={increase}
        onFontDecrease={decrease}
        onSidebarToggle={toggleSidebar}
      />

      <div className="flex pt-12">
        <Sidebar
          isOpen={isOpen}
          currentTopic={currentTopic}
          onNavigate={navigateFromSidebar}
          onClose={closeSidebar}
        />

        <main
          className={`min-w-0 flex-1 min-h-[calc(100vh-48px)] transition-[margin] duration-300 ${isOpen ? 'md:ml-56' : 'md:ml-0'}`}
        >
          <div className="w-full max-w-3xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
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
