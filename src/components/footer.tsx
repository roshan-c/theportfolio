export default function Footer() {
  return (
    <footer className="border-t border-border bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-secondary-foreground">
            © {new Date().getFullYear()} Jane Doe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-secondary-foreground hover:text-primary">
              Instagram
            </a>
            <a href="#" className="text-secondary-foreground hover:text-primary">
              Twitter
            </a>
            <a href="#" className="text-secondary-foreground hover:text-primary">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

