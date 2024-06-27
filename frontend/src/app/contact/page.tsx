export default function ContactPage() {
    return (
      <section id="contact" className="bg-retroBeige py-20 text-center">
        <h2 className="text-3xl font-retro">Kontakt</h2>
        <form className="mt-5 max-w-md mx-auto">
          <label className="block text-left">Imię:</label>
          <input type="text" id="name" name="name" required className="w-full p-2 mt-2 border-2 rounded" />
          
          <label className="block text-left mt-4">Email:</label>
          <input type="email" id="email" name="email" required className="w-full p-2 mt-2 border-2 rounded" />
          
          <label className="block text-left mt-4">Wiadomość:</label>
          <textarea id="message" name="message" required className="w-full p-2 mt-2 border-2 rounded"></textarea>
          
          <button type="submit" className="bg-retroBrown text-white px-4 py-2 mt-4 rounded">Wyślij</button>
        </form>
      </section>
    );
  }
  