import React from "react";
import { Overlay, OverlayRelativeContainer } from "./OverlayLoader.styles";

export default function OverlayLoader({ children, loading }) {
  return (
    <OverlayRelativeContainer>
      {loading && (
        <Overlay>
          <span>
            <i className="fas fa-sync-alt"></i> Loading...
          </span>
        </Overlay>
      )}
      {children}
    </OverlayRelativeContainer>
  );
}
