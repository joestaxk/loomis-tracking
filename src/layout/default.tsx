import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import React, { ReactNode } from "react";
import { Outlet } from "react-router";

interface LayoutDefaultProps {
    children?: ReactNode; // Make 'children' optional
}

const LayoutDefault: React.FC<LayoutDefaultProps> = () => {
    return (
        <>
            <Header />
            <div className="pt-20">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default LayoutDefault