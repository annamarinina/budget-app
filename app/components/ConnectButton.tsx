'use client';
import { useTellerConnect } from 'teller-connect-react';

const ConnectButton = () => {

    console.log('app ID: ', process.env.NEXT_PUBLIC_APP_ID);

    const { open, ready } = useTellerConnect({
        applicationId: process.env.NEXT_PUBLIC_APP_ID ?? 'no app ID found',
        onSuccess: (authorization) => {
          console.log(authorization.accessToken);
        },
    });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => open()} disabled={!ready}>
        Connect your bank account
      </button>
    </main>
  );
}

export default ConnectButton;
