export default function ProjectsPage() {
    return (
      <section id="projects" className="bg-retroBeige py-20">
        <h2 className="text-3xl font-retro text-center">Projekty</h2>
        <div className="flex flex-wrap justify-center mt-5">
          <div className="bg-retroGreen p-5 m-3 rounded text-center w-1/3">
            <img src="/project1-thumbnail.jpg" alt="Projekt 1" className="mx-auto w-20 rounded-full" />
            <h3 className="text-xl font-retro mt-3">Projekt 1</h3>
            <p className="mt-2">Opis projektu 1...</p>
          </div>
          <div className="bg-retroGreen p-5 m-3 rounded text-center w-1/3">
            <img src="/project2-thumbnail.jpg" alt="Projekt 2" className="mx-auto w-20 rounded-full" />
            <h3 className="text-xl font-retro mt-3">Projekt 2</h3>
            <p className="mt-2">Opis projektu 2...</p>
          </div>
          {/* Kolejne projekty */}
        </div>
      </section>
    );
  }
  