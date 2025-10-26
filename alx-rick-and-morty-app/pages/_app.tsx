import type { AppProps } from 'next/app';
import ErrorBoundary from '../components/common/ErrorBoundary'; // <-- 1. Importa

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary> {/* <-- 2. Avvolgi */}
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;