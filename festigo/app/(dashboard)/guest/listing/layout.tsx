"use client";

import GuestTopBar from "@/components/common/guest/TopBar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen bg-[#FEF4F4]">
            {/* Fixed top bar */}
            <div className="fixed left-[17%] right-4 z-50 bg-[#FEF4F4] w-full">
                <GuestTopBar />
            </div>
            {/* Scrollable content */}
            <div className="flex-1 pt-[7rem] overflow-y-auto">
                {children}
            </div>
        </div>
    );
}


