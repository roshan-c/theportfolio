export default function Footer() {
  return (
    <footer className="border-t border-border bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-secondary-foreground">
            {new Date().getFullYear()} Roshan Christison
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/roshan-c" className="text-secondary-foreground hover:text-primary">
              GitHub
            </a>
            <a href="https://x.com/r09han" className="text-secondary-foreground hover:text-primary">
              Twitter
            </a>
            <a href="https://gartblog.xyz" className="text-secondary-foreground hover:text-primary">
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

