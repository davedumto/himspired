"use client"
import { Link, P } from "@/components/common/typography";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type TabValue = "all" | "thrift" | "luxury" | "senetors";

interface Props {
  activeTab: TabValue;
  setActiveTab: (value: TabValue) => void;
}

const ShopNavigationBar = ({ activeTab, setActiveTab }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLUListElement>(null);

  const links = [
    {
      name: "All",
      value: "all" as TabValue
    },
    {
      name: "Thrift",
      value: "thrift" as TabValue
    },
    {
      name: "Luxury",
      value: "luxury" as TabValue
    },
    {
      name: "Senetors",
      value: "senetors" as TabValue
    },
  ] as const;

  const goBack = useRouter().push;

  useEffect(() => {
    if (sliderRef.current && tabsContainerRef.current) {
      const activeTabElement = tabsContainerRef.current.querySelector(`[data-value="${activeTab}"]`);
      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement as HTMLElement;
        sliderRef.current.style.transform = `translateX(${offsetLeft}px)`;
        sliderRef.current.style.width = `${offsetWidth}px`;
      }
    }
  }, [activeTab]);

  return (
    <>
      <div className="w-full mt-[41.5px] px-[120px]">
        <div className="w-full flex items-center justify-between">
          <div className="w-[10%] flex items-center justify-start gap-3">
            <ChevronLeft 
              className="cursor-pointer" 
              onClick={() => goBack("/")} 
              size={16} 
            />
            <Link 
              onClick={() => goBack("/")} 
              fontFamily="kiona" 
              className="font-normal text-[14px] text-[black] hover:text-black no-underline"
            >
              Home
            </Link>
          </div>
          <div className="w-[90%] flex items-center justify-center">
            <div className="relative w-[383px]">
              <ul 
                ref={tabsContainerRef}
                className="w-full flex items-center justify-between bg-[#F7F7F7] rounded-[100px] p-[4px]"
              >
                {links.map(({ name, value }) => (
                  <div
                    onClick={() => setActiveTab(value)}
                    key={value}
                    data-value={value}
                    className="w-min-[49px] rounded-[100px] h-[23px] cursor-pointer px-[12px] py-[4px] flex items-center justify-center relative z-10"
                  >
                    <P 
                      fontFamily="kiona" 
                      className="text-[#1E1E1ECC] text-[12px] font-normal text-center cursor-pointer"
                    >
                      {name}
                    </P>
                  </div>
                ))}
                <div
                  ref={sliderRef}
                  className="absolute top-[4px] left-0 h-[23px] bg-white rounded-[100px] transition-all duration-300 ease-in-out z-0"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopNavigationBar;