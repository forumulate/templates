import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container not-found">
      <h1>Page not found</h1>
      <p>Nothing is published at this address.</p>
      <p>
        <Link href="/" className="button button--primary">
          Go to the home page
        </Link>
      </p>
    </section>
  );
}
