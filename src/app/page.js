import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="mb-4 text-lg">
          This is your go-to platform for managing users efficiently and effectively.
          Explore our features and make the most out of your experience!
        </p>
        <Link href={'/user-management'}>
          <Button>
            Go to User Manager
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex items-center">
      <Image src="/images/management.png" alt="Logo" width={50} height={50} />
        <span className="ml-2 text-xl font-semibold">User Manager</span>
      </div>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">About</Link></li>
        <li><Link href="/">Contact</Link></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-black p-4 text-center text-white">
      <p>&copy; {new Date().getFullYear()} User Manager. All rights reserved.</p>
    </footer>
  );
}
