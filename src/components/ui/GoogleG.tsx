/** Logotipo "G" do Google — usado no widget simulado de avaliacoes. */
export default function GoogleG({ className = 'size-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l6.9 5.3c4.1-3.8 6.6-9.4 6.6-15.6Z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.3c-1.9 1.3-4.4 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-7.1 5.5C8 41.4 15.4 46 24 46Z"
      />
      <path
        fill="#FBBC05"
        d="M11.5 28.5c-.5-1.4-.7-2.9-.7-4.5s.3-3.1.7-4.5L4.4 14C2.9 17 2 20.4 2 24s.9 7 2.4 10l7.1-5.5Z"
      />
      <path
        fill="#EA4335"
        d="M24 10.6c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.5 29.9 2 24 2 15.4 2 8 6.6 4.4 14l7.1 5.5c1.8-5.3 6.7-8.9 12.5-8.9Z"
      />
    </svg>
  )
}
