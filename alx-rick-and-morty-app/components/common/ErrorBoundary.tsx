import React, { ReactNode } from 'react';


interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  // 1. Inizializzazione: All'inizio, non ci sono errori.
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  // 3. Log: Questo metodo viene chiamato subito dopo. È perfetto per registrare l'errore.
  //    Per ora, lo stampiamo solo nella console per vederlo durante lo sviluppo.
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  // 4. Render: Il cuore del componente!
  render() {
    // Se c'è un errore...
    if (this.state.hasError) {
      // ...mostriamo un'interfaccia di emergenza.
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }

    // Altrimenti, se va tutto bene, mostriamo i componenti figli normalmente.
    return this.props.children;
  }
}

export default ErrorBoundary;