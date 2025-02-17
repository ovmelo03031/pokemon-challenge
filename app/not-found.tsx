import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <Image
          src="/images/sad-pikachu.png"
          alt="Sad Pikachu"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold mb-4">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Looks like this Pokemon has escaped into the tall grass...
        </p>
        <Link 
          href="/"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
} 