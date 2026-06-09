export default function Particles() {
  return (
    <div
      className="particulas fixed top-0 left-0 w-full h-full z-[-1] opacity-[0.5]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 10% 20%, var(--primary) 0%, transparent 20%), 
          radial-gradient(circle at 90% 80%, var(--secondary) 0%, transparent 20%)
        `,
      }}
    />
  );
}
