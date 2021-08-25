import React, { useState } from "react";
import styled from "styled-components";

const SheetsContainer = styled.div`
  display: flex;
  position: relative;
`;

const Sheet = styled.div`
  flex: 0.1;
  cursor: pointer;
`;

const ActiveSheet = styled.div`
  flex: 0.1;
  cursor: pointer;
  font-weight: 800;
`;

export default function Sheets() {
  const [sheets, setSheets] = useState([
    { sheetName: "Investments" },
    { sheetName: "Real Estate" },
    { sheetName: "others" },
  ]);
  const [activeSheet, setActiveSheet] = useState(0);
  const onSelectSheet = (index) => {
    setActiveSheet(index);
  };
  return (
    <SheetsContainer>
      {sheets.map((sheet, index) => {
        return index === activeSheet ? (
          <ActiveSheet key={index}>{sheet.sheetName}</ActiveSheet>
        ) : (
          <Sheet
            onClick={() => {
              onSelectSheet(index);
            }}
            key={index}
          >
            {sheet.sheetName}
          </Sheet>
        );
      })}
    </SheetsContainer>
  );
}
