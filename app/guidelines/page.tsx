import type { Metadata } from "next";
import { GuidelinesTabs } from "@/components/features/guidelines-tabs";

export const metadata: Metadata = {
  title: "Guidelines",
  description:
    "Read the International Friends guidelines for hosts and students to ensure a rewarding cultural exchange experience.",
};

export default function GuidelinesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-wide">
        <h1 className="text-4xl font-display font-bold mb-8">Guidelines</h1>
        <GuidelinesTabs />
      </div>
    </div>
  );
}
