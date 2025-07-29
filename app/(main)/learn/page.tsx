import FeedWrapper from "@/components/common/feed-wrapper";
import StickyWrapper from "@/components/common/sticky-wrapper";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>Sticky sidebar</StickyWrapper>
      <FeedWrapper>my feed</FeedWrapper>
    </div>
  );
};

export default LearnPage;
