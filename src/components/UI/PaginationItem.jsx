import React, { useState, useContext } from 'react';
import { Pagination } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import { Context } from '../../';

const PaginationItem = observer(() => {
  const [currentPage, setPage] = useState(0);
  const { item } = useContext(Context);

  item.setPage(currentPage);

  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        marginBottom: 44,
        marginTop: 40,
      }}>
      <Pagination
        total={125}
        boundaries={-1}
        defaultValue={1}
        onChange={setPage}
      />
    </div>
  );
});

export default PaginationItem;
