export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white" style={{ height: "100dvh" }}>
      <div className="w-screen h-full max-w-[360px] m-auto">{children}</div>
    </div>
  );
}
