import React from 'react';

interface SectionTitleProps {
    id?: string;
    children: React.ReactNode;
}
export default function SectionTitle({ id, children }: SectionTitleProps) {
    return <h2 id={id} className="section-title">{children}</h2>;
}