import Link from 'next/link';

const NotFound = () => {
return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="text-6xl font-bold text-[#FF4255]">404</h1>
        <h2 className="text-2xl mt-4">Page Not Found</h2>
        <p className="mt-2 text-lg">
            The page you are looking for was moved, removed, renamed or never existed.
        </p>
        <Link href="/" className="bg-[#FF4255] mt-6 px-4 py-2 text-white rounded-md hover:text-gray-200 transition transform hover:-translate-y-1">
            Back To Home
        </Link>
    </div>
);
};

export default NotFound;
