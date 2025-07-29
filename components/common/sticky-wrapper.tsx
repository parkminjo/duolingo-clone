interface Props {
  children: React.ReactNode;
}

const StickyWrapper = ({ children }: Props) => {
  return (
    <div className="sticky bottom-6 hidden w-[368px] lg:block">
      <div className="sticky top-6 flex min-h-[cal(100vh-48px)] flex-col gap-y-4">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
