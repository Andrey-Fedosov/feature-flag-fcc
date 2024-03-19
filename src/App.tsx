import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FeatureFlagGlobalState } from "./components/feature-flag/context/FeatureFlagGlobalState";
import { FeatureFlags } from "./components/feature-flag/FeatureFlags";

function App() {
  return (
    <div className="App">
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
