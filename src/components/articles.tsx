
const articles = [
  {
    number: "01",
    title: "Extracting Password Dumps from Active Sessions: LSASS Dump Techniques",
    link: "https://medium.com/@betulakmercan/aktif-oturumlardan-parola-dökümü-almak-lsass-dump-teknikleri-af63f0234400",
  },
  {
    number: "02",
    title: "What is Injecasst Tool and Its Details",
    link: "https://medium.com/@betulakmercan/injecasst-aracı-nedir-ve-detaylar-7e3100516b18",
  },
  {
    number: "03",
    title: "What Is MIDDLEWARE?",
    link: "https://medium.com/@betulakmercan/middleware-b02e8796747a",
  },
  {
    number: "04",
    title: "Active Directory (AD DS) & CTI-AD Relationship",
    link: "https://medium.com/@betulakmercan/active-directory-ad-ds-cti-ad-i̇lişkisi-4d24c8b68489",
  },
  {
    number: "05",
    title: "How to Read Logs? All Stages & Wazuh-Logtest Tool",
    link: "https://medium.com/@betulakmercan/log-nasıl-okunur-tüm-aşamlar-wazuh-logtest-aracı-3fefcb64567a",
  }
];

export default function Articles() {
  return (
    <section
      id="articles"
      className="bg-[#faf9fc] px-6 pt-5 pb-10 text-[#17151d] md:px-12 sm:pt-14"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">

          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Medium Blogs
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
            Thoughts, research and articles on cybersecurity and technology.
          </p>
        </div>

        <div className="border-t border-gray-200">
          {articles.map((article) => (
            <div
              key={article.number}
              className="group flex items-center justify-between gap-5 border-b border-gray-200 py-7"
            >
              <div className="flex min-w-0 items-center gap-6">
                <span className="hidden text-xs tracking-widest text-purple-600 sm:block">
                  {article.number}
                </span>

                <h3 className="text-base font-medium leading-7 tracking-tight transition-colors duration-300 group-hover:text-purple-700 md:text-lg">
                  {article.title}
                </h3>
              </div>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 border border-gray-200 px-4 py-2 text-xs tracking-wide text-gray-600 transition-all duration-300 hover:border-purple-600 hover:bg-purple-600 hover:text-white"
              >
                Medium
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
