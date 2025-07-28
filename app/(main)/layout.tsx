import Sidebar from "@/components/common/sidebar";
import MobileHeader from "@/components/common/mobile-header";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="h-full pt-[50px] lg:pt-0 lg:pl-[256px]">
        <div className="h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
