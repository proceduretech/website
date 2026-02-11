"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DotnetDevelopmentRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/technologies/dotnet");
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-base">
      <div className="text-center">
        <p className="text-text-secondary">
          Redirecting to our .NET Development page...
        </p>
        <noscript>
          <meta httpEquiv="refresh" content="0;url=/technologies/dotnet" />
          <p>
            <a href="/technologies/dotnet" className="text-accent">
              Click here if you are not redirected
            </a>
          </p>
        </noscript>
      </div>
    </main>
  );
}
