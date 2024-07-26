const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      {/* todo: navbar */}
      <main className="pt-40 pb-20 bg-slate-200">{children}</main>
      {/* todo: footer */}
    </div>
  );
};

export default MarketingLayout;
