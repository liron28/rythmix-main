import { MyLibraryPanel } from "./MyLibraryPanel";
import { NavPanelHeader } from "./NavPanelHeader";

export function NavPanel() {
  return (
    <nav className="nav-panel overflow-hidden">
      <NavPanelHeader />
      <MyLibraryPanel />
    </nav>
  );
}
