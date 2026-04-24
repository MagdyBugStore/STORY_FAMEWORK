import React from "react";
import "../src/styles/index.css";

import BoardLayout from "./components/board/BoardLayout";
import BoardGroup from "./components/board/BoardGroup";
import BoardItem from "./components/board/BoardItem";

// ── Desktop screens ──
import W01_TopicsScreen from "./screens/user/W01_TopicsScreen";
import W02_VideoScreen from "./screens/user/W02_VideoScreen";

// ── Mobile screens ──
import {
  M01_TopicsScreen,
  M02_VideoScreen,
} from "./screens/mobile/M_HardScreens";

export default function App() {
  const userScreens = 2;

  return (
    <BoardLayout>
      <BoardGroup
        title="القيم الإسلامية"
        count={userScreens}
        subtitle={`${userScreens} Screens · Desktop + Mobile`}
      >
        <BoardItem
          id="W01"
          name="شاشة الموضوعات"
          url="islamic-values.com/topics"
          mobile={<M01_TopicsScreen />}
        >
          <W01_TopicsScreen />
        </BoardItem>

        <BoardItem
          id="W02"
          name="شاشة الفيديو — كظم الغيظ"
          url="islamic-values.com/topics/kadhm-alghaydh"
          mobile={<M02_VideoScreen />}
        >
          <W02_VideoScreen />
        </BoardItem>
      </BoardGroup>
    </BoardLayout>
  );
}
