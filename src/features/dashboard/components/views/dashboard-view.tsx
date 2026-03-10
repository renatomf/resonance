import { PageHeader } from "@/components/page-header";
import { HeroPattern } from "../hero-pattern";
import { DashboardHeader } from "./dashboard-header";
import { TextInputPanel } from "../text-input-panel";
import { QuickActionsPanel } from "../quick-actions-panel";

export function DashboardView() {
  return (
    <div className="relative">
      <PageHeader title="Home" className="lg:hidden"/>
      <HeroPattern />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashboardHeader />
        <TextInputPanel />
        <QuickActionsPanel />
      </div>
    </div>
  );
};
