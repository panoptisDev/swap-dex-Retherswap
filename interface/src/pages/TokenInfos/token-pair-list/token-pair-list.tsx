import React, { useState } from 'react';
import styled from 'styled-components';
import { Fonts } from 'theme';
import { TokenInfosCard } from '../token-infos-card';
import Column from 'components/Column';
import TokenPairRow from './token-pair-row/token-pair-row';
import { TokenPairListGrid } from './token-pair-list-grid';
import Paginator from 'components/Paginator/Paginator';
import { HideSmall } from 'components/Hide/hide-small';
import { HideExtraSmall } from 'components/Hide/hide-extra-small';
import { Pair, Token } from 'models/schema';

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.bg3};
`;

export const RowDivider = styled(Divider)`
  height: 1px;
`;

export default function TokenPairList({ token, pairs }: { token?: Token; pairs: Pair[] }) {
  const elementsPerPage = 10;
  const [page, setPage] = useState(1);
  return (
    <Column style={{ width: '100%' }}>
      <h1>Pairs</h1>
      <TokenInfosCard>
        <TokenPairListGrid>
          <HideExtraSmall>
            <Fonts.blue fontWeight={600}>#</Fonts.blue>
          </HideExtraSmall>
          <Fonts.blue fontWeight={600}>Pair</Fonts.blue>
          <Fonts.blue fontWeight={600}>TVL</Fonts.blue>
          <HideSmall>
            <Fonts.blue fontWeight={600}>Volume 24H</Fonts.blue>
          </HideSmall>
          <HideSmall>
            <Fonts.blue fontWeight={600}>Volume 7D</Fonts.blue>
          </HideSmall>
        </TokenPairListGrid>
        <Divider></Divider>
        {pairs.length > 0
          ? pairs.slice((page - 1) * elementsPerPage, page * elementsPerPage).map((pair, index) => (
              <Column key={`token-pair-row-${pair.id}`} style={{ gap: '1em' }}>
                <TokenPairRow
                  index={(page - 1) * elementsPerPage + index + 1}
                  token={token}
                  pair={pair}
                  key={pair.id}
                ></TokenPairRow>
                <RowDivider></RowDivider>
              </Column>
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <Column key={`skeleton-token-pair-row-${index}`} style={{ gap: '1em' }}>
                <TokenPairRow index={(page - 1) * elementsPerPage + index + 1}></TokenPairRow>
                <RowDivider />
              </Column>
            ))}
        <Paginator
          page={page}
          elementsPerPage={elementsPerPage}
          count={pairs.length}
          onPageChange={(page) => {
            setPage(page);
          }}
        ></Paginator>
      </TokenInfosCard>
    </Column>
  );
}
