import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
    ${`tw
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden

`}
`;

export function HomePage() {
    return <PageContainer>
        Atlas Premium Auto Shield
    </PageContainer>
}