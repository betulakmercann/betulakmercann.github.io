
export default function Contact() {
    return (
      <footer
        id="contact"
        className="bg-[#faf9fc] px-6 pb-16 pt-20 text-[#17151d] md:px-12 md:pt-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-gray-200 pt-12 md:pt-16">
            <h2 className="text-6xl font-semibold tracking-tight md:text-8xl">
              Contact<span className="text-purple-600">.</span>
            </h2>
  
            <a
              href="mailto:mailadresin@example.com"
              className="mt-8 inline-block text-base text-gray-600 transition-colors duration-300 hover:text-purple-600 md:text-lg"
            >
              betulakmercan1010@gmail..com
            </a>
          </div>
  
          <div className="mt-20 border-t border-gray-200 pt-6">
            <p className="text-xs tracking-wide text-gray-400">
              © {new Date().getFullYear()} Betül Akmercan.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  