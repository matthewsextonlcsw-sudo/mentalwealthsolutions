export function GoldDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
      <div className="w-2 h-2 rotate-45 bg-gold/40 mx-4" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
