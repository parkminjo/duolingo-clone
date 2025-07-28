import MobileSidebar from "./mobile-sidebar";

const MobileHeader = () => {
  return (
    <div className="fixed top-0 z-50 flex h-[50px] w-full items-center border-b bg-green-500 px-6 lg:hidden">
      <MobileSidebar />
    </div>
  );
};

export default MobileHeader;
