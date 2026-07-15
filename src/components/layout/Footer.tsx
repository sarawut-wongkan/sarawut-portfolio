function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-8">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

        <p>
          © {new Date().getFullYear()} Sarawut Wongkan.
          All rights reserved.
        </p>


        <p>
          Computer Engineering Student
          <span className="mx-2 text-green-500">
            •
          </span>
          Kasetsart University
        </p>

      </div>

    </footer>
  );
}

export default Footer;