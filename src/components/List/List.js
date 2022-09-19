import React from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  list-style: none;
  test-align: left;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
}
`;

const Label = styled.span`
  font-weight: strong;
`;

export default function List({ items }) {
  return (
    <ListWrapper>
      {items.map((item) => (
        <ListItem key={item.label}>
          <Label>{item.label}</Label>
          {item.value}
        </ListItem>
      ))}
    </ListWrapper>
  );
}
